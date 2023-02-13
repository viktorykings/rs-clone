export interface ILocalization {
  [ru: string]: Pages,
  en: Pages,
}

interface Pages {
  main: MainPage,
  settings: SettingsPage,
  deskPage: DeskPage,
  endGameModal: EndGameModal,
}

interface MainPage {
  start: string,
  settings: string,
  about: string,
}
interface SettingsPage {
  language: string,
}
interface EndGameModal {
  buttons: string[],
}
interface DeskPage {
  buttons: DeskPageBtns
  gameMsg: GameEvents,
}
interface DeskPageBtns {
  neutButtons: string[],
  comboButtons: string[],
  endMoveBtn: string,
}
interface GameEvents {
  makeMove: Move,
  endMove: string[],
  combos: string[],
}
interface Move{
  move: string,
  moveCombo: string[],
}