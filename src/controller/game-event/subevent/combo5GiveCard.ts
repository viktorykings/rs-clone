import IGame from '../../../interface/IGame';
import findIndexPlayerTern from './findIndexPlayerTern';
import cardType from '../../../const/cardType';

function combo5GiveCard(game: IGame, idCard: number): IGame {
  const myGame = { ...game };
  myGame.gameState.functionState = 'waitPlayerTurn';
  myGame.gameState.stateGame = 'tern';
  const indPlTake = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  const indCard = myGame.reboundDeck.findIndex((cr) => cr.id === idCard);
  const [card] = myGame.reboundDeck.splice(indCard, 1);
  myGame.players[indPlTake].deck.push(card);
  myGame.gameState.message = `${myGame.gameState.playerTurn} получает карту ${cardType[card.type].name}.`;
  return myGame;
}

export default combo5GiveCard;
