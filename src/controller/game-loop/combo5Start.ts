import IGame from '../../interface/IGame';

function combo5Start(game: IGame): IGame {
  const myGame = { ...game };
  myGame.reboundDeck.push(...myGame.showCards.splice(0));
  myGame.gameState.functionState = 'waitCombo5';
  myGame.gameState.message = 'Выберите любую карту из отбоя!';
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  return myGame;
}

export default combo5Start;
