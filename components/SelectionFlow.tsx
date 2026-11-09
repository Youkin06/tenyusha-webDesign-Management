import styles from "./SelectionFlow.module.css";

// 選考の流れ。飾りの図にせず、段階ごとに一文で並べる。
const steps = [
  { title: "エントリー", text: "フォームから、作品のURLと自己紹介を送ってください。" },
  { title: "カジュアル面談", text: "オンラインで30分ほど、お互いのことを話します。" },
  { title: "作品レビュー", text: "送ってもらった作品を一緒に遊びながら、つくり方を聞きます。" },
  { title: "実技課題", text: "小さなゲームの試作に取り組んでいただきます。" },
  { title: "内定", text: "条件をご説明し、入社日を相談します。" },
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
