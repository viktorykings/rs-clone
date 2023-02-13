import IGame from '../../../interface/IGame';
import findIndexPlayerTern from './findIndexPlayerTern';
import cardType from '../../../const/cardType';
import startStateDeck from '../../statePlayerDeck/startStateDeck';

function combo3GiveCard(game: IGame, idCard: number): IGame {
  const myGame = { ...game };
  const indPlTake = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  let indPlGive = -1;
  if (myGame.gameState.choicePlayer !== null) {
    indPlGive = findIndexPlayerTern(myGame.players, myGame.gameState.choicePlayer.name);
  }
  const typeCard = myGame.gameState.modalDeck.find((cr) => cr.id === idCard)?.type;
  const indCard = myGame.players[indPlGive].deck.findIndex(
    (cr) => cr.type === typeCard
      || (cr.type >= 8 && typeCard !== undefined
          && typeCard >= 8),
  );
  if (indCard === -1) {
    myGame.gameState.message = `У ${myGame.players[indPlGive].name} нет карты ${cardType[typeCard ?? -1].name}.`;
  } else {
    const [card] = myGame.players[indPlGive].deck.splice(indCard, 1);
    myGame.players[indPlTake].deck.push(card);
    myGame.gameState.message = `${myGame.players[indPlTake].name} получает карту ${cardType[typeCard ?? -1].name}.`;
  }
  myGame.players[indPlTake] = startStateDeck(
    myGame.players[indPlTake],
    myGame.gameState.functionState,
    true,
  );
  myGame.gameState.functionState = 'waitPlayerTurn';
  myGame.gameState.stateGame = 'tern';
  myGame.gameState.modalVisible = false;
  myGame.gameState.modalTypeCard = null;
  myGame.gameState.modalDeck = [];
  myGame.gameState.modalMessage = '';
  myGame.reboundDeck.push(...myGame.showCards.splice(0));
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  return myGame;
}

export default combo3GiveCard;
