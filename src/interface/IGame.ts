import ICard from './ICard';
import IHistory from './IHistory';
import IPlayer from './IPlayer';
import ISettings from './ISettings';
import TStateGame from './IStateGame';
import TFunctionState from './TFunctionState';

interface IGame {
  settings: ISettings,
  players: IPlayer[],
  deskDeck: ICard [],
  reboundDeck: ICard [],
  showCards: ICard[],
  gameState: {
    playerTurn: string,
    stateGame: TStateGame,
    functionState: TFunctionState,
    timeLeft: number,
    message: string,
    history: IHistory []
  }
}
export interface Setter extends IGame {
  setGame: React.Dispatch<React.SetStateAction<IGame>>;
}

export default IGame;
