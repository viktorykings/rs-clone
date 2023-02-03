import ICard from '../../../interface/ICard';
import IGame from '../../../interface/IGame';
import addHistory from './addHistory';
import findNextActivePlayer from './findNextActivePlayer';

function moveAttack(game: IGame, myCard: ICard, inPl: number): IGame {
  const myGame = { ...game };
  const indCard = myGame.players[inPl].deck.findIndex((el) => el.id === myCard.id);
  if (indCard !== -1) {
    const nextPl = findNextActivePlayer(myGame);
    nextPl.countTakeCard += 1;
    myGame.players[inPl].countTakeCard = 0;
    myGame.players[inPl].buttons.finishMove = true;

    myGame.showCards.push(...myGame.players[inPl].deck.splice(indCard, 1));
    myGame.gameState.message = `${myGame.players[inPl].name} походил картой 'Атака'`;
    // myGame.gameState.stateGame = 'endTern';
    addHistory(myGame, 'moveAttack', [myCard], true);
  } else {
    addHistory(myGame, 'moveAttack', [myCard], false);
  }
  return myGame;
}

export default moveAttack;
