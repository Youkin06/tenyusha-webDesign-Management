import Image from "next/image";
import type { Game } from "@/lib/games";
import styles from "./GameCard.module.css";

// ゲーム1本ぶんのカード。detail を付けると、説明文やクレジットまで表示する。
export default function GameCard({ game, detail = false }: { game: Game; detail?: boolean }) {
  return (
    <article className={styles.card} id={game.slug}>
      <div className={styles.thumb}>
        <Image src={game.image} alt={`${game.title}のゲーム画面`} width={640} height={360} />
        <span className={styles.genre}>{game.genre}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{game.title}</h3>
        <p className={styles.catch}>{game.catchcopy}</p>
        {detail && (
          <>
            <p className={styles.description}>{game.description}</p>
            <dl className={styles.meta}>
              <div>
                <dt>対応</dt>
                <dd>{game.platform}</dd>
              </div>
              <div>
                <dt>制作</dt>
                <dd>{game.period}</dd>
              </div>
              {game.credit && (
                <div>
                  <dt>協力</dt>
                  <dd>{game.credit}</dd>
                </div>
              )}
            </dl>
          </>
        )}
        <ul className={styles.tags}>
          {game.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <a className={`btn ${styles.play}`} href={game.play.href} target="_blank" rel="noopener noreferrer">
          {game.play.label}
          <span aria-hidden="true">↗</span>
          <span className={styles.srOnly}>（外部サイトが新しいタブで開きます）</span>
        </a>
      </div>
    </article>
  );
}
