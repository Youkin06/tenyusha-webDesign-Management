import type { Metadata } from "next";
import PageHeading from "@/components/PageHeading";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import SelectionFlow from "@/components/SelectionFlow";
import { CONTACT_FORM_URL } from "@/lib/site";
import styles from "./page.module.css";

export const metadata: Metadata = { title: "採用" };

// 職種ごとに、仕事の内容・関係する実際の作品・応募のときに見せてほしいもの
const positions = [
  {
    title: "ゲームプログラマー",
    text: "Unity（C#）で、ゲームの仕組みやキャラクターの動きをつくります。ジャンプの高さや入力を受け付けるタイミングなど、細かい操作感の調整も仕事のうちです。",
    works: "Sausage Smash／あなたはシロです。",
    show: "Unity・C# でつくった作品",
  },
  {
    title: "ドット絵アーティスト",
    text: "キャラクターや背景のドット絵と、そのアニメーションを担当します。KamoRogue や DEPTH DIARY のような2D作品が中心です。",
    works: "KamoRogue／DEPTH DIARY",
    show: "ドット絵の作品（アニメーションがあれば一緒に）",
  },
  {
    title: "サウンドクリエイター",
    text: "BGMと効果音をつくります。これまで音楽は外部の方にお願いすることが多かったので、社内で音を担当できる人を探しています。",
    works: "スライムスライス／KamoRogue",
    show: "BGM・効果音の作品",
  },
];

export default function RecruitPage() {
  return (
    <>
      <PageHeading
        en="RECRUIT"
        title="採用"
        lead="天遊社では、一緒にゲームをつくる人を募集しています。完成していれば、小さな作品でもかまいません。"
      />

      <section className="container">
        <p className={styles.statement}>
          経歴より、
          <br />
          最後までつくった作品を見せてください。
        </p>
      </section>

      <section className={`container ${styles.section}`}>
        <SectionHeading ja="募集している職種" />
        <ul className={styles.positions}>
          {positions.map((p) => (
            <li key={p.title}>
              <h3 className={styles.title}>{p.title}</h3>
              <div className={styles.body}>
                <p>{p.text}</p>
                <dl className={styles.facts}>
                  <div>
                    <dt>関わる作品</dt>
                    <dd>{p.works}</dd>
                  </div>
                  <div>
                    <dt>見せてほしいもの</dt>
                    <dd>{p.show}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className={`container ${styles.section}`}>
        <SectionHeading ja="選考の流れ" />
        <p className={styles.flowLead}>
          面接では、送ってもらった作品を実際に遊びながら話を聞きます。最後に、小さな実技課題があります。
        </p>
        <SelectionFlow />
      </section>

      <CtaBand
        en="ENTRY"
        title="エントリーはこちらから"
        text="フォームに、作品のURLと簡単な自己紹介を書いて送ってください。"
        href={CONTACT_FORM_URL}
        label="エントリーする"
        external
      />
    </>
  );
}
