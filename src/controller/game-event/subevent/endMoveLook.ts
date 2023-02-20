import IGame from '../../../interface/IGame';

function endMoveLook(game: IGame): IGame {
  const myGame = { ...game };
  myGame.deskDeck.unshift(...myGame.showCards.splice(0));
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  myGame.gameState.functionState = 'waitPlayerTurn';
  myGame.gameState.showCardVisible = true;
  console.log(myGame);
  return myGame;
}

export default endMoveLook;
