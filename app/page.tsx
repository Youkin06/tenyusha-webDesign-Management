import Image from "next/image";
import Link from "next/link";
import SkyIsland from "@/components/SkyIsland";
import GameCard from "@/components/GameCard";
import CtaBand from "@/components/CtaBand";
import Logo from "@/components/Logo";
import SectionHeading from "@/components/SectionHeading";
import { games } from "@/lib/games";
import { topics } from "@/lib/topics";
import styles from "./page.module.css";

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
        </div>
        <span className={styles.scroll} aria-hidden="true">
          SCROLL
        </span>
      </section>

      <section className={`container ${styles.section}`}>
        <SectionHeading en="TOPICS" ja="トピックス" />
        <ul className={styles.topics}>
          {topics.map((t) => (
            <li key={t.title}>
              <Link href={t.href} className={styles.topic}>
                <span className={styles.topicThumb}>
                  {t.image ? (
                    <Image src={t.image} alt="" width={640} height={360} />
                  ) : (
                    <Logo size={72} />
                  )}
                </span>
                <span className={styles.topicMeta}>
                  <time>{t.date}</time>
                  <span className={styles.topicCategory}>{t.category}</span>
                </span>
                <span className={styles.topicTitle}>{t.title}</span>
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
              すべてのゲーム（{games.length}本） <span className="arrow">&gt;</span>
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
            天遊社は、夜空を見上げたときのような、自由で大きな遊び心をゲームで届けるスタジオです。
            ドット絵も3Dモデルも自分たちの手でつくり、2日間のゲームジャムから半年かけた長編まで、
            まず遊べる形にして、遊びながら面白さを磨いています。
          </p>
          <Link href="/about" className="btn">
            会社概要を見る <span className="arrow">&gt;</span>
          </Link>
        </div>
        <ul className={styles.numbers}>
          <li>
            <span className={styles.num}>{games.length}</span>
            <span className={styles.numLabel}>公開したタイトル</span>
          </li>
          <li>
            <span className={styles.num}>3</span>
            <span className={styles.numLabel}>つくれる表現（2D・3D・VR）</span>
          </li>
          <li>
            <span className={styles.num}>2023</span>
            <span className={styles.numLabel}>はじめてストアに出した年</span>
          </li>
        </ul>
      </section>

      <CtaBand
        en="RECRUIT"
        title="次の一本を、一緒に。"
        text="ゲームジャムに出たことがある人、ドット絵を描いている人。天遊社は、つくる仲間を探しています。"
        href="/recruit"
        label="採用情報を見る"
      />
    </>
  );
}
