import { waitEndMove } from '../../../const/gameVariable';
import IGame from '../../../interface/IGame';
import addHistory from './addHistory';
import findNextActivePlayer from './findNextActivePlayer';

function moveAttack(game: IGame, /* myCard: ICard, */ inPl: number): IGame {
  const myGame = { ...game };
  // const indCard = myGame.players[inPl].deck.findIndex((el) => el.id === myCard.id);
  if (myGame.showCards.length === 1 && myGame.showCards[0].type === 3) {
    // console.log('aaaaaaaaaattack');
    // console.log(inPl);
    const myCard = myGame.showCards[0];
    const nextPl = findNextActivePlayer(myGame);
    nextPl.countTakeCard += 1;
    myGame.players[inPl].countTakeCard = 0;
    myGame.players[inPl].buttons.finishMove = true;

    myGame.reboundDeck.push(...myGame.showCards.splice(0));
    myGame.gameState.message = `${myGame.players[inPl].name} походил картой 'Атака'`;
    myGame.gameState.functionState = 'waitEndMove';
    myGame.gameState.timeNeed = waitEndMove;
    addHistory(myGame, 'moveAttack', [myCard], true);
  } else {
    addHistory(myGame, 'moveAttack', [], false);
  }
  return myGame;
}

export default moveAttack;
