import styles from "./SelectionFlow.module.css";

// 選考の流れの図。ゲームのステージマップに見立てて、STAGE 1 から順に進む。
const steps = [
  { title: "エントリー", text: "フォームから作品URLと自己紹介を送る", days: "" },
  { title: "カジュアル面談", text: "オンラインで30分。お互いを知る時間です", days: "1週間以内" },
  { title: "作品レビュー", text: "作品を一緒に遊びながら、こだわりを聞きます", days: "" },
  { title: "体験ゲームジャム", text: "1日で、一緒にゲームを1本つくります", days: "1日" },
  { title: "内定", text: "ようこそ、天遊社へ", days: "", goal: true },
];

export default function SelectionFlow() {
  return (
    <ol className={styles.flow}>
      {steps.map((step, i) => (
        <li key={step.title} className={step.goal ? undefined : styles.step}>
          <div className={step.goal ? `${styles.box} ${styles.goal}` : styles.box}>
            <span className={styles.stage}>{step.goal ? "GOAL" : `STAGE ${i + 1}`}</span>
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.text}>{step.text}</p>
            {step.days && <span className={styles.days}>{step.days}</span>}
          </div>
        </li>
      ))}
    </ol>
  );
}
