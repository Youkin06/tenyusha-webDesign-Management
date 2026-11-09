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
    slug: "sausage-smash",
    title: "Sausage Smash",
    genre: "VRアクション",
    catchcopy: "焼いて、トスして、スマッシュ。",
    description:
      "フライ返しでソーセージを打って、迫ってくる野菜にぶつけるVRアクションです。当たった野菜はソーセージになります。ソーセージを高くトスして、テニスのサーブのように打ち込むところがいちばん気持ちいいところです。いまはリリースに向けて開発を続けています。",
    image: "/games/sausage-smash.jpg",
    platform: "VR（開発中）",
    period: "開発中",
    tags: ["Unity", "VR", "チーム開発"],
    credit: "エンジニア3名のチームで開発",
    play: { href: "https://youtu.be/YkrrAr-tfY4", label: "プレイ動画を見る" },
    featured: true,
  },
  {
    slug: "bokunonikki",
    title: "ぼくのにっき",
    genre: "2Dアクションホラー",
    catchcopy: "この日記、なにかおかしい。",
    description:
      "子どもが書いた日記の中を進むホラーゲームです。ノートに線を描いて、「ぼく」をゴールまで連れていきます。絵はすべて手描きです。ホラー実況を見るのは好きだけど、自分で遊ぶのはちょっと怖い。そんな人に最初の一本として遊んでほしくてつくりました。",
    image: "/games/bokunonikki.jpg",
    platform: "PC（ブラウザ）",
    period: "2025年6月",
    tags: ["Unity", "手描きイラスト", "2D"],
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
      "シロとクロを切り替えながら進むアクションパズルです。シロでいるあいだは警察に見つかりませんが、クロになると追いかけられます。わざとクロになって警察をおびき寄せ、その動きを利用して仕掛けを突破します。",
    image: "/games/siro.jpg",
    platform: "PC（ブラウザ）",
    period: "2026年8月",
    tags: ["Unity", "3D", "シェーダー"],
    play: { href: "https://unityroom.com/games/anatahasirodesu", label: "unityroomで遊ぶ" },
    featured: true,
  },
  {
    slug: "kamorogue",
    title: "KamoRogue",
    genre: "2Dローグライクアクション",
    catchcopy: "鴨池の地下には、ダンジョンがある。",
    description:
      "カモが主人公のローグライクアクションです。ステージをひとつ越えるたびに、盾、ダッシュ、二段ジャンプなどから能力をひとつ選んで強くなっていきます。Python のゲームエンジン Pyxel でつくっていて、ドット絵とBGM（ボス戦以外）も社内で用意しました。",
    image: "/games/kamorogue.jpg",
    platform: "PC（ブラウザ）",
    period: "2025年10月〜2026年2月",
    tags: ["Python", "Pyxel", "ドット絵"],
    credit: "ボス戦BGM：協力クリエイター",
    play: { href: "https://youkin06.github.io/KamoRogue/", label: "ブラウザで遊ぶ" },
    featured: false,
  },
  {
    slug: "depthdiary",
    title: "DEPTH DIARY",
    genre: "2Dアドベンチャー",
    catchcopy: "何回やられても、すぐやり直せる。",
    description:
      "紫色が印象的なドット絵のアドベンチャーです。横スクロール、追いかけっこ、ボス戦と、ステージごとに遊び方が変わります。操作は画面のジョイスティックとBURSTボタンだけ。やられてもタップですぐにやり直せます。",
    image: "/games/depthdiary.jpg",
    platform: "スマートフォン（ブラウザ）",
    period: "2024年3月〜10月",
    tags: ["Unity", "ドット絵", "2D"],
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
    catchcopy: "とにかくスライムを斬りまくる。",
    description:
      "画面をスワイプしてスライムを斬るゲームです。ウェーブが進むたびにスライムが増えていくので、強化をひとつずつ選びながら耐えていきます。斬ったときの音とエフェクトは何度も調整しました。",
    image: "/games/slimeslice.jpg",
    platform: "PC（ブラウザ）",
    period: "2025年7月",
    tags: ["Unity", "Blender", "3D"],
    credit: "サウンド：協力クリエイター",
    play: { href: "https://unityroom.com/games/slimeslice", label: "unityroomで遊ぶ" },
    featured: false,
  },
  {
    slug: "circusal",
    title: "CIRCUSAL",
    genre: "2Dカジュアル",
    catchcopy: "着地でタップ、どんどん速くなる。",
    description:
      "バスケのドリブルをヒントにしたスコアアタックです。黄色い板に着地する瞬間にタップすると高く跳ねて、そのたびにスピードが上がります。天遊社で最初に Google Play に出したゲームです。",
    image: "/games/circusal.jpg",
    platform: "Android",
    period: "2023年1月〜3月",
    tags: ["Unity", "イラスト", "Android"],
    credit: "音楽のみ外部制作",
    play: {
      href: "https://applion.jp/CIRCUSAL/android-com.YOUKINCOMPANY.CIRCUSAL/",
      label: "掲載ページを見る",
    },
    featured: false,
  },
];
