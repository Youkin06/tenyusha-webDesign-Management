// サイト全体で使う設定。

// お問い合わせ・エントリー用の Google フォーム（中身は tools/setup-contact-form.gs で作る）
const CONTACT_FORM_ID = "1BE9Z5SX4t0DjQmbFW6vdEOY2VZ5RI6dJPvTJ4uLIc5g";
// 新しいタブで開くときのURL
export const CONTACT_FORM_URL = `https://docs.google.com/forms/d/${CONTACT_FORM_ID}/viewform`;
// ページの中に埋め込むときのURL
export const CONTACT_FORM_EMBED_URL = `${CONTACT_FORM_URL}?embedded=true`;

export const navItems = [
  { href: "/games", label: "ゲーム", en: "GAMES" },
  { href: "/about", label: "会社概要", en: "COMPANY" },
  { href: "/recruit", label: "採用", en: "RECRUIT" },
  { href: "/contact", label: "お問い合わせ", en: "CONTACT" },
];
