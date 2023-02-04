import IGame from '../../interface/IGame';
import moveAttack from './subevent/moveAttack';
import moveSkip from './subevent/moveSkip';
import moveFavor from './subevent/moveFavor';
import moveMix from './subevent/moveMix';
import moveLook from './subevent/moveLook';
// import endMove from './endMove';
import findIndexPlayerTern from './subevent/findIndexPlayerTern';

function makeMove(game: IGame, idCard: number): IGame {
  const myGame = { ...game };
  const inPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  if (myGame.gameState.functionState === 'waitPlayerTurn') {
    const myCard = game.players[inPl].deck.find((cr) => cr.id === idCard);
    // console.log('card', myCard);
    if (myCard !== undefined) {
      const cartType = myCard.type;
      switch (cartType) {
        case 3: return moveAttack(game, myCard, inPl);
        case 4: moveSkip(game); break;
        case 5: moveFavor(game); break;
        case 6: moveMix(game); break;
        case 7: moveLook(game); break;
        default: break;
      }
    }
  }

  /* if (myGame.gameState.stateGame === 'endTern') {
    myGame = endMove(myGame);
  } */
  console.log(myGame);
  return myGame;
}

export default makeMove;
