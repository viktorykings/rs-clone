import IGame from '../../../interface/IGame';
import findIndexPlayerTern from './findIndexPlayerTern';
import getPause from '../../game-loop/subevent/getPause';
import startStateDeck from '../../statePlayerDeck/startStateDeck';

function endNot(game: IGame): IGame {
  const myGame = { ...game };
  const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  myGame.reboundDeck.push(...myGame.showCards.splice(0));
  myGame.gameState.functionState = myGame.players[iPl].countTakeCard > 0 ? 'waitPlayerTurn' : 'waitEndMove';
  myGame.gameState.timeNeed = getPause(myGame.players[iPl].isBot, myGame.gameState.functionState);
  myGame.gameState.message = `${myGame.gameState.playerTurn} думает как походить.`;
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  myGame.players[iPl] = startStateDeck(
    myGame.players[iPl],
    myGame.gameState.functionState,
    myGame.players[iPl].name === myGame.gameState.playerTurn,
  );
  return myGame;
}

export default endNot;
