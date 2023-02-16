import IGame from '../interface/IGame';
import ISettings from '../interface/ISettings';
import ICard from '../interface/ICard';
import IPlayer from '../interface/IPlayer';
import TStateGame from '../interface/IStateGame';
import createDeckFirst from './createDeckFirst';
import TFunctionState from '../interface/TFunctionState';
import { playerWaitTurn } from '../const/gameVariable';
import MiddleBot from './game-loop/bots/middleBot';
import langs from '../const/localization';

function createGame(players: IPlayer [] = []): IGame {
  const settings: ISettings = {
    countPlayer: players.length,
    level: 'easy',
    lang: 'en',
  };

  const { deskDeck, playersDeck } = createDeckFirst(players, settings.lang);

  const reboundDeck: ICard [] = [];

  const showCards: ICard [] = [];

  const stateGame: TStateGame = 'tern';

  const functionState: TFunctionState = 'waitPlayerTurn';

  let playerTurn = '';
  if (players.length > 0) playerTurn = players[0].name;

  const bot = new MiddleBot();
  const currLang = settings.lang;
  const base = langs[currLang].startGame;

  const gameState = {
    playerTurn,
    stateGame,
    functionState,
    functionEtap: 0,
    timerId: null,
    timeLeft: 30,
    timeNeed: playerWaitTurn,
    typeTern: null,
    playerWaitAnswer: [],
    message: `${base}`,
    history: [],
    modalVisible: false,
    modalPlayers: [],
    modalDeck: [],
    modalTitle: '',
    modalMessage: '',
    modalTypeCard: null,
    choicePlayer: null,
    modalCardVisible: false,
    returnToDeck: false,
    showCardVisible: true,
    endGame: false,
    bot,
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
