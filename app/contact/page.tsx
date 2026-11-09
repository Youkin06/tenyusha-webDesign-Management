import type { Metadata } from "next";
import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { CONTACT_FORM_URL } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "お問い合わせ" };

const faqs = [
  {
    q: "ゲームは無料で遊べますか？",
    a: "はい。unityroom などで公開している作品は、ブラウザから無料で遊べます。遊び方はゲームページの各作品から確認できます。",
  },
  {
    q: "スマートフォンでも遊べますか？",
    a: "作品によって異なります。ゲームページの「対応」欄をご覧ください。DEPTH DIARY はスマートフォン向けです。",
  },
  {
    q: "ゲームの実況や配信をしてもいいですか？",
    a: "ぜひどうぞ。配信の際は、タイトル名と「天遊社」を書いていただけるとうれしいです。",
  },
  {
    q: "お問い合わせへの返信はどのくらいかかりますか？",
    a: "3営業日以内を目安にお返事します（架空の企業のため、実際の返信は行っていません）。",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeading
        en="CONTACT"
        title="お問い合わせ"
        lead="ゲームの感想、取材や展示のご相談、採用へのエントリーなど、お気軽にご連絡ください。"
      />

      <section className="container">
        <div className={styles.formBox}>
          <div>
            <h2 className={styles.formTitle}>お問い合わせフォーム</h2>
            <p>
              お問い合わせは Google フォームで受け付けています。
              <br />
              お名前、ご用件、内容をご記入ください。
            </p>
          </div>
          <a className="btn" href={CONTACT_FORM_URL} target="_blank" rel="noopener noreferrer">
            フォームを開く <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className={styles.note}>
          先にゲームを遊んでみたい方は、<Link href="/games">ゲームページ</Link>からどうぞ。
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <span className="section-label">FAQ</span>
        <h2 className="section-title">よくある質問</h2>
        <div className={styles.faq}>
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <span className="section-label">ACCESS</span>
        <h2 className="section-title">アクセス</h2>
        <dl className={styles.access}>
          <div>
            <dt>所在地</dt>
            <dd>〒000-0000 天遊県星見市月見町1-1（架空）</dd>
          </div>
          <div>
            <dt>最寄り駅</dt>
            <dd>星見線「月見駅」から徒歩5分（架空）</dd>
          </div>
          <div>
            <dt>営業時間</dt>
            <dd>平日 10:00〜18:00（土日祝休み）</dd>
          </div>
          <div>
            <dt>メール</dt>
            <dd>info@tenyusha.example（架空）</dd>
          </div>
        </dl>
        <p className={styles.note}>※ オフィスへのご来訪は事前予約制です。フォームからご連絡ください。</p>
      </section>
    </>
  );
}
