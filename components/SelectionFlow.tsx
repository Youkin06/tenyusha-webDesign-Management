import styles from "./SelectionFlow.module.css";

// 選考の流れ。飾りの図にせず、段階ごとに一文で並べる。
const steps = [
  { title: "エントリー", text: "フォームから、作品のURLと自己紹介を送ってください。" },
  { title: "カジュアル面談", text: "オンラインで30分ほど。会社の説明と雑談です。" },
  { title: "作品レビュー", text: "作品を一緒に遊びながら、つくったときの話を聞きます。" },
  { title: "実技課題", text: "小さなゲームを1本試作してもらいます。" },
  { title: "内定", text: "入社日などを相談して決めます。" },
];

export default function SelectionFlow() {
  return (
    <ol className={styles.flow}>
      {steps.map((step) => (
        <li key={step.title}>
          <span className={styles.title}>{step.title}</span>
          <span className={styles.text}>{step.text}</span>
        </li>
      ))}
    </ol>
  );
}
