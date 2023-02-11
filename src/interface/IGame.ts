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
    functionEtap: number,
    timerId: NodeJS.Timer | null;
    typeTern: number | null;
    playerWaitAnswer: string;
    timeLeft: number,
    timeNeed: number,
    message: string,
    history: IHistory [],
    modalVisible: boolean,
    modalPlayers: IPlayer[],
    modalDeck: ICard [],
    modalTitle: string,
    modalMessage: string,
    modalTypeCard: number | null,
    choicePlayer: IPlayer | null,
    modalCardVisible: boolean,
    returnToDeck: boolean,
    showCardVisible: boolean,
  }
}
export interface Setter extends IGame {
  setGame: React.Dispatch<React.SetStateAction<IGame>>;
}

export default IGame;
