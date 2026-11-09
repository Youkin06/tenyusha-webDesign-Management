import Link from "next/link";
import styles from "./PageHeading.module.css";

// 下層ページの一番上に置く見出し。パンくず（今いる場所）と、英語＋日本語のページ名。
export default function PageHeading({ en, title, lead }: { en: string; title: string; lead: string }) {
  return (
    <div className={styles.heading}>
      <div className="container">
        <nav aria-label="パンくずリスト" className={styles.breadcrumb}>
          <ol>
            <li>
              <Link href="/">TOP</Link>
            </li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
        <h1 className={styles.title}>
          <span className={styles.en}>{en}</span>
          <span className={styles.ja}>{title}</span>
        </h1>
        <p className={styles.lead}>{lead}</p>
      </div>
    </div>
  );
}
