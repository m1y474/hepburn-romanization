import { Spell as SpellType } from "types";

export default class Spell {
  public async fetch(): Promise<SpellType> {
    return await fetch("./spells.json")
      .then((tmp) => tmp.json())
      .then((res) => res);
  }
}
