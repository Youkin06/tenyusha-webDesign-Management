import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import CtaBand from "@/components/CtaBand";
import SelectionFlow from "@/components/SelectionFlow";
import { CONTACT_FORM_URL } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "採用" };

const positions = [
  {
    title: "ゲームプログラマー",
    text: "Unity（C#）でゲームの操作感や仕組みをつくります。触って気持ちいい動きを、一緒に試行錯誤しましょう。",
    skills: ["Unity・C# での制作経験", "自分で最後までつくった作品"],
  },
  {
    title: "ドット絵アーティスト",
    text: "キャラクターや背景のドット絵、アニメーションを担当します。小さなドットで、大きな世界をつくってください。",
    skills: ["ドット絵の作品", "アニメーション制作の経験（あれば）"],
  },
  {
    title: "サウンドクリエイター",
    text: "BGMや効果音をつくります。斬る、跳ねる、壊れる。遊びの気持ちよさは、音で決まります。",
    skills: ["BGM・効果音の作品", "ゲームへの組み込み経験（あれば）"],
  },
];

export default function RecruitPage() {
  return (
    <>
      <PageHeading
        title="採用"
        lead="天遊社は、つくることが好きな仲間を探しています。経験の長さよりも、自分で最後までつくった作品を大切にします。"
      />

      <section className="container">
        <h2 className="section-title">募集している職種</h2>
        <ul className={styles.positions}>
          {positions.map((p) => (
            <li key={p.title}>
              <h3 className={styles.title}>{p.title}</h3>
              <p>{p.text}</p>
              <p className={styles.skillsLabel}>応募のときに見せてほしいもの</p>
              <ul className={styles.skills}>
                {p.skills.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${styles.section}`}>
        <h2 className="section-title">選考の流れ</h2>
        <p className={styles.flowLead}>
          作品を見ながら話すことを大切にしています。最後は、実際に一緒にゲームを1本つくってみます。
        </p>
        <SelectionFlow />
      </section>

      <CtaBand
        title="エントリーはこちらから"
        text="フォームに、作品のURLと簡単な自己紹介を書いて送ってください。"
        href={CONTACT_FORM_URL}
        label="エントリーする"
        external
      />
    </>
  );
}
