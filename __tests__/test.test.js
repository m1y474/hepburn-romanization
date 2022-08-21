import Translator from "../src/useCases/Translator";
import Spell from "../src/repositories/Spell";

test("データ取得", () => {
  new Spell().fetch().then((res) => {
    expect(res["あ"][0]).toBe("あ");
    expect(res["ゔぉ"]).toBe(["BO", "BUO"]);
  });
});

const translator = new Translator();
test("ヘボン式ローマ字に変換ができる", () => {
  async () => {
    const src = [
      { src: "やまだたろう", expected: "YAMADATARO" },
      { src: "いのうえ", expected: "INOUE" },
      { src: "タキノウエ", expected: "TAKINOUE" },
      { src: "せのお", expected: "SENOO" },
      { src: "ほんま", expected: "HOMMA" },
      { src: "サンペイ", expected: "SAMPEI" },
      { src: "はっとり", expected: "HATTORI" },
      { src: "キッカワ", expected: "KIKKAWA" },
      { src: "ほっち", expected: "HOTCHI" },
      { src: "ハッチョウ", expected: "HATCHO" },
      { src: "ゆうき", expected: "YUKI" },
      { src: "ヨウコ", expected: "YOKO" },
      { src: "おおにし", expected: "ONISHI" },
      { src: "オオカワ", expected: "OKAWA" },
      { src: "せのお", expected: "SENOO" },
      { src: "タカトオ", expected: "TAKATOO" },
      { src: "タカトウ", expected: "TAKATO" },
      { src: "しいな", expected: "SHIINA" },
      { src: "ニーナ", expected: "NINA" },
    ];
    src.map((row) => {
      expect(translator.translate(row.src)).toBe(row.expected);
    });
  };
});

test("大文字・小文字に変換できる", () => {
  async () => {
    expect(translator.changeCase("yamada", false)).toBe("YAMADA");
    expect(translator.changeCase("yamada", true)).toBe("yamada");
    expect(translator.changeCase("YAMADA", false)).toBe("yamada");
  };
});
