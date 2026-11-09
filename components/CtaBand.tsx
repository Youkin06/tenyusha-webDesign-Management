import Link from "next/link";
import styles from "./CtaBand.module.css";

// ページの最後に置く「次の行動」への導線。夜空色の帯に、英字の大見出しと白いボタン。
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
          <a className="btn btn-light" href={href} target="_blank" rel="noopener noreferrer">
            {label} <span className="arrow">↗</span>
          </a>
        ) : (
          <Link className="btn btn-light" href={href}>
            {label} <span className="arrow">&gt;</span>
          </Link>
        )}
      </div>
    </section>
  );
}
