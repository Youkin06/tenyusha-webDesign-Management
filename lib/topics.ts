// トップページの「制作日誌」。日付は、作品を実際に公開した年月にそろえている。
// 天遊社そのものは架空の企業なので、設立のお知らせだけは架空の内容。

export type Topic = {
  date: string;
  category: "お知らせ" | "ゲーム";
  title: string;
  href: string;
};

export const topics: Topic[] = [
  {
    date: "2026.04",
    category: "お知らせ",
    title: "株式会社天遊社を設立しました（架空）",
    href: "/about",
  },
  {
    date: "2026.02",
    category: "ゲーム",
    title: "『KamoRogue』をブラウザで公開。鴨池の地下ダンジョンに挑もう",
    href: "/games#kamorogue",
  },
  {
    date: "2025.07",
    category: "ゲーム",
    title: "『スライムスライス』を公開。スワイプでスライムを斬る3Dカジュアル",
    href: "/games#slimeslice",
  },
];
