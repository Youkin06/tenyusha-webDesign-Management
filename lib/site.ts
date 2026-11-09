// サイト全体で使う設定。

// お問い合わせ・エントリー用の Google フォーム（中身は tools/setup-contact-form.gs で作る）
// 新しいタブで開くときのURL（フォームの回答用URL）
export const CONTACT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdY2EPx0oy35Bn4giT8l1fHHEmQAohocXCYA10Amg0v9SCZFA/viewform";
// ページの中に埋め込むときのURL
export const CONTACT_FORM_EMBED_URL = `${CONTACT_FORM_URL}?embedded=true`;

export const navItems = [
  { href: "/games", label: "ゲーム", en: "GAMES" },
  { href: "/about", label: "会社概要", en: "COMPANY" },
  { href: "/recruit", label: "採用", en: "RECRUIT" },
  { href: "/contact", label: "お問い合わせ", en: "CONTACT" },
];
