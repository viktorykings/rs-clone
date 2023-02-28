import langs from '../../../const/localization';
import IGame from '../../../interface/IGame';
import getPause from '../../game-loop/subevent/getPause';
import findIndexPlayerTern from './findIndexPlayerTern';

function endMoveNeutralize(game: IGame, ind: number): IGame {
  const currLang = game.settings.lang;
  const base = langs[currLang].deskPage.gameMsg.neut;
  const myGame = { ...game };
  const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  const iDC = myGame.showCards.findIndex((cr) => cr.type === 0);
  if (ind > 0) myGame.players[iPl].visibleCards.push(ind);
  let iDeck = ind - 1;
  if (iDeck < 0) {
    const len = game.deskDeck.length;
    iDeck = Math.floor(Math.random() * len);
  }
  const [cardExCat] = myGame.showCards.splice(iDC, 1);
  myGame.deskDeck.splice(iDeck, 0, cardExCat);
  myGame.reboundDeck.push(...myGame.showCards.splice(0));
  myGame.players[iPl].countTakeCard = 0;
  myGame.gameState.functionState = 'waitEndMove';
  myGame.gameState.message = `${myGame.players[iPl].name} ${base[0]}`;
  myGame.gameState.timeNeed = getPause(myGame.players[iPl].isBot, myGame.gameState.functionState);
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  myGame.gameState.returnToDeck = false;
  myGame.players[iPl].buttons.finishMove = true;
  myGame.players[iPl].buttons.dobleVisible = false;
  myGame.players[iPl].buttons.tripleVisible = false;
  myGame.players[iPl].buttons.fiveVisible = false;

  return myGame;
}

export default endMoveNeutralize;
