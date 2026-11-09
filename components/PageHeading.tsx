import Link from "next/link";
import styles from "./PageHeading.module.css";

// 下層ページの一番上に置く見出し。パンくず（今いる場所）と、筆文字のページ名に英字のラベルを添える。
export default function PageHeading({ en, title, lead }: { en: string; title: string; lead: string }) {
  return (
    <div className={styles.heading}>
      <div className="container">
        <nav aria-label="パンくずリスト" className={styles.breadcrumb}>
          <ol>
            <li>
              <Link href="/" className="cursor">
                TOP
              </Link>
            </li>
            <li aria-current="page">{title}</li>
          </ol>
        </nav>
        <p className={styles.label} aria-hidden="true">
          {en}
        </p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lead}>{lead}</p>
      </div>
    </div>
  );
}
