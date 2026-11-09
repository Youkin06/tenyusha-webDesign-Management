import Link from "next/link";
import Logo from "./Logo";
import { navItems } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Logo size={44} />
          <div>
            <p className={styles.name}>天遊社</p>
            <p className={styles.tagline}>天に遊び、夢をつくる。</p>
          </div>
        </div>
        <nav aria-label="フッターメニュー">
          <ul className={styles.links}>
            <li>
              <Link href="/">トップ</Link>
            </li>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className={styles.note}>
        天遊社は講義課題のための架空の企業です。掲載しているゲームは制作者本人の作品です。
        <br />© 2026 Tenyusha (fictional)
      </p>
    </footer>
  );
}
