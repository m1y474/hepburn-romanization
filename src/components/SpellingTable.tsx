import React from "react";
import styles from "../styles/app.scss";

const src = {
  normal: [
    ["あ", "A", "い", "I", "う", "U", "え", "E", "お", "O"],
    ["か", "KA", "き", "KI", "く", "KU", "け", "KE", "こ", "KO"],
    ["さ", "SA", "し", "SHI", "す", "SU", "せ", "SE", "そ", "SO"],
    ["た", "TA", "ち", "CHI", "つ", "TSU", "て", "TE", "と", "TO"],
    ["な", "NA", "に", "NI", "ぬ", "NU", "ね", "NE", "の", "NO"],
    ["は", "HA", "ひ", "HI", "ふ", "FU", "へ", "HE", "ほ", "HO"],
    ["ま", "MA", "み", "MI", "む", "MU", "め", "ME", "も", "MO"],
    ["や", "YA", "", "", "ゆ", "YU", "", "", "よ", "YO"],
    ["ら", "RA", "り", "RI", "る", "RU", "れ", "RE", "ろ", "RO"],
    ["ら", "RA", "り", "RI", "る", "RU", "れ", "RE", "ろ", "RO"],
    ["わ", "WA", "ヰ", "I", "", "", "ヱ", "E", "ヲ", "O"],
    ["ん", "N", "", "", "", "", "", "", "", ""],
  ],
  dakuonAndHandakuon: [
    ["が", "GA", "ぎ", "GI", "ぐ", "GU", "げ", "GE", "ご", "GO"],
    ["ざ", "ZA", "じ", "JI", "ず", "ZU", "ぜ", "ZE", "ぞ", "ZO"],
    ["だ", "DA", "ぢ", "JI", "づ", "ZU", "で", "DE", "ど", "DO"],
    ["ば", "BA", "び", "BI", "ぶ", "BU", "べ", "BE", "ぼ", "BO"],
    ["ぱ", "PA", "ぴ", "PI", "ぷ", "PU", "ぺ", "PE", "ぽ", "PO"],
  ],
  yon: [
    ["きゃ", "KYA", "", "", "きゅ", "KYA", "", "", "きょ", "KYA"],
    ["しゃ", "SHA", "", "", "しゅ", "SHU", "", "", "しょ", "SHO"],
    ["ちゃ", "CHA", "", "", "ちゅ", "CHU", "", "", "ちょ", "CHO"],
    ["にゃ", "NYA", "", "", "にゅ", "NYU", "", "", "にょ", "NYO"],
    ["ひゃ", "HYA", "", "", "ひゅ", "HYU", "", "", "ひょ", "HYO"],
    ["みゃ", "MYA", "", "", "みゅ", "MYU", "", "", "みょ", "MYO"],
    ["りゃ", "RYA", "", "", "りゅ", "RYU", "", "", "りょ", "RYO"],
    ["ぎゃ", "GYA", "", "", "ぎゅ", "GYU", "", "", "ぎょ", "GYO"],
    ["じゃ", "JA", "", "", "じゅ", "JU", "", "", "じょ", "JO"],
    ["びゃ", "BYA", "", "", "びゅ", "BYU", "", "", "びょ", "BYO"],
    ["ぴゃ", "PYA", "", "", "ぴゅ", "PYU", "", "", "ぴょ", "PYO"],
  ],
  other: [
    ["しぇ", "SHIE", "ちぇ", "CHIE", "てぃ", "TEI", "にぃ", "NII", "にぇ", "NIE"],
    ["ふぁ", "FUA", "ふぃ", "FUI", "ふぇ", "FUE", "ふぉ", "FUO", "じぇ", "JIE"],
    ["でぃ", "DEI", "でゅ", "DEYU", "うぃ", "UI", "うぇ", "UE", "うぉ", "UO"],
    ["ゔぁ", "BA", "ゔぁ", "BI", "ゔ", "BU", "ゔぇ", "BE", "ゔぇ", "BO"],
    ["ゔぁ", "BUA", "ゔぁ", "BUI", "", "", "ゔぇ", "BUE", "ゔぇ", "BUO"],
  ],
};

export default class SpellingTable extends React.Component {
  render(): React.ReactNode {
    return (
      <table className={styles.table}>
        <tbody>
          <tr>
            <td className={styles.tableHeader} colSpan={10}>
              50音順
            </td>
          </tr>
          {src.normal.map((strGroup, groupIndex) => (
            <tr key={groupIndex}>
              {strGroup.map((str, index) => (
                <td key={index}>{str}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td className={styles.tableHeader} colSpan={10}>
              濁音・半濁音
            </td>
          </tr>
          {src.dakuonAndHandakuon.map((strGroup, groupIndex) => (
            <tr key={groupIndex}>
              {strGroup.map((str, index) => (
                <td key={index}>{str}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td className={styles.tableHeader} colSpan={10}>
              拗音
            </td>
          </tr>
          {src.yon.map((strGroup, groupIndex) => (
            <tr key={groupIndex}>
              {strGroup.map((str, index) => (
                <td key={index}>{str}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td className={styles.tableHeader} colSpan={10}>
              その他
            </td>
          </tr>
          {src.other.map((strGroup, groupIndex) => (
            <tr key={groupIndex}>
              {strGroup.map((str, index) => (
                <td key={index}>{str}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
