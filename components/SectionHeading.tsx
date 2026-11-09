import styles from "./SectionHeading.module.css";

// セクションの見出し。筆文字の日本語が主役。
// en を渡したときだけ、英字の小さなラベルを上に添える（トップの主要なセクション用）。
// en がないときは一段小さくして、ページの中の見出しとして使う。
export default function SectionHeading({ en, ja }: { en?: string; ja: string }) {
  return (
    <div className={en ? styles.heading : `${styles.heading} ${styles.sub}`}>
      {en && (
        <p className={styles.label} aria-hidden="true">
          {en}
        </p>
      )}
      <h2 className={styles.title}>{ja}</h2>
    </div>
  );
}
