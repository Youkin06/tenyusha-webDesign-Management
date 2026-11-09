import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";
import Logo from "@/components/Logo";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "会社概要" };

// 「架空」と書いてある項目は、課題のために設定した架空の情報。
const profile = [
  { label: "社名", value: "株式会社天遊社（Tenyusha Inc.）※架空の企業です" },
  { label: "設立", value: "2023年1月（架空）" },
  { label: "代表", value: "Yohei Yaoi" },
  { label: "所在地", value: "〒000-0000 天遊県星見市月見町1-1（架空）" },
  { label: "事業内容", value: "自社ゲームの企画・開発・配信" },
  { label: "主な開発環境", value: "Unity、Blender、Python（Pyxel）" },
];

// これまでの作品づくりの歩み（年月は実際の制作時期）
const history = [
  { date: "2023年1月", text: "天遊社 設立（架空）" },
  { date: "2023年2月", text: "CIRCUSAL を Google Play でリリース。はじめてストアに並んだタイトル" },
  { date: "2024年10月", text: "スマートフォン向けアドベンチャー DEPTH DIARY をリリース" },
  { date: "2025年6月", text: "ぼくのにっき を unityroom で公開。イラストはすべて手描き" },
  { date: "2025年7月", text: "3Dカジュアルゲーム スライムスライス を公開" },
  { date: "2026年2月", text: "KamoRogue をブラウザで公開。Python と Pyxel で制作し、ドット絵とBGMの多くも自分たちで用意した" },
  { date: "2026年8月", text: "あなたはシロです。 を unityroom で公開" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeading
        en="COMPANY"
        title="会社概要"
        lead="天遊社は2023年1月にできたゲームスタジオです（架空）。ここでは社名の由来と、これまでの歩みを紹介します。"
      />

      <section className={`container ${styles.mission}`}>
        <div className={styles.logo}>
          <Logo size={140} />
        </div>
        <div>
          <SectionHeading ja="理念" />
          <p className={styles.missionCopy}>『天に遊ぶ。』</p>
          <p>
            社名は「天に遊ぶ」という言葉から取りました。空の上くらい広いところで、好きなように遊んでもらえたら、という気持ちでつけています。
            ロゴは紺色の落款（はんこ）の中に、ドットで描いた三日月と桜色の星を入れたものです。
            和風の落ち着きとゲームらしさをどちらも入れたくて、はんこにドット絵を組み合わせました。
          </p>
          <p>遊んだあとに少し気分が軽くなるようなゲームを、これからもつくっていきます。</p>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <SectionHeading ja="基本情報" />
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
        <SectionHeading ja="あゆみ" />
        <ol className={styles.timeline}>
          {history.map((item) => (
            <li key={item.date}>
              <span className={styles.date}>{item.date}</span>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <p className={`container ${styles.next}`}>
        <Link href="/games" className={`cursor ${styles.nextLink}`}>
          天遊社のゲームを見る
        </Link>
      </p>
    </>
  );
}
