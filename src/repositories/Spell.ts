import axios, { AxiosResponse } from "axios";
import { Spell as SpellType } from "types";

export default class Spell {
  public async fetch(): Promise<SpellType> {
    return await axios.get("./spells.json").then((res: AxiosResponse) => res.data);
  }
}
