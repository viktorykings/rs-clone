import IGame from '../../../interface/IGame';
import makeMove from '../makeMove';

function endNotToNot(game: IGame): IGame {
  let myGame = { ...game };
  // const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  myGame.reboundDeck.push(...myGame.showCards.splice(-2, 2));
  if (myGame.gameState.playerWaitAnswer.length === 2) {
    myGame.gameState.playerWaitAnswer.shift();
    const plTern = myGame.gameState.playerWaitAnswer.shift();
    if (plTern !== undefined) myGame.gameState.playerTurn = plTern.name;
    myGame.gameState.stateGame = 'tern';
    if (myGame.reboundDeck.length === 2) myGame.gameState.stateGame = 'doubleCombo';
    if (myGame.reboundDeck.length === 3) myGame.gameState.stateGame = 'tripleCombo';
    if (myGame.reboundDeck.length === 5) myGame.gameState.stateGame = 'fiveCombo';
    myGame.gameState.functionState = 'waitPlayerTurn';
    myGame = makeMove(myGame, myGame.showCards[0].id, false);
  }

  return myGame;
}

export default endNotToNot;
