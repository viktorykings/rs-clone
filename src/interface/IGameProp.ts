import IGame from "./IGame";

export interface IGameProp {
  game: IGame,
}
export interface Setter extends IGameProp {
    setGame: React.Dispatch<React.SetStateAction<IGame>>;
}