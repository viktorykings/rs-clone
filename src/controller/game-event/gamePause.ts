import IGame from '../../interface/IGame';

function gamePause(game: IGame, isPause: boolean): IGame {
  const myGame = { ...game };
  myGame.gameState.pause = isPause;
  return myGame;
}

export default gamePause;
