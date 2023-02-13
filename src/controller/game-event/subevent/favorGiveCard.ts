import IGame from '../../../interface/IGame';
import findIndexPlayerTern from './findIndexPlayerTern';
import cardType from '../../../const/cardType';
import getPause from '../../game-loop/subevent/getPause';
import startStateDeck from '../../statePlayerDeck/startStateDeck';

function favorGiveCard(game: IGame, idCard: number): IGame {
  const myGame = { ...game };
  myGame.gameState.functionState = 'waitPlayerTurn';
  myGame.gameState.stateGame = 'tern';
  const indPlGive = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  if (idCard > -1 && myGame.gameState.choicePlayer !== null) {
    const indCard = myGame.players[indPlGive].deck.findIndex((cr) => cr.id === idCard);
    const [card] = myGame.players[indPlGive].deck.splice(indCard, 1);
    // myGame.gameState.choicePlayer.deck.push(card);
    myGame.gameState.playerWaitAnswer[0].deck.push(card);
    myGame.gameState.message = `${myGame.gameState.playerWaitAnswer[0].name} получает карту ${cardType[card.type].name}.`;
    myGame.gameState.timeLeft = getPause(
      myGame.gameState.choicePlayer.isBot,
      myGame.gameState.functionState,
    );
  } else {
    myGame.gameState.message = `У ${myGame.gameState.choicePlayer?.name} нет карт и отдать ему нечего.`;
  }
  myGame.players[indPlGive] = startStateDeck(myGame.players[indPlGive], 'waitEndMove', false);
  myGame.gameState.choicePlayer = null;
  myGame.gameState.modalVisible = false;
  myGame.gameState.playerTurn = myGame.gameState.playerWaitAnswer[0].name;
  const indPlTake = findIndexPlayerTern(myGame.players, myGame.gameState.playerWaitAnswer[0].name);
  myGame.players[indPlTake] = startStateDeck(myGame.players[indPlTake], 'waitPlayerTurn', true);
  myGame.gameState.playerWaitAnswer.splice(0, 1);
  myGame.reboundDeck.push(...myGame.showCards.splice(0));
  if (myGame.gameState.timeLeft < 2) myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  // console.log(myGame);
  return myGame;
}

export default favorGiveCard;
