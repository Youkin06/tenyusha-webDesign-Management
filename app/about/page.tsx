import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import CtaBand from "@/components/CtaBand";
import Logo from "@/components/Logo";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "会社概要" };

// 「架空」と書いてある項目は、課題のために設定した架空の情報。
const profile = [
  { label: "社名", value: "株式会社天遊社（Tenyusha Inc.）※架空の企業です" },
  { label: "設立", value: "2026年4月（架空）" },
  { label: "代表", value: "Yohei Yaoi" },
  { label: "所在地", value: "〒000-0000 天遊県星見市月見町1-1（架空）" },
  { label: "事業内容", value: "自社ゲームの企画・開発・公開／ゲームジャム・展示イベントへの参加" },
  { label: "主な開発環境", value: "Unity、Blender、Python（Pyxel）" },
];

// これまでの作品づくりの歩み（年月は実際の制作時期）
const history = [
  { date: "2023年3月", text: "CIRCUSAL を Google Play でリリース。はじめてストアに並んだタイトル" },
  { date: "2024年10月", text: "DEPTH DIARY が完成。7か月かけた、はじめての長編" },
  { date: "2025年6月", text: "ぼくのにっき を公開。イラストをすべて手描きしたホラーゲーム" },
  { date: "2025年7月", text: "スライムスライス を公開。はじめての3Dカジュアルゲーム" },
  { date: "2026年2月", text: "KamoRogue が完成。Python と Pyxel で、ドット絵から音楽までつくる" },
  { date: "2026年4月", text: "天遊社 設立（架空）" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeading
        title="会社概要"
        lead="天遊社は、夜空を見上げたときのような、自由で大きな遊び心をゲームで届けるために生まれたスタジオです。"
      />

      <section className={`container ${styles.mission}`}>
        <div className={styles.logo}>
          <Logo size={140} />
        </div>
        <div>
          <h2 className="section-title">天に遊ぶ。</h2>
          <p>
            社名の「天遊」には、空のように果てのない場所で、思いきり遊んでほしいという願いを込めました。
            ロゴは朱色の落款（はんこ）に、ドットで描いた三日月と星を収めたものです。
            和の落ち着きと、ゲームのわくわくを一緒に届けたいと考えています。
          </p>
          <p>
            遊んだ人の心が、少しだけ軽くなること。それが、天遊社のゲームづくりのゴールです。
          </p>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <h2 className="section-title">基本情報</h2>
        <dl className={styles.table}>
          {profile.map((row) => (
            <div key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={`container ${styles.section}`}>
        <h2 className="section-title">あゆみ</h2>
        <ol className={styles.timeline}>
          {history.map((item) => (
            <li key={item.date}>
              <span className={styles.date}>{item.date}</span>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand
        title="天遊社のゲームを遊んでみる"
        text="ブラウザですぐに遊べる作品をそろえています。"
        href="/games"
        label="ゲームを見る"
      />
    </>
  );
}
