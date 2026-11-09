import Image from "next/image";
import type { Game } from "@/lib/games";
import styles from "./GameCard.module.css";

// ゲーム1本ぶん。detail を付けると、説明文と「ステータス画面」風の制作情報まで表示する。
export default function GameCard({ game, detail = false }: { game: Game; detail?: boolean }) {
  return (
    <article className={styles.card} id={game.slug}>
      <a className={styles.thumb} href={game.play.href} target="_blank" rel="noopener noreferrer" tabIndex={-1}>
        <Image src={game.image} alt={`${game.title}のゲーム画面`} width={640} height={360} />
      </a>
      <p className={styles.genre}>{game.genre}</p>
      <h3 className={styles.title}>{game.title}</h3>
      <p className={styles.catch}>{game.catchcopy}</p>
      {detail ? (
        <>
          <p className={styles.description}>{game.description}</p>
          <dl className={`status ${styles.meta}`}>
            <div>
              <dt>対応</dt>
              <dd>{game.platform}</dd>
            </div>
            <div>
              <dt>制作</dt>
              <dd>{game.period}</dd>
            </div>
            <div>
              <dt>技術</dt>
              <dd>{game.tags.join("・")}</dd>
            </div>
            {game.credit && (
              <div>
                <dt>協力</dt>
                <dd>{game.credit}</dd>
              </div>
            )}
          </dl>
        </>
      ) : (
        // 一覧では、制作期間の1項目だけを小さなステータスで見せる
        <dl className={`status ${styles.metaShort}`}>
          <div>
            <dt>制作</dt>
            <dd>{game.period}</dd>
          </div>
        </dl>
      )}
      <a className={`cursor ${styles.play}`} href={game.play.href} target="_blank" rel="noopener noreferrer">
        {game.play.label}
        <span className="arrow" aria-hidden="true">
          ↗
        </span>
        <span className={styles.srOnly}>（外部サイトが新しいタブで開きます）</span>
      </a>
    </article>
  );
}
