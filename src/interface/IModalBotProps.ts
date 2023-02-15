export default interface IModalBotProps {
  title: string;
  level: string;
  updateLevel: (value: string) => void;
  setGameLevel: (value: string) => void;
  onSetLevel: () => void;
  localLang: string[];
}
