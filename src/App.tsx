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
import Note from "@components/Note";
import About from "@components/About";
import Translator from "useCases/Translator";

ReactGA.initialize("G-FB9FGN6TC8");
ReactGA.send("pageview");

export default class App extends React.Component<React.FC, AppState> {
  private readonly input = React.createRef<HTMLInputElement>();
  private readonly useCase = new Translator();

  constructor(props: React.FC) {
    super(props);
    this.state = {
      result: "",
      isLower: false,
      message: "",
    };
  }

  transrate(args: string) {
    const result = this.useCase.translate(args);
    this.setState({
      result: this.state.isLower ? result.toLowerCase() : result,
    });
  }

  toLower(isLower: boolean) {
    const result = this.useCase.changeCase(this.state.result, isLower);
    this.setState({
      result: result,
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
                autoFocus
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
          <Heading id="about" text="ヘボン式ローマ字とは？" />
          <About />
        </div>
        <div className={styles.headingWrapper}>
          <Heading id="table" text="ヘボン式ローマ字綴方一覧表" />
          <SpellingTable />
        </div>
        <div className={styles.headingWrapper}>
          <Heading id="rule" text="変換ルール" />
          <TranslateRule />
        </div>
        <div className={styles.headingWrapper}>
          <Heading id="note" text="注意点" />
          <Note />
        </div>
      </div>
    );
  }
}
