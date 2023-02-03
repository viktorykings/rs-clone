import IGame from '../../interface/IGame';
import TFunctionState from '../../interface/TFunctionState';
// eslint-disable-next-line import/no-cycle
import waitPlayerTurn from './waitPlayerTurn';

function mainGameLoop(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
  setFunctionState: TFunctionState = '',
  timerLeft = 0,
): void {
  console.log('call');
  console.log(setFunctionState);
  console.log(game.gameState.functionState);
  if (game.gameState.timerId !== null) clearInterval(game.gameState.timerId);
  const myGame = { ...game };
  const funcState = setFunctionState === '' ? myGame.gameState.functionState : setFunctionState;

  if (funcState === 'waitPlayerTurn') {
    myGame.gameState.functionState = 'waitPlayerTurn';
    myGame.gameState.timeLeft = timerLeft === 0 ? 10 : timerLeft;
    myGame.gameState.timerId = setInterval(() => { waitPlayerTurn(myGame, setGame); }, 1000);
  }

  // setGame(myGame);
}

export default mainGameLoop;