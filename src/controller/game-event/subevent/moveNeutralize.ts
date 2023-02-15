import langs from '../../../const/localization';
import IGame from '../../../interface/IGame';
import findIndexPlayerTern from './findIndexPlayerTern';

function moveNeutralize(game: IGame, idCard: number): IGame {
  const currLang = game.settings.lang;
  const base = langs[currLang].deskPage.gameMsg.neut;
  const myGame = { ...game };
  const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  const iCr = myGame.players[iPl].deck.findIndex((cr) => cr.id === idCard);
  myGame.showCards.push(...myGame.players[iPl].deck.splice(iCr, 1));
  myGame.gameState.functionState = 'endNeutralize';
  myGame.gameState.message = `${myGame.players[iPl].name} ${base[1]}`;
  myGame.gameState.timeNeed = 5;
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  myGame.gameState.returnToDeck = true;
  console.log('moveneut', myGame);
  return myGame;
}

export default moveNeutralize;
