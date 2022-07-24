import React from "react";
import styles from "@styles/app.scss";

export default class Note extends React.Component {
  render(): React.ReactNode {
    return (
      <ul className={styles.list}>
        <li>変換処理をクライアント側で実施しているため、入力値はサーバーへは送信されません。</li>
        <li>本サイトは素人が作成したサイトです。変換結果をコピーする場合は一度変換結果をご確認ください。</li>
        <li>
          本サイトにおける不具合を見つけた方は
          <a
            href="https://github.com/m1y474/hepburn-romanization/issues/new?title=不具合報告"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          にてご報告いただけますと助かります。
        </li>
      </ul>
    );
  }
}
