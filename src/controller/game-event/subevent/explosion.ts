import langs from '../../../const/localization';
import IGame from '../../../interface/IGame';
import getPause from '../../game-loop/subevent/getPause';
import startStateDeck from '../../statePlayerDeck/startStateDeck';
import findIndexPlayerTern from './findIndexPlayerTern';
import findNextActivePlayer from './findNextActivePlayer';

function explosion(game: IGame): IGame {
  const currLang = game.settings.lang;
  const base = langs[currLang].deskPage.gameMsg.explosion;
  const myGame = { ...game };
  const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  const nextPl = findNextActivePlayer(myGame);
  if (myGame.players[iPl].isBot) {
    myGame.players[iPl].active = false;
    myGame.gameState.message = `${myGame.players[iPl].name} ${base}`;
    const countActive = myGame.players.reduce((sum, pl) => sum + (pl.active === true ? 1 : 0), 0);
    if (countActive === 1) {
      myGame.gameState.functionState = 'win';
      myGame.gameState.endGame = true;
    } else {
      myGame.reboundDeck.push(...myGame.showCards.splice(0));
      myGame.gameState.stateGame = 'tern';
      myGame.gameState.functionState = 'waitPlayerTurn';
      myGame.gameState.playerTurn = nextPl.name;
      const inPl = findIndexPlayerTern(myGame.players, nextPl.name);
      myGame.players[inPl] = startStateDeck(myGame.players[inPl], 'waitPlayerTurn', true);
      myGame.gameState.timeNeed = getPause(nextPl.isBot, myGame.gameState.functionState);
      myGame.gameState.timeLeft = myGame.gameState.timeNeed;
    }
  } else {
    myGame.gameState.functionState = 'lose';
    myGame.gameState.endGame = true;
  }
  return myGame;
}

export default explosion;
