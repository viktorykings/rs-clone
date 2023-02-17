import IGame from '../../../interface/IGame';
import findIndexPlayerTern from './findIndexPlayerTern';
import startStateDeck from '../../statePlayerDeck/startStateDeck';
import langs from '../../../const/localization';
// import findNextActivePlayer from './findNextActivePlayer';
// import getPause from '../../game-loop/subevent/getPause';

function moveNotToNot(game: IGame, idCard: number): IGame {
  const currLang = game.settings.lang;
  const base = langs[currLang].deskPage.gameMsg.no;
  const myGame = { ...game };
  const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  const iCr = myGame.players[iPl].deck.findIndex((cr) => cr.id === idCard);
  myGame.showCards.push(...myGame.players[iPl].deck.splice(iCr, 1));
  myGame.players[iPl] = startStateDeck(myGame.players[iPl], 'waitEndMove', false);
  myGame.gameState.functionState = 'waitEndNotToNot';
  // myGame.gameState.playerWaitAnswer.unshift(myGame.players[iPl]);
  // const nextPl = findNextActivePlayer(myGame);
  // const indNextPl = findIndexPlayerTern(myGame.players, nextPl.name);
  // myGame.gameState.functionState = 'waitEndNotToNot';
  // myGame.players[indNextPl] = startStateDeck(nextPl, 'waitAnserTurn', false);
  // myGame.gameState.playerTurn = nextPl.name;
  // myGame.gameState.timeLeft = getPause(nextPl.isBot, 'waitAnserTurn');
  /* myGame.gameState.functionState = 'waitEndNot';
  myGame.gameState.playerTurn = myGame.gameState.playerWaitAnswer[0].name;
  myGame.gameState.playerWaitAnswer.splice(0, 1);
  myGame.gameState.timeNeed = waitEndMove; */
  myGame.gameState.message = `${myGame.players[iPl].name} ${base}`;
  myGame.gameState.timeLeft = 4; // myGame.gameState.timeNeed;
  return myGame;
}

export default moveNotToNot;