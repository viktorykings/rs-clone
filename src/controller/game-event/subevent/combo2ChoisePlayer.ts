import IGame from '../../../interface/IGame';

function combo2ChoisePlayer(game: IGame, playerName: string): IGame {
  const myGame = { ...game };
  myGame.gameState.functionState = 'waitPlayerCombo2';
  myGame.gameState.playerWaitAnswer = myGame.gameState.playerTurn;
  myGame.gameState.playerTurn = playerName;
  myGame.gameState.message = `${playerName} думает какую отдать карту.`;
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  return myGame;
}

export default combo2ChoisePlayer;
