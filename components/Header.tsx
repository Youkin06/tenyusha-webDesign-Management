"use client";

// 全ページ共通のヘッダー。スマホではメニューボタンで開閉する。
// 開閉の状態を持つので、ブラウザで動く「クライアントコンポーネント」にしている（先頭の "use client"）。

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { navItems } from "@/lib/site";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <Logo size={34} />
          <span className={styles.name}>
            天遊社
            <span className={styles.nameEn}>TENYUSHA</span>
          </span>
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="global-nav"
          onClick={() => setOpen(!open)}
        >
          <span className={styles.menuIcon} data-open={open} />
          <span className={styles.menuText}>{open ? "CLOSE" : "MENU"}</span>
        </button>

        <nav id="global-nav" className={styles.nav} data-open={open} aria-label="メインメニュー">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={item.href === "/contact" ? styles.contact : styles.link}
                  aria-current={pathname === item.href ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className={styles.en}>{item.en}</span>
                  <span className={styles.ja}>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
