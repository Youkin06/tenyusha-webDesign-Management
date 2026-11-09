// 掲載するゲームの一覧。トップページとゲームページの両方がここを読む。
// 内容はポートフォリオ（youkin06.github.io/portfolio）の作品情報をもとにしている。

export type Game = {
  slug: string;
  title: string;
  genre: string;
  catchcopy: string;
  description: string;
  image: string;
  platform: string;
  period: string;
  tags: string[];
  credit?: string;
  play: { href: string; label: string };
  featured: boolean;
};

export const games: Game[] = [
  {
    slug: "bokunonikki",
    title: "ぼくのにっき",
    genre: "2Dアクションホラー",
    catchcopy: "日記に線を描いて、ぼくを導け。",
    description:
      "子どもの日記の世界を探検するホラーゲーム。ノートに直接線を書き込み、主人公をゴールへ導きます。イラストはすべて手描きで、ホラーゲームの実況は見るけれど自分では遊ばない人の「はじめての一本」を目指しました。",
    image: "/games/bokunonikki.jpg",
    platform: "PC（ブラウザ）",
    period: "2025年6月",
    tags: ["Unity", "手描きイラスト", "GC甲子園ノミネート"],
    credit: "音楽のみ外部制作",
    play: { href: "https://unityroom.com/games/bokunonikki", label: "unityroomで遊ぶ" },
    featured: true,
  },
  {
    slug: "siro",
    title: "あなたはシロです。",
    genre: "3Dアクションパズル",
    catchcopy: "あえてクロになれ。",
    description:
      "白と黒の状態を切り替えて進むアクションパズル。シロのあいだは警察に気づかれず、クロになると追いかけられます。わざとクロになって警察を誘導し、その動きを利用して仕掛けを突破します。",
    image: "/games/siro.jpg",
    platform: "PC（ブラウザ）",
    period: "2日間で制作",
    tags: ["Unity", "3D", "unity1week"],
    play: { href: "https://unityroom.com/games/anatahasirodesu", label: "unityroomで遊ぶ" },
    featured: true,
  },
  {
    slug: "kamorogue",
    title: "KamoRogue",
    genre: "2Dローグライクアクション",
    catchcopy: "鴨池の地下には、ダンジョンがある。",
    description:
      "カモが地下ダンジョンを進むローグライクアクション。ステージを進むごとに、盾・ダッシュ・二段ジャンプなどの能力をひとつ選んで強くなります。ドット絵とBGMも自作です。",
    image: "/games/kamorogue.jpg",
    platform: "PC（ブラウザ）",
    period: "2025年10月〜2026年2月",
    tags: ["Python", "Pyxel", "ドット絵"],
    credit: "ボス戦BGM：協力者",
    play: { href: "https://youkin06.github.io/KamoRogue/", label: "ブラウザで遊ぶ" },
    featured: true,
  },
  {
    slug: "depthdiary",
    title: "DEPTH DIARY",
    genre: "2Dアドベンチャー",
    catchcopy: "タップひとつで、何度でも。",
    description:
      "紫を基調にしたドット絵のアドベンチャー。横スクロール、追いかけっこ、ボス戦と変化のあるステージを、ジョイスティックとBURSTボタンで進みます。やられてもタップひとつですぐリトライできます。",
    image: "/games/depthdiary.jpg",
    platform: "スマートフォン（ブラウザ）",
    period: "2024年3月〜10月",
    tags: ["Unity", "ドット絵", "GC甲子園U18セミファイナル"],
    credit: "音楽のみ外部制作",
    play: {
      href: "https://play.unity.com/ja/games/962dd261-d374-4db9-83cf-7050148df431/depth-diary",
      label: "Unity Playで遊ぶ",
    },
    featured: false,
  },
  {
    slug: "slimeslice",
    title: "スライムスライス",
    genre: "3Dカジュアル",
    catchcopy: "スワイプで、斬る。",
    description:
      "指のスワイプでスライムを斬るカジュアルゲーム。斬った瞬間の効果音とエフェクトにこだわり、短い時間で気持ちよく遊べるようにしました。ウェーブが進むと敵が増え、強化を選びながら戦います。",
    image: "/games/slimeslice.jpg",
    platform: "PC（ブラウザ）",
    period: "2025年7月",
    tags: ["Unity", "Blender", "3D"],
    credit: "サウンド：協力者",
    play: { href: "https://unityroom.com/games/slimeslice", label: "unityroomで遊ぶ" },
    featured: false,
  },
  {
    slug: "circusal",
    title: "CIRCUSAL",
    genre: "2Dカジュアル",
    catchcopy: "跳ねるたびに、加速する。",
    description:
      "バスケットボールのドリブルから着想を得たスコアアタック。黄色い板に着地した瞬間にタップすると跳ね上がり、どんどん加速します。天遊社にとって、はじめてストアに並んだタイトルです。",
    image: "/games/circusal.jpg",
    platform: "Android",
    period: "2023年1月〜3月",
    tags: ["Unity", "イラスト", "Google Playリリース"],
    credit: "音楽のみ外部制作",
    play: {
      href: "https://applion.jp/CIRCUSAL/android-com.YOUKINCOMPANY.CIRCUSAL/",
      label: "掲載ページを見る",
    },
    featured: false,
  },
];
