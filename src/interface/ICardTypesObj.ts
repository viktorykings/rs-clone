import ICardType from "./ICardType";

export default interface ICardTypesObj {
  [ru: string]: ICardType [],
  en: ICardType [],
}