import IGame from '../interface/IGame';
import ISettings from '../interface/ISettings';
import ICard from '../interface/ICard';
import IPlayer from '../interface/IPlayer';
import TStateGame from '../interface/IStateGame';
import createDeckFirst from './createDeckFirst';

function createGame(players: IPlayer [] = []): IGame {
  const settings: ISettings = { countPlayer: players.length, level: 'easy' };

  const { deskDeck, playersDeck } = createDeckFirst(players);

  const reboundDeck: ICard [] = [];

  const showCards: ICard [] = [];

  const stateGame: TStateGame = 'tern';

  const gameState = {
    playerTurn: 'player1',
    stateGame,
    timeLeft: 30,
    message: '',
    history: [],
  };

  return {
    settings,
    players: playersDeck,
    deskDeck,
    reboundDeck,
    showCards,
    gameState,
  };
}

export default createGame;
