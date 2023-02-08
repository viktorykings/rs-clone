import IGame from '../../../interface/IGame';
import findIndexPlayerTern from './findIndexPlayerTern';

function moveNeutralize(game: IGame, idCard: number): IGame {
  const myGame = { ...game };
  const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  const iCr = myGame.players[iPl].deck.findIndex((cr) => cr.id === idCard);
  myGame.showCards.push(...myGame.players[iPl].deck.splice(iCr, 1));
  myGame.gameState.functionState = 'endNeutralize';
  myGame.gameState.message = `${myGame.players[iPl].name} походил картой 'Обезвредить'.`;
  myGame.gameState.timeNeed = 5;
  return myGame;
}

export default moveNeutralize;
