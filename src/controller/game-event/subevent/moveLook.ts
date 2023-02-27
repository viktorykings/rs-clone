import IGame from '../../../interface/IGame';
import getPause from '../../game-loop/subevent/getPause';
import findIndexPlayerTern from './findIndexPlayerTern';

function moveLook(game: IGame): IGame {
  const myGame = { ...game };
  myGame.reboundDeck.push(...myGame.showCards.splice(0));
  myGame.showCards.push(...myGame.deskDeck.splice(0, 3));
  myGame.gameState.functionState = 'waitPlayerLook';
  const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  myGame.gameState.showCardVisible = !myGame.players[iPl].isBot;
  myGame.players[iPl].visibleCards = [1, 2, 3];
  myGame.gameState.timeLeft = getPause(myGame.players[iPl].isBot, myGame.gameState.functionState);
  myGame.gameState.message = `${myGame.players[iPl].name} посмотрел 3 карты.`;
  return myGame;
}

export default moveLook;
