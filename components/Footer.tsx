import Link from "next/link";
import Logo from "./Logo";
import { navItems } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>
            <Logo size={48} />
          </span>
          <div>
            <p className={styles.name}>天遊社</p>
            <p className={styles.tagline}>天に遊び、夢をつくる。</p>
          </div>
        </div>
        <nav aria-label="フッターメニュー">
          <ul className={styles.links}>
            <li>
              <Link href="/">
                <span className={styles.en}>TOP</span>トップ
              </Link>
            </li>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <span className={styles.en}>{item.en}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className={`container ${styles.bottom}`}>
        <p>天遊社は講義課題のための架空の企業です。掲載しているゲームは制作者本人の作品です。</p>
        <p className={styles.copy}>© 2026 TENYUSHA (FICTIONAL)</p>
      </div>
    </footer>
  );
}
