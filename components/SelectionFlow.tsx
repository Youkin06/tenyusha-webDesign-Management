import styles from "./SelectionFlow.module.css";

// 選考の流れの図。四角いドットを線でつなぎ、左から順に進む。
const steps = [
  { title: "エントリー", text: "フォームから作品URLと自己紹介を送る" },
  { title: "カジュアル面談", text: "オンラインで30分。お互いを知る時間です" },
  { title: "作品レビュー", text: "作品を一緒に遊びながら、こだわりを聞きます" },
  { title: "実技課題", text: "小さなゲームの試作に取り組んでいただきます" },
  { title: "内定", text: "ようこそ、天遊社へ" },
];

export default function SelectionFlow() {
  return (
    <ol className={styles.flow}>
      {steps.map((step, i) => (
        <li key={step.title}>
          <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
          <h3 className={styles.title}>{step.title}</h3>
          <p className={styles.text}>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
