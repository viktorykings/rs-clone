import IGame from '../../../interface/IGame';
import findIndexPlayerTern from './findIndexPlayerTern';
import getPause from '../../game-loop/subevent/getPause';

function endNot(game: IGame): IGame {
  const myGame = { ...game };
  const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  myGame.reboundDeck.push(...myGame.showCards.splice(0));
  myGame.gameState.functionState = myGame.players[iPl].countTakeCard > 0 ? 'waitTakeCardDeskDeck' : 'waitEndMove';
  myGame.gameState.timeNeed = getPause(myGame.players[iPl].isBot, myGame.gameState.functionState);
  myGame.gameState.message = '';
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  return myGame;
}

export default endNot;
