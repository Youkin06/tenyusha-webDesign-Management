// 天遊社のロゴマーク：月白の落款（はんこ）の中に、ドットで描いた三日月と星。
// ドットの位置は円の計算で決めているので、サイズを変えても形が崩れない。

const GRID = 12;

function isMoon(x: number, y: number) {
  const cx = x + 0.5;
  const cy = y + 0.5;
  const inOuter = (cx - 5.6) ** 2 + (cy - 6) ** 2 < 4.4 ** 2;
  const inCut = (cx - 7.6) ** 2 + (cy - 4.9) ** 2 < 3.7 ** 2;
  return inOuter && !inCut;
}

// 右下の小さな星（十字のドット）
const STAR = new Set(["9,8", "8,9", "9,9", "10,9", "9,10"]);

const pixels: [number, number][] = [];
for (let y = 0; y < GRID; y++) {
  for (let x = 0; x < GRID; x++) {
    if (isMoon(x, y) || STAR.has(`${x},${y}`)) pixels.push([x, y]);
  }
}

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="-1 -1 14 14" role="img" aria-label="天遊社のロゴ" shapeRendering="crispEdges">
      <rect x="-1" y="-1" width="14" height="14" rx="1" fill="var(--geppaku)" />
      {pixels.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="var(--tetsukon)" />
      ))}
    </svg>
  );
}
