import Link from "next/link";
import styles from "./CtaBand.module.css";

// ページの最後に置く「次の行動」への導線。
export default function CtaBand({
  title,
  text,
  href,
  label,
  external = false,
}: {
  title: string;
  text: string;
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <section className="container">
      <div className={styles.band}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
        {external ? (
          <a className="btn" href={href} target="_blank" rel="noopener noreferrer">
            {label} <span aria-hidden="true">↗</span>
          </a>
        ) : (
          <Link className="btn" href={href}>
            {label} <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </section>
  );
}
