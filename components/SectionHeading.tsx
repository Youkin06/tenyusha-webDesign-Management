import styles from "./SectionHeading.module.css";

// セクションの見出し。ドット文字の英語を大きく、日本語を添えて「目次」のように並べる。
export default function SectionHeading({
  en,
  ja,
  as: Tag = "h2",
  center = false,
}: {
  en: string;
  ja: string;
  as?: "h1" | "h2";
  center?: boolean;
}) {
  return (
    <div className={center ? `${styles.heading} ${styles.center}` : styles.heading}>
      <Tag className={styles.en}>
        {en}
        <span className={styles.ja}>{ja}</span>
      </Tag>
    </div>
  );
}
