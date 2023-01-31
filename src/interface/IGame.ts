import ICard from './ICard';
import IPlayer from './IPlayer';
import ISettings from './ISettings';
import TStateGame from './IStateGame';

interface IGame {
  settings: ISettings,
  players: IPlayer[],
  deskDeck: ICard [],
  reboundDeck: ICard [],
  showCards: ICard[],
  gameState: {
    playerTern: string,
    stateGame: TStateGame,
    timeLeft: number,
    message: string,
  }
}

export default IGame;
