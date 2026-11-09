import Link from "next/link";
import styles from "./CtaBand.module.css";

// ページの最後に置く「次の行動」への導線。白練の帯に、見出しと鉄紺のボタン。
export default function CtaBand({
  en,
  title,
  text,
  href,
  label,
  external = false,
}: {
  en: string;
  title: string;
  text: string;
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <section className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <div>
          <p className={styles.en}>{en}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
        {external ? (
          <a className="btn" href={href} target="_blank" rel="noopener noreferrer">
            {label} <span className="arrow">↗</span>
          </a>
        ) : (
          <Link className="btn" href={href}>
            {label} <span className="arrow">→</span>
          </Link>
        )}
      </div>
    </section>
  );
}
