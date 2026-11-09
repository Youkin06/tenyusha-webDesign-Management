import styles from "./PageHeading.module.css";

// 下層ページの一番上に置く見出し。
export default function PageHeading({ title, lead }: { title: string; lead: string }) {
  return (
    <div className={styles.heading}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lead}>{lead}</p>
      </div>
    </div>
  );
}
