import IGame from '../../../interface/IGame';
import findIndexPlayerTern from './findIndexPlayerTern';
import cardType from '../../../const/cardType';
import startStateDeck from '../../statePlayerDeck/startStateDeck';

function combo5GiveCard(game: IGame, idCard: number): IGame {
  const myGame = { ...game };
  myGame.gameState.functionState = 'waitPlayerTurn';
  myGame.gameState.stateGame = 'tern';
  const indPlTake = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  const indCard = myGame.reboundDeck.findIndex((cr) => cr.id === idCard);
  const [card] = myGame.reboundDeck.splice(indCard, 1);
  myGame.players[indPlTake].deck.push(card);
  myGame.players[indPlTake] = startStateDeck(
    myGame.players[indPlTake],
    myGame.gameState.functionState,
    true,
  );
  myGame.gameState.message = `${myGame.gameState.playerTurn} получает карту ${cardType[card.type].name}.`;
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  return myGame;
}

export default combo5GiveCard;
