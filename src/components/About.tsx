import React from "react";
import styles from "@styles/app.scss";

export default class About extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <q className={styles.quote}>
          ヘボン式ローマ字（ヘボンしきローマじ、英: Hepburn
          romanization）は、日本語表記をラテン文字表記に転写する際の規則、いわゆるローマ字の複数ある表記法のうち、日本国内および国外で最も広く利用されている方式である。
          ジェームス・カーティス・ヘボン（James Curtis
          Hepburn）によって考案された。日本語の発音とラテン語の発音とが似ており、ラテン文字をラテン語読みするという前提で五十音図のように規則的に並べさえすれば日本語の発音（読み）をかなり正確に表現できることを利用した。
        </q>
        <p className={styles.author}>
          <a href="https://ja.wikipedia.org/wiki/ヘボン式ローマ字" target="_blank" rel="noopener noreferrer">
            Wikipediaより引用（最終更新 2022年6月27日 (月) 01:28）
          </a>
        </p>
      </>
    );
  }
}
