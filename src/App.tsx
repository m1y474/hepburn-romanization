import axios from "axios";
import { Arrow } from "@components/Icons";
import React from "react";
import { AppState } from "types";
import styles from "@styles/app.scss";
import RoundedButton from "@components/RoundedButton";
import Heading from "@components/Heading";
import SpellingTable from "@components/SpellingTable";
import Check from "@components/Check";
import ReactGA from "react-ga4";
import TranslateRule from "@components/TranslateRule";

ReactGA.initialize("G-FB9FGN6TC8");
ReactGA.send("pageview");

export default class App extends React.Component<React.FC, AppState> {
  private input = React.createRef<HTMLInputElement>();

  constructor(props: React.FC) {
    super(props);
    this.state = {
      spells: {},
      result: "",
      isLower: false,
      message: "",
    };
  }

  componentDidMount() {
    axios.get("./spells.json").then((res) => {
      this.setState({ spells: res.data });
    });
  }

  transrate(args: string) {
    const spells = this.state.spells;
    const src = args.replace(/[\u30a1-\u30f6]/g, (match) => String.fromCharCode(match.charCodeAt(0) - 0x60));
    const result: string[] = [];
    const toM: string = "ばびぶべぼまみむめもぱぴぷぺぽ";
    const small = "ぁぃぇぉゃゅょ";
    const toT: string[] = ["ち", "ちゃ", "ちゅ", "ちょ"];
    const toArray = src.toUpperCase().split("");
    toArray.map((arg, index) => {
      const spell = spells?.[arg]?.[0] ?? "";
      if (!(index in result)) {
        result.push(spell);
        // んの後ろがtoMに含まれていたらNをMに変換する
        if (toM?.split("")?.includes(arg) && toArray?.[index - 1] === "ん") {
          result[index - 1] = "M";
        }
        // 「っ」以外の拗音の場合は一つ前の文字とセットでspellを取得する
        if (small.split("").includes(arg)) {
          const double = `${toArray?.[index - 1]}${arg}`;
          const toDouble = spells?.[double]?.[0] ?? "";
          let tmp = toDouble;
          // 2つ前が「っ」の場合
          if (src?.[index - 2] === "っ") {
            tmp = toT.includes(double) ? `T${toDouble}` : `${toDouble?.charAt(0) ?? ""}${toDouble}`;
          }
          result[index - 1] = tmp;
        } else if (src?.[index - 1] === "っ") {
          result[index] = `${spell?.charAt(0) ?? ""}${spell}`;
        }
      }
    });
    const replace = result
      .join("")
      .replaceAll(/OO(?=[A-Z])/g, "O")
      .replaceAll("UU", "U")
      .replaceAll("OU", "O");

    this.setState({
      result: this.state.isLower ? replace.toLowerCase() : replace,
    });
  }

  toLower(isLower: boolean) {
    if (isLower) {
      this.setState({
        result: this.state.result.toLowerCase(),
        isLower: isLower,
      });
      return;
    }
    this.setState({
      result: this.state.result.toUpperCase(),
      isLower: isLower,
    });
  }

  copy() {
    this.input.current?.select();
    document.execCommand("copy");

    this.setState({
      message: "変換結果をコピーしました。",
    });
    setTimeout(() => {
      this.setState({
        message: "",
      });
    }, 1500);
  }

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.header}>ヘボン式ローマ字変換</h1>
        {this.state.message ? <p className={styles.message}>{this.state.message}</p> : null}
        <div className={styles.boxWrapper}>
          <div className={styles.wrapper}>
            <form className={styles.left}>
              <textarea
                placeholder="ひらがな・カタカナを入力すると右側に変換結果が表示されます。&#10;例：やまだ　たろう"
                onChange={(event) => {
                  this.transrate(event.target.value);
                }}
              ></textarea>
              <RoundedButton label="Clean" type="reset" onClick={() => this.setState({ result: "" })} icon="clean" />
            </form>
          </div>
          <div className={styles.arrow}>
            <Arrow />
          </div>
          <div className={styles.wrapper}>
            <div className={styles.right}>
              {this.state.result ? (
                this.state.result
              ) : (
                <p className={styles.empty}>
                  変換結果が表示されます。
                  <br />
                  例：YAMADA TARO
                </p>
              )}
              <input type="text" className={styles.none} ref={this.input} defaultValue={this.state.result} />
              <RoundedButton type="button" label="Copy" onClick={() => this.copy()} icon="file" />
            </div>
            <Check label="小文字" onChange={(checked) => this.toLower(checked)} />
          </div>
        </div>
        <div className={styles.headingWrapper}>
          <Heading text="ヘボン式ローマ字綴方表" />
          <SpellingTable />
        </div>
        <div className={styles.headingWrapper}>
          <Heading text="変換ルール" />
<TranslateRule />
        </div>
      </div>
    );
  }
}
