export interface ILocalization {
  [ru: string]: Pages,
  en: Pages,
}

interface Pages {
  main: MainPage,
  settings: SettingsPage,
  deskPage: DeskPage,
  endGameModal: EndGameModal,
  startGame: string,
  gameSettings: GameSettings,
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
interface GameSettings {
  bot: string,
  player: string[],
  level: string[],
  buttons: string[],
  modal: GameSettingsModals,
  botNames: string[],
}
interface GameSettingsModals {
  name: string[],
  avatar: string[],
  level: string[]
}
interface DeskPage {
  buttons: DeskPageBtns,
  gameMsg: GameEvents,
  modalTitles: ModalTitles,
  deck: string[],
}
interface DeskPageBtns {
  neutButtons: string[],
  comboButtons: string[],
  endMoveBtn: string,
}
interface ModalTitles {
  combo: string,
  favour: string,
  comboStart: string[],
}
interface GameEvents {
  makeMove: Move,
  endMove: string[],
  combos: string[],
  neut: string[],
  explosion: string,
  favour: string,
  attack: string,
  mix: string,
  no: string,
  skip: string[],
  takeCard: string[],
}
interface Move{
  move: string,
  moveCombo: string[],
  rule: string,
}
