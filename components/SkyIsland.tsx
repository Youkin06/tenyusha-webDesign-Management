"use client";

// トップページの「夜空に浮かぶ3Dドットの浮島」。
// three.js（ブラウザで3Dを描くライブラリ）で、小さな立方体（ボクセル）を積んで島をつくる。
// わざと低い解像度で描いてから引き伸ばすことで、ドット絵のような見た目にしている。

import { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./SkyIsland.module.css";

// 何px四方を1ドットに見せるか。大きいほど粗いドットになる
const DOT_SIZE = 3;

type Voxel = { x: number; y: number; z: number; color: number };

// 座標から毎回同じ乱数をつくる（島の形が読み込みのたびに変わらないように）
function hash(x: number, y: number, z: number) {
  let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(z, 1274126177);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967295;
}

function pick(colors: number[], x: number, y: number, z: number) {
  return colors[Math.floor(hash(x, y, z) * colors.length)];
}

const GRASS = [0x3f8f5a, 0x4a9c63, 0x37804f];
const DIRT = [0x8a5a3c, 0x7a4e34];
const ROCK = [0x4b5079, 0x565c88, 0x434870];
const SAKURA = [0xf2a7c3, 0xf7bfd3, 0xe58fb0];
const PINE = [0x2f6e4a, 0x2a6342, 0x357852];
const VERMILION = 0xe0452b;
const STONE = [0x9aa0b8, 0x8a90a8];

/** 浮島の地形と、上に乗せる鳥居・木・灯籠などを、ボクセルの一覧にする。 */
function buildIsland() {
  const solid = new Map<string, Voxel>();
  const glow: Voxel[] = [];
  const put = (x: number, y: number, z: number, color: number) => solid.set(`${x},${y},${z}`, { x, y, z, color });

  // 地面：上が草、その下に土、さらに下は岩。中心ほど深く、逆さの山の形になる
  const R = 9;
  for (let x = -R; x <= R; x++) {
    for (let z = -R; z <= R; z++) {
      const d = Math.hypot(x, z);
      if (d > R - hash(x, 0, z) * 1.5) continue;
      const depth = Math.floor((1 - d / R) * 9 + hash(x, 1, z) * 2) + 1;
      for (let y = 0; y >= -depth; y--) {
        if (y === 0) put(x, y, z, pick(GRASS, x, y, z));
        else if (y >= -2) put(x, y, z, pick(DIRT, x, y, z));
        else put(x, y, z, pick(ROCK, x, y, z));
      }
    }
  }

  // 鳥居へ続く石畳
  for (let z = -3; z <= 8; z++) put(0, 0, z, pick(STONE, 0, 0, z));

  // 鳥居
  for (let y = 1; y <= 6; y++) {
    put(-3, y, -4, VERMILION);
    put(3, y, -4, VERMILION);
  }
  for (let x = -3; x <= 3; x++) {
    put(x, 4, -4, VERMILION);
    put(x, 6, -4, VERMILION);
  }
  for (let x = -5; x <= 5; x++) put(x, 7, -4, 0x2a1f2e);
  put(-5, 8, -4, 0x2a1f2e);
  put(5, 8, -4, 0x2a1f2e);

  // 木（幹＋丸い葉）
  const tree = (cx: number, cz: number, height: number, radius: number, leaves: number[]) => {
    for (let y = 1; y <= height; y++) put(cx, y, cz, 0x6b4a3a);
    const cy = height + radius - 0.5;
    const r = Math.ceil(radius);
    for (let x = -r; x <= r; x++)
      for (let y = -r; y <= r; y++)
        for (let z = -r; z <= r; z++) {
          if (Math.hypot(x, y * 1.2, z) > radius) continue;
          if (hash(cx + x, y, cz + z) < 0.12) continue;
          put(cx + x, Math.round(cy + y), cz + z, pick(leaves, cx + x, y, cz + z));
        }
  };
  tree(-5, 1, 3, 2.6, SAKURA);
  tree(5, -1, 4, 2.2, PINE);
  tree(-6, -4, 2, 1.8, PINE);

  // 石灯籠（てっぺんが光る）
  for (const x of [-2, 2]) {
    put(x, 1, 1, STONE[0]);
    put(x, 2, 1, STONE[1]);
    glow.push({ x, y: 3, z: 1, color: 0xffd27a });
    put(x, 4, 1, STONE[0]);
  }

  // 小さな池
  for (let x = 2; x <= 6; x++)
    for (let z = 3; z <= 7; z++) {
      if (Math.hypot(x - 4, z - 5) < 1.9) put(x, 0, z, 0x4a7bd1);
    }

  // 島のまわりに浮かぶ小さな岩
  const rock = (cx: number, cy: number, cz: number, size: number) => {
    for (let x = -size; x <= size; x++)
      for (let z = -size; z <= size; z++)
        for (let y = -size; y <= 0; y++) {
          if (Math.hypot(x, y * 1.4, z) > size + 0.3) continue;
          put(cx + x, cy + y, cz + z, y === 0 ? pick(GRASS, x, y, z) : pick(ROCK, x, y, z));
        }
  };
  rock(13, -2, 2, 2);
  rock(-12, 3, -5, 1);
  rock(-9, -6, 8, 1);

  // 星のかけら（光るドット）
  glow.push({ x: 0, y: 11, z: -4, color: 0xe8b64c });

  return { solid: [...solid.values()], glow };
}

/** ボクセルの一覧を、1回で描ける InstancedMesh（同じ形をたくさん並べる仕組み）にする。 */
function toMesh(voxels: Voxel[], material: THREE.Material, size = 1) {
  const geometry = new THREE.BoxGeometry(size, size, size);
  const mesh = new THREE.InstancedMesh(geometry, material, voxels.length);
  const matrix = new THREE.Matrix4();
  const color = new THREE.Color();
  voxels.forEach((v, i) => {
    matrix.setPosition(v.x, v.y, v.z);
    mesh.setMatrixAt(i, matrix);
    mesh.setColorAt(i, color.setHex(v.color));
  });
  return mesh;
}

/** 16×16 のドット絵を読み込み、1ピクセル＝1ボクセルの立体にする。 */
function loadSprite(src: string, scale: number): Promise<Voxel[]> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);
      const { data } = ctx.getImageData(0, 0, img.width, img.height);
      const voxels: Voxel[] = [];
      for (let py = 0; py < img.height; py++)
        for (let px = 0; px < img.width; px++) {
          const i = (py * img.width + px) * 4;
          if (data[i + 3] < 128) continue;
          const color = (data[i] << 16) | (data[i + 1] << 8) | data[i + 2];
          // 厚みを2ドット分にして、横から見ても立体に見えるようにする
          for (let layer = 0; layer < 2; layer++)
            voxels.push({ x: px * scale, y: (img.height - 1 - py) * scale, z: layer * scale, color });
        }
      resolve(voxels);
    };
    img.onerror = reject;
    img.src = src;
  });
}

export default function SkyIsland() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // WebGL が使えない端末では、浮島を出さずに夜空の背景だけにする（ページ全体を止めない）
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    } catch {
      return;
    }
    renderer.setPixelRatio(1 / DOT_SIZE);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 400);

    scene.add(new THREE.HemisphereLight(0x9fb4ff, 0x2a1f3a, 1.6));
    const moonLight = new THREE.DirectionalLight(0xdbe4ff, 2.2);
    moonLight.position.set(-12, 20, 14);
    scene.add(moonLight);

    // 浮島
    const island = new THREE.Group();
    scene.add(island);
    const solidMaterial = new THREE.MeshLambertMaterial();
    const glowMaterial = new THREE.MeshBasicMaterial();
    const { solid, glow } = buildIsland();
    island.add(toMesh(solid, solidMaterial), toMesh(glow, glowMaterial));

    // 星空：四角い点をたくさん散らす
    const starCount = 1400;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const tint = new THREE.Color();
    for (let i = 0; i < starCount; i++) {
      const dir = new THREE.Vector3(hash(i, 1, 0) * 2 - 1, hash(i, 2, 0) * 2 - 1, hash(i, 3, 0) * 2 - 1).normalize();
      dir.multiplyScalar(70 + hash(i, 4, 0) * 60);
      starPositions.set([dir.x, dir.y, dir.z], i * 3);
      tint.setHex(hash(i, 5, 0) < 0.2 ? 0xe8b64c : 0xdfe6ff);
      starColors.set([tint.r, tint.g, tint.b], i * 3);
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute("color", new THREE.BufferAttribute(starColors, 3));
    const starMaterial = new THREE.PointsMaterial({ size: 1.1, vertexColors: true });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // 島の上を走るキャラクター（2枚のドット絵を交互に表示してアニメーションさせる）
    const characters: { frames: THREE.InstancedMesh[] }[] = [];
    const disposables: THREE.InstancedMesh[] = [];
    const addCharacter = async (sources: string[], position: [number, number, number], scale: number) => {
      const frames = await Promise.all(
        sources.map(async (src, i) => {
          const mesh = toMesh(await loadSprite(src, scale), solidMaterial, scale);
          mesh.position.set(...position);
          mesh.visible = i === 0;
          return mesh;
        }),
      );
      if (disposed) return frames.forEach((m) => m.geometry.dispose());
      frames.forEach((m) => island.add(m));
      disposables.push(...frames);
      characters.push({ frames });
    };
    let disposed = false;
    addCharacter(["/sprites/kamo-run1.png", "/sprites/kamo-run2.png"], [1.2, 0.6, 4], 0.28).catch(() => {});
    addCharacter(["/sprites/depth-player1.png", "/sprites/depth-player2.png"], [-3.4, 0.6, 5], 0.24).catch(() => {});

    // マウスの位置で、少しだけ視点を動かす
    const pointer = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX / window.innerWidth - 0.5;
      pointer.y = e.clientY / window.innerHeight - 0.5;
    };
    window.addEventListener("pointermove", onPointerMove);

    // 画面サイズに合わせる。縦長のスマホでは少し引いて、島を上寄せにする
    const lookAt = new THREE.Vector3();
    let baseDistance = 40;
    const resize = () => {
      const { clientWidth: w, clientHeight: h } = container;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      // 横長の画面では、左の文字と重ならないよう島を右に寄せる
      const portrait = w / h < 1;
      const wide = w > 900;
      baseDistance = portrait ? 40 / Math.max(w / h, 0.55) : 46;
      lookAt.set(wide ? -12 : 0, portrait ? -7 : -1, 0);
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    // 画面外にあるときは描画を止めて、電池と処理を節約する
    let visible = true;
    const intersection = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    intersection.observe(container);

    const clock = new THREE.Clock();
    let frameId = 0;
    const render = () => {
      const t = clock.getElapsedTime();
      if (!reduceMotion) {
        island.rotation.y = t * 0.12;
        island.position.y = Math.sin(t * 0.8) * 0.5;
        stars.rotation.y = t * 0.01;
        const frame = Math.floor(t * 6) % 2;
        characters.forEach(({ frames }) => frames.forEach((m, i) => (m.visible = i === frame)));
      } else {
        island.rotation.y = -0.5;
      }
      camera.position.x += (pointer.x * 6 - camera.position.x) * 0.05;
      camera.position.y += (12 - pointer.y * 4 - camera.position.y) * 0.05;
      camera.position.z = baseDistance;
      camera.lookAt(lookAt);
      renderer.render(scene, camera);
    };
    const loop = () => {
      frameId = requestAnimationFrame(loop);
      if (visible) render();
    };
    loop();

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      intersection.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      island.traverse((obj) => {
        if (obj instanceof THREE.InstancedMesh) obj.geometry.dispose();
      });
      disposables.forEach((m) => m.geometry.dispose());
      starGeometry.dispose();
      [solidMaterial, glowMaterial, starMaterial].forEach((m) => m.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div ref={containerRef} className={styles.canvas} aria-hidden="true" />;
}
