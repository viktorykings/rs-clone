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
interface DeskPage {
  buttons: string[],
  comboButtons: string[],
  endMove: string,
  gameMsg: string,
}
interface EndGameModal {
  buttons: string[],
}