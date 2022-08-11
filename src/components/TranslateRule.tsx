import React from "react";
import styles from "@styles/app.scss";

export default class TranslateRule extends React.Component {
  render(): React.ReactNode {
    return (
      <ul className={styles.list}>
        <li>
          B, M, Pの前の「ん」はNではなくMで表記する。
          <p>例：NAMBA（ナンバ）、HOMMA（ホンマ）、SAMPEI（サンペイ）</p>
        </li>
        <li>
          促音は子音を重ねて表記する。ただし、CHI, CHA, CHUの前にはTで表記する。
          <p>例：HATTORI（ハットリ）、KIKKAWA（キッカワ）／HATCHI（ホッチ）、HATCHO（ハッチョウ）</p>
        </li>
        <li>
          OやUの長音は表記しない。ただし、末尾がOOで読みが「オオ」の場合はOOと表記する。
          <p>
            例：YUKI（ユウキ）、YUKO（ユウコ）、KOTA(コウタ)、YOKO（ヨウコ）、ONISHI（オオニシ）／SENOO（セノオ）、TAKATOO（タカトオ）
          </p>
        </li>
        <li>
          長音符は省略する。ただし、長音符を使用しない長音の場合は省略しない。
          <p>例：NINA（ニーナ）、SHINA（シーナ）／NIINA（ニイナ）、SHIINA（シイナ）</p>
        </li>
        <li>
          <strong>
            井上（いのうえ）、滝上（たきのうえ）のような「*のうえ」という名字の場合、[OU]が[O]に変換されると[INOE][TAKINOE]という表記になります。
            <br />
            上記を防ぐため例外的に[NOUE]という文字列の場合は[OU]を[O]に変換しないようにしています。
          </strong>
        </li>
      </ul>
    );
  }
}
