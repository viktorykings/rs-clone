import IGame from '../../../interface/IGame';
import findIndexPlayerTern from './findIndexPlayerTern';
import { waitEndMove } from '../../../const/gameVariable';
import startStateDeck from '../../statePlayerDeck/startStateDeck';
import langs from '../../../const/localization';

function moveNot(game: IGame, idCard: number): IGame {
  const currLang = game.settings.lang;
  const base = langs[currLang].deskPage.gameMsg.no;
  const myGame = { ...game };
  const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  const iCr = myGame.players[iPl].deck.findIndex((cr) => cr.id === idCard);
  myGame.showCards.push(...myGame.players[iPl].deck.splice(iCr, 1));
  myGame.players[iPl] = startStateDeck(myGame.players[iPl], 'waitEndMove', false);
  myGame.gameState.functionState = 'waitEndNot';
  myGame.gameState.playerTurn = myGame.gameState.playerWaitAnswer[0].name;
  myGame.gameState.playerWaitAnswer.splice(0, 1);
  myGame.gameState.timeNeed = waitEndMove;
  myGame.gameState.message = `${myGame.players[iPl].name} ${base}`;
  myGame.gameState.timeLeft = 3; // myGame.gameState.timeNeed;
  return myGame;
}

export default moveNot;
