/**
 * 天遊社のお問い合わせフォームを作るスクリプト（Google Apps Script）。
 *
 * 使い方：
 *   1. https://script.google.com/ で「新しいプロジェクト」を作る
 *   2. このファイルの中身をすべて貼り付けて保存する
 *   3. 上のメニューで関数「setupContactForm」を選び、「実行」を押す（初回だけ権限の許可を求められる）
 *   4. 実行ログに出る「回答用URL」を確認する
 *
 * 対象のフォームは、Dia で開いていた「無題のフォーム」（下の FORM_ID）。
 * すでにある質問はいったん消してから作り直すので、何度実行しても同じ形になる。
 */
const FORM_ID = "1BE9Z5SX4t0DjQmbFW6vdEOY2VZ5RI6dJPvTJ4uLIc5g";

function setupContactForm() {
  const form = FormApp.openById(FORM_ID);

  // 作り直す前に、今ある質問をすべて消す
  form.getItems().forEach((item) => form.deleteItem(item));

  form
    .setTitle("天遊社 お問い合わせフォーム")
    .setDescription(
      [
        "【実習】本フォームは講義課題として制作したものです。",
        "天遊社は架空の企業のため、実際のお返事はしていません。",
        "名前やメールアドレスなど、個人を特定できる情報は入力しないでください。",
      ].join("\n"),
    )
    .setConfirmationMessage("送信ありがとうございました。（講義課題のため、実際のお返事はしていません）")
    .setCollectEmail(false)
    .setAllowResponseEdits(false)
    .setLimitOneResponsePerUser(false)
    .setAcceptingResponses(true);

  form
    .addMultipleChoiceItem()
    .setTitle("ご用件")
    .setChoiceValues(["ゲームの感想", "不具合の報告", "取材・展示のご相談", "採用へのエントリー", "その他"])
    .setRequired(true);

  form.addTextItem().setTitle("お名前（ニックネームでかまいません）").setRequired(false);

  form
    .addParagraphTextItem()
    .setTitle("内容")
    .setHelpText("ゲームの感想や、不具合が起きた作品と状況などを書いてください。")
    .setRequired(true);

  form
    .addTextItem()
    .setTitle("作品のURL（採用へのエントリーの方）")
    .setHelpText("ポートフォリオや、遊べる作品のURLを1つ書いてください。")
    .setRequired(false);

  // 2025年以降に作ったフォームは「公開」しないと回答できないため、公開状態にする
  if (typeof form.setPublished === "function") form.setPublished(true);

  Logger.log("回答用URL: " + form.getPublishedUrl());
  Logger.log("編集用URL: " + form.getEditUrl());
}
