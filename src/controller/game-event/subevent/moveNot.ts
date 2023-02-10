import IGame from '../../../interface/IGame';
import findIndexPlayerTern from './findIndexPlayerTern';
import { waitEndMove } from '../../../const/gameVariable';

function moveSkip(game: IGame, idCard: number): IGame {
  const myGame = { ...game };
  const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  const iCr = myGame.players[iPl].deck.findIndex((cr) => cr.id === idCard);
  myGame.showCards.push(...myGame.players[iPl].deck.splice(iCr, 1));
  myGame.gameState.functionState = 'waitEndNot';
  myGame.gameState.playerTurn = myGame.gameState.playerWaitAnswer;
  myGame.gameState.playerWaitAnswer = '';
  myGame.gameState.timeNeed = waitEndMove;
  myGame.gameState.message = `${myGame.players[iPl].name} походил картой 'Нет'`;
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  return myGame;
}

export default moveSkip;
