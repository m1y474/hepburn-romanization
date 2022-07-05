import axios from "axios";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AppState } from "types";

export default class App extends React.Component<React.FC, AppState> {
  constructor(props: React.FC) {
    super(props);
    this.state = {
      value: "",
      spells: {},
      result: "",
      isLower: false,
    };
  }

  componentDidMount() {
    axios.get("/spells.json").then((res) => {
      this.setState({ spells: res.data });
    });
  }

  transrate(args: string) {
    const spells = this.state.spells;
    const result: string[] = [];
    const toM: string = "ばびぶべぼまみむめもぱぴぷぺぽ";
    const small = "ぁぃぇぉゃゅょ";
    const toT: string[] = ["ち", "ちゃ", "ちゅ", "ちょ"];
    const toArray = args.toUpperCase().split("");
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
          if (args?.[index - 2] === "っ") {
            if (toT.includes(double)) {
              tmp = `T${toDouble}`;
            } else {
              tmp = `${toDouble?.charAt(0) ?? ""}${toDouble}`;
            }
          }
          result[index - 1] = tmp;
        } else if (args?.[index - 1] === "っ") {
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

  render() {
    return (
      <>
        <label>
          <input
            type="checkbox"
            onChange={(event) => this.toLower(event.target.checked)}
          />
          小文字
        </label>
        <div>
          <input
            type="text"
            onChange={(event) => {
              this.transrate(event.target.value);
            }}
          />
        </div>
        <div>
          <p>
            結果:
            <br />
            {this.state.result}
          </p>
        </div>
      </>
    );
  }
}
