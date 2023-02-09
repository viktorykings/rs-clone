import IGame from '../../../interface/IGame';
import getPause from '../../game-loop/subevent/getPause';
import findIndexPlayerTern from './findIndexPlayerTern';
import addHistory from './addHistory';

function moveSkip(game: IGame): IGame {
  const myGame = { ...game };
  if (myGame.showCards.length === 1 && myGame.showCards[0].type === 4) {
    const myCard = myGame.showCards[0];
    const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
    myGame.reboundDeck.push(...myGame.showCards.splice(0));
    myGame.players[iPl].countTakeCard -= 1;
    myGame.gameState.message = `Игроку ${myGame.players[iPl].name} осталось взять одну карту`;
    if (myGame.players[iPl].countTakeCard === 0) {
      myGame.gameState.message = `${myGame.players[iPl].name} передает ход`;
      myGame.players[iPl].buttons.finishMove = true;
      myGame.gameState.functionState = 'waitEndMove';
    }
    myGame.gameState.timeNeed = getPause(myGame.players[iPl].isBot, myGame.gameState.functionState);
    addHistory(myGame, 'moveSkip', [myCard], true);
  } else {
    addHistory(myGame, 'moveSkip', [], false);
  }
  return myGame;
}

export default moveSkip;
