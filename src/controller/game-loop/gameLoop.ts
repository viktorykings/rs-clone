import IGame from '../../interface/IGame';
import mainGameLoop from './mainGameLoop';

function gameLoop(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  console.log('call main loop');
  console.log(game.gameState.functionState);
  if (game.gameState.timerId !== null) clearInterval(game.gameState.timerId);

  if (game.players.length > 0) {
    const myGame = { ...game };
    myGame.gameState.timerId = setInterval(() => { mainGameLoop(myGame, setGame); }, 1000);
  }
}

export default gameLoop;
