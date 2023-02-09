import IGame from '../../../interface/IGame';
import findIndexPlayerTern from './findIndexPlayerTern';
import cardType from '../../../const/cardType';

function combo2GiveCard(game: IGame, idCard: number): IGame {
  const myGame = { ...game };
  myGame.gameState.functionState = 'waitPlayerTurn';
  myGame.gameState.stateGame = 'tern';
  const indPlGive = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  const indPlTake = findIndexPlayerTern(myGame.players, myGame.gameState.playerWaitAnswer);
  const indCard = myGame.players[indPlGive].deck.findIndex((cr) => cr.id === idCard);
  const [card] = myGame.players[indPlGive].deck.splice(indCard, 1);
  myGame.players[indPlTake].deck.push(card);
  myGame.gameState.playerTurn = myGame.gameState.playerWaitAnswer;
  myGame.gameState.playerWaitAnswer = '';
  myGame.gameState.message = `${myGame.gameState.playerTurn} получает карту ${cardType[card.type].name}.`;
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  return myGame;
}

export default combo2GiveCard;
