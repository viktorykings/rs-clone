import IGame from '../../../interface/IGame';
import findIndexPlayerTern from './findIndexPlayerTern';
import cardType from '../../../const/cardType';

function combo3GiveCard(game: IGame, idCard: number): IGame {
  const myGame = { ...game };
  const indPlGive = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  const indPlTake = findIndexPlayerTern(myGame.players, myGame.gameState.playerWaitAnswer);
  const indCard = myGame.players[indPlGive].deck.findIndex((cr) => cr.id === idCard);
  if (indCard === -1) {
    if (myGame.gameState.modalTypeCard !== null) {
      myGame.gameState.message = `У ${myGame.gameState.playerTurn} нет карты ${cardType[myGame.gameState.modalTypeCard].name}.`;
    }
  } else {
    if (myGame.gameState.modalTypeCard !== null
      && myGame.gameState.modalTypeCard !== myGame.players[indPlGive].deck[indCard].type) {
      myGame.gameState.message = `${myGame.gameState.playerWaitAnswer} попросил ${cardType[myGame.gameState.modalTypeCard].name}!`;
      myGame.gameState.timeLeft = myGame.gameState.timeNeed;
      return myGame;
    }
    const [card] = myGame.players[indPlGive].deck.splice(indCard, 1);
    myGame.players[indPlTake].deck.push(card);
    if (myGame.gameState.modalTypeCard !== null) {
      myGame.gameState.message = `${myGame.gameState.playerWaitAnswer} получает карту ${cardType[myGame.gameState.modalTypeCard].name}.`;
    }
  }
  myGame.gameState.functionState = 'waitPlayerTurn';
  myGame.gameState.stateGame = 'tern';
  myGame.gameState.modalTypeCard = null;
  myGame.gameState.playerTurn = myGame.gameState.playerWaitAnswer;
  myGame.gameState.playerWaitAnswer = '';
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  console.log(myGame);
  return myGame;
}

export default combo3GiveCard;
