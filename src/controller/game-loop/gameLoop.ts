import IGame from '../../interface/IGame';
import mainGameLoop from './mainGameLoop';

function gameLoop(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  // console.log('call main loop');
  // console.log(game.gameState.functionState);
  // console.log(window.location.pathname);
  if (window.location.pathname !== '/desk' && game.gameState.pause === false) {
    const myGame = { ...game };
    // console.log(myGame);
    myGame.gameState.pause = true;
    setGame(myGame);
  }
  if (game.gameState.timerId !== null) clearInterval(game.gameState.timerId);

  if (game.players.length > 0) localStorage.setItem('myGame', JSON.stringify(game));

  if (game.gameState.pause !== true
    && game.players.length > 0
    && game.gameState.endGame !== true
  ) {
    const myGame = { ...game };
    myGame.gameState.timerId = setInterval(() => { mainGameLoop(myGame, setGame); }, 1000);
  }
}

export default gameLoop;
