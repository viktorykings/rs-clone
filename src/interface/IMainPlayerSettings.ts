export default interface IMainPlayerSettings {
  name: string;
  isBot: boolean;
  level: string;
  avatar: string;
  openModalChangeName: () => void;
  openModalChangeAvatar: () => void;
  localLang: string[];
}
