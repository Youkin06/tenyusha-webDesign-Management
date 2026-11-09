// トップページの「制作日誌」。作品ごとの短い制作メモ。
// 日付は作品を実際に公開した年月、内容は lib/games.ts に書いた事実だけを使う。

export type Topic = {
  date: string;
  category: "公開" | "開発";
  title: string;
  href: string;
};

export const topics: Topic[] = [
  {
    date: "2026.08",
    category: "公開",
    title: "『あなたはシロです。』シロとクロを切り替え、クロのときに追ってくる警察を誘導して仕掛けを突破するアクションパズル。",
    href: "/games#siro",
  },
  {
    date: "2026.02",
    category: "公開",
    title: "『KamoRogue』ステージを進むごとに、盾・ダッシュ・二段ジャンプなどの能力をひとつ選んで強くなるローグライク。",
    href: "/games#kamorogue",
  },
  {
    date: "2025.07",
    category: "公開",
    title: "『スライムスライス』斬った瞬間の効果音とエフェクトにこだわった、スワイプで遊ぶ3Dカジュアル。",
    href: "/games#slimeslice",
  },
  {
    date: "2025.06",
    category: "公開",
    title: "『ぼくのにっき』日記に直接線を書き込んで主人公を導くホラー。イラストはすべて手描き。",
    href: "/games#bokunonikki",
  },
];
