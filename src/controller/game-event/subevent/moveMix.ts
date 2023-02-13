import IGame from '../../../interface/IGame';
import findIndexPlayerTern from './findIndexPlayerTern';
import getPause from '../../game-loop/subevent/getPause';
import addHistory from './addHistory';
import langs from '../../../const/localization';

function moveMix(game: IGame): IGame {
  const currLang = game.settings.lang;
  const base = langs[currLang].deskPage.gameMsg.explosion;
  const myGame = { ...game };
  if (myGame.showCards.length === 1 && myGame.showCards[0].type === 6) {
    const myCard = myGame.showCards[0];
    const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
    myGame.deskDeck.sort(() => Math.random() - 0.5);
    myGame.reboundDeck.push(...myGame.showCards.splice(0));
    myGame.gameState.message = `${myGame.players[iPl].name} ${base}`;
    myGame.gameState.timeNeed = getPause(myGame.players[iPl].isBot, myGame.gameState.functionState);
    myGame.gameState.timeLeft = myGame.gameState.timeNeed;
    addHistory(myGame, 'moveMix', [myCard], true);
  } else {
    addHistory(myGame, 'moveMix', [], false);
  }
  return myGame;
}

export default moveMix;
