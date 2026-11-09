"use client";

// GIFのように、音なしで繰り返す短い動画。
// 画面に見えているときだけ再生し、見えなくなったら止める（ページが重くならないように）。
// 「動きを減らす」設定の人には再生せず、静止画（poster）だけを見せる。

import { useEffect, useRef } from "react";

export default function ClipVideo({ src, poster, label }: { src: string; poster: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // 自動再生が止められている環境では、静止画のままにする
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video ref={ref} src={src} poster={poster} muted loop playsInline preload="none" aria-label={label} />
  );
}
