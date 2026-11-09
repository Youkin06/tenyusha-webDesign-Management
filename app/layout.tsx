import type { Metadata } from "next";
import { Noto_Sans_JP, Outfit, Yuji_Syuku } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// 本文：ゴシック、キャッチコピーとゲームタイトル：筆文字、英字の見出し：Outfit。
// 日本語フォントはファイルが大きいので、先読み（preload）はしない。
const body = Noto_Sans_JP({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-body", preload: false });
const brush = Yuji_Syuku({ weight: "400", subsets: ["latin"], variable: "--font-brush", preload: false });
const en = Outfit({ weight: ["400", "600", "800"], subsets: ["latin"], variable: "--font-en" });

// 課題の実習表示：すべてのページのタイトルの冒頭に【実習】を付ける。
export const metadata: Metadata = {
  title: {
    default: "【実習】天遊社 | 天に遊び、夢をつくるゲームスタジオ",
    template: "【実習】%s | 天遊社",
  },
  description: "天遊社（架空の企業）は、ドット絵の2Dアクションから3D、VRまでつくっているゲームスタジオです。ほとんどの作品はブラウザで遊べます。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // data-scroll-behavior：ページ移動のときはスムーズスクロールをせず、すぐ上に戻す（ページ内リンクだけなめらかに動かす）
    <html lang="ja" data-scroll-behavior="smooth" className={`${body.variable} ${brush.variable} ${en.variable}`}>
      <body>
        {/* 課題の実習表示：すべてのページの冒頭に入れる */}
        <p className="practice-notice">本サイトは講義課題として制作したものです。</p>
        {/* JavaScript が動かないときは、スマホでもメニューを開いたまま表示する */}
        <noscript>
          <style>
            {".menu-toggle{display:none!important}.header-inner{flex-wrap:wrap;height:auto!important;padding-bottom:8px}.global-nav{display:block!important;position:static!important;height:auto!important;width:100%;padding:0!important}"}
          </style>
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
