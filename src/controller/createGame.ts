import IGame from '../interface/IGame';
import ISettings from '../interface/ISettings';
import ICard from '../interface/ICard';
import IPlayer from '../interface/IPlayer';
import TStateGame from '../interface/IStateGame';
import createDeckFirst from './createDeckFirst';
import TFunctionState from '../interface/TFunctionState';
import { playerWaitTurn } from '../const/gameVariable';

function createGame(players: IPlayer [] = []): IGame {
  const settings: ISettings = { countPlayer: players.length, level: 'easy' };

  const { deskDeck, playersDeck } = createDeckFirst(players);

  const reboundDeck: ICard [] = [];

  const showCards: ICard [] = [];

  const stateGame: TStateGame = 'tern';

  const functionState: TFunctionState = 'waitPlayerTurn';

  const gameState = {
    playerTurn: 'player1',
    stateGame,
    functionState,
    functionEtap: 0,
    timerId: null,
    timeLeft: 30,
    timeNeed: playerWaitTurn,
    typeTern: null,
    playerWaitAnswer: '',
    message: '',
    history: [],
    modalVisible: false,
    modalPlayers: [],
    modalDeck: [],
    modalTitle: '',
    modalMessage: '',
    modalTypeCard: null,
    choicePlayer: null,
    modalCardVisible: false,
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
