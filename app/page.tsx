import Link from "next/link";
import SkyIsland from "@/components/SkyIsland";
import GameCard from "@/components/GameCard";
import CtaBand from "@/components/CtaBand";
import SectionHeading from "@/components/SectionHeading";
import { games } from "@/lib/games";
import { topics } from "@/lib/topics";
import styles from "./page.module.css";

export default function Home() {
  const featured = games.filter((g) => g.featured);
  // ステータス画面の数字は、ゲームのデータから数える（新しい数字はつくらない）
  const browserCount = games.filter((g) => g.platform.includes("ブラウザ")).length;
  const developingCount = games.filter((g) => g.platform.includes("開発中")).length;

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
            天遊社は、ドット絵の2Dアクションから3D、VRまで
            <br className={styles.pcOnly} />
            つくっているゲームスタジオです。
            <br className={styles.pcOnly} />
            ほとんどの作品はブラウザで遊べます。
          </p>
        </div>
        {/* 会話ウィンドウの「つづきがあります」の印。下へ読み進められることを示す */}
        <span className={styles.next} aria-hidden="true">
          ▼
        </span>
      </section>

      <section className={`container ${styles.section}`}>
        <SectionHeading en="DIARY" ja="制作日誌" />
        <ul className={styles.diary}>
          {topics.map((t) => (
            <li key={t.title}>
              <Link href={t.href} className={`cursor ${styles.diaryItem}`}>
                <time className={styles.diaryDate}>{t.date}</time>
                <span className={styles.diaryCategory}>{t.category}</span>
                <span className={styles.diaryTitle}>{t.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.gamesBand}>
        <div className="container">
          <div className={styles.sectionHead}>
            <SectionHeading en="GAMES" ja="看板タイトル" />
            <Link href="/games" className="btn">
              すべてのゲーム（{games.length}本）
            </Link>
          </div>
          <div className={styles.gameGrid}>
            {featured.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </div>
      </section>

      <section className={`container ${styles.section} ${styles.about}`}>
        <div>
          <SectionHeading en="ABOUT" ja="天遊社について" />
          <p className={styles.mission}>『天に遊ぶ。』</p>
          <p className={styles.aboutText}>
            天遊社では、絵も3Dモデルもプログラムも基本は自分たちでつくり、
            まず遊べるものを用意してから、何度も遊んで直していきます。
          </p>
          <Link href="/about" className="btn">
            会社概要を見る
          </Link>
        </div>
        {/* ゲームのステータス画面に見立てた、天遊社の数字 */}
        <div className={`status ${styles.stats}`}>
          <p className={styles.statsTitle}>天遊社のステータス</p>
          <dl>
            <div>
              <dt>つくったゲーム</dt>
              <dd>{games.length}</dd>
            </div>
            <div>
              <dt>ブラウザで遊べる</dt>
              <dd>{browserCount}</dd>
            </div>
            <div>
              <dt>開発中</dt>
              <dd>{developingCount}</dd>
            </div>
          </dl>
        </div>
      </section>

      <CtaBand
        en="RECRUIT"
        title="一緒にゲームをつくりませんか"
        text="ゲームプログラマー、ドット絵アーティスト、サウンドクリエイターを募集しています。"
        href="/recruit"
        label="採用情報を見る"
      />
    </>
  );
}
