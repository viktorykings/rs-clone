import IGame from '../../../interface/IGame';
import findIndexPlayerTern from './findIndexPlayerTern';
import cardType from '../../../const/cardType';

function combo2GiveCard(game: IGame, idCard: number): IGame {
  const myGame = { ...game };
  myGame.gameState.functionState = 'waitPlayerTurn';
  myGame.gameState.stateGame = 'tern';
  const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  // const indPlTake = findIndexPlayerTern(myGame.players, myGame.gameState.playerWaitAnswer);
  if (idCard > -1 && myGame.gameState.choicePlayer !== null) {
    const indCard = myGame.gameState.choicePlayer.deck.findIndex((cr) => cr.id === idCard);
    const [card] = myGame.gameState.choicePlayer.deck.splice(indCard, 1);
    myGame.players[iPl].deck.push(card);
    myGame.gameState.message = `${myGame.gameState.playerTurn} получает карту ${cardType[card.type].name}.`;
  } else {
    myGame.gameState.message = `${myGame.gameState.choicePlayer?.name} нет карт и отдать ему нечего.`;
  }
  myGame.gameState.choicePlayer = null;
  myGame.gameState.modalVisible = false;
  myGame.gameState.modalPlayers = [];
  myGame.gameState.modalDeck = [];
  myGame.gameState.modalTitle = '';

  myGame.reboundDeck.push(...myGame.showCards.splice(0));
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  return myGame;
}

export default combo2GiveCard;
