import styles from "./SectionHeading.module.css";

// セクションの見出し。筆文字の日本語を大きく、英字は小さなラベルとして上に添える。
export default function SectionHeading({ en, ja }: { en: string; ja: string }) {
  return (
    <div className={styles.heading}>
      <p className={styles.label} aria-hidden="true">
        {en}
      </p>
      <h2 className={styles.title}>{ja}</h2>
    </div>
  );
}
