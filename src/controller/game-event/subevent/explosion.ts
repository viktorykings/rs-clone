import IGame from '../../../interface/IGame';
import getPause from '../../game-loop/subevent/getPause';
import findIndexPlayerTern from './findIndexPlayerTern';
import findNextActivePlayer from './findNextActivePlayer';

function explosion(game: IGame): IGame {
  const myGame = { ...game };
  const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  const nextPl = findNextActivePlayer(myGame);
  if (myGame.players[iPl].isBot) {
    myGame.players[iPl].active = false;
    const countActive = myGame.players.reduce((sum, pl) => sum + (pl.active === true ? 1 : 0), 0);
    if (countActive === 1) {
      myGame.gameState.functionState = 'win';
    } else {
      myGame.reboundDeck.push(...myGame.showCards.splice(0));
      myGame.gameState.stateGame = 'tern';
      myGame.gameState.functionState = 'waitPlayerTurn';
      myGame.gameState.playerTurn = nextPl.name;
      myGame.gameState.timeNeed = getPause(nextPl.isBot, myGame.gameState.functionState);
    }
  } else {
    myGame.gameState.functionState = 'lose';
  }
  return myGame;
}

export default explosion;
