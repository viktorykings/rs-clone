export default interface IBotProps {
  name: string;
  isBot: boolean;
  link: string;
  level: string;
  deletePlayer: (name: string) => void;
  brdrColor: string;
}
