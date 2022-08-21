import axios, { AxiosResponse } from "axios";
import { Spell } from "types";

export default class Translator {
  private spells?: Spell;
  private readonly toM: string = "ばびぶべぼまみむめもぱぴぷぺぽ";
  private readonly small: string = "ぁぃぇぉゃゅょ";
  private readonly toT: string[] = ["ち", "ちゃ", "ちゅ", "ちょ"];

  constructor() {
    this.setSpells();
  }

  private setSpells() {
    axios.get("./spells.json").then((res: AxiosResponse) => {
      this.spells = res.data;
    });
  }

  public changeCase(args: string, isLower: boolean) {
    if (isLower) {
      return args.toLowerCase();
    }
    return args.toUpperCase();
  }

  public translate(args: string) {
    // ひらがなに変換
    const src = args.replace(/[\u30a1-\u30f6]/g, (match) => String.fromCharCode(match.charCodeAt(0) - 0x60));
    const toArray = src.split("");
    const results: string[] = [];
    toArray.map((arg, index) => {
      const spell = this.spells?.[arg]?.[0] ?? "";
      if (!(index in results)) {
        results.push(spell);
        // んの後ろがtoMに含まれていたらNをMに変換する
        if (this.toM?.split("")?.includes(arg) && toArray?.[index - 1] === "ん") {
          results[index - 1] = "M";
        }
        // 「っ」以外の拗音の場合は一つ前の文字とセットでspellを取得する
        if (this.small.split("").includes(arg)) {
          const double = `${toArray?.[index - 1]}${arg}`;
          const toDouble = this.spells?.[double]?.[0] ?? "";
          let tmp = toDouble;
          // 2つ前が「っ」の場合
          if (src?.[index - 2] === "っ") {
            tmp = this.toT.includes(double) ? `T${toDouble}` : `${toDouble?.charAt(0) ?? ""}${toDouble}`;
          }
          results[index - 1] = tmp;
        } else if (src?.[index - 1] === "っ") {
          results[index] = `${spell?.charAt(0) ?? ""}${spell}`;
        }
      }
    });
    // 長音の変換
    const replace = results
      .join("")
      .replaceAll(/OO(?=[A-Z])/g, "O")
      .replaceAll("UU", "U")
      .replaceAll(/(?!N)(OU)(?!E)/g, "O");
    return replace;
  }
}
