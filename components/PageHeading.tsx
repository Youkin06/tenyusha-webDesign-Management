import styles from "./PageHeading.module.css";

// 下層ページの一番上に置く見出し。
export default function PageHeading({ en, title, lead }: { en: string; title: string; lead: string }) {
  return (
    <div className={styles.heading}>
      <div className="container">
        <span className="section-label">{en}</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lead}>{lead}</p>
      </div>
    </div>
  );
}
