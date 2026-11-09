import Link from "next/link";
import SkyIsland from "@/components/SkyIsland";
import GameCard from "@/components/GameCard";
import CtaBand from "@/components/CtaBand";
import { games } from "@/lib/games";
import styles from "./page.module.css";

const values = [
  {
    title: "手ざわりのある遊び",
    text: "ドット絵も3Dモデルも、自分たちの手でつくります。触った瞬間に気持ちいい操作感を大切にしています。",
  },
  {
    title: "ひと言で伝わるアイデア",
    text: "「日記に線を描く」「わざとクロになる」。説明しなくても遊びたくなる、ひとつの発想から作品をつくります。",
  },
  {
    title: "小さく作って、すぐ遊ぶ",
    text: "2日間のゲームジャムから、半年かけた長編まで。まず遊べる形にして、遊びながら面白さを磨きます。",
  },
];

export default function Home() {
  const featured = games.filter((g) => g.featured);

  return (
    <>
      <section className={styles.hero}>
        <SkyIsland />
        <div className={`container ${styles.heroInner}`}>
          {/* 読み込み時に一度だけ、1行ずつ浮かび上がる */}
          <h1 className={styles.heroTitle}>
            <span className={styles.rise}>天に遊び、</span>
            <span className={styles.rise}>夢をつくる。</span>
          </h1>
          <p className={styles.heroLead}>
            天遊社は、ドット絵から3D・VRまで、
            <br className={styles.pcOnly} />
            手ざわりのある遊びをつくるゲームスタジオです。
          </p>
          <div className={styles.heroActions}>
            <Link href="/games" className="btn">
              ゲームを見る <span aria-hidden="true">→</span>
            </Link>
            <Link href="/about" className="text-link">
              天遊社について
            </Link>
          </div>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <div className={styles.sectionHead}>
          <h2 className="section-title">看板タイトル</h2>
          <Link href="/games" className="text-link">
            すべてのゲーム（{games.length}本）
          </Link>
        </div>
        <div className={styles.gameGrid}>
          {featured.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </section>

      <section className={`container ${styles.section} ${styles.values}`}>
        <h2 className="section-title">大切にしていること</h2>
        <ol className={styles.valueList}>
          {values.map((v, i) => (
            <li key={v.title}>
              <span className={styles.valueNum}>{["一", "二", "三"][i]}</span>
              <div>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand
        title="次の一本を、一緒に。"
        text="ゲームジャムに出たことがある人、ドット絵を描いている人。天遊社は、つくる仲間を探しています。"
        href="/recruit"
        label="採用情報を見る"
      />
    </>
  );
}
