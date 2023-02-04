import IGame from '../../interface/IGame';
import TFunctionState from '../../interface/TFunctionState';
import waitEndMove from './waitEndMove';
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

  myGame.gameState.timeLeft = myGame.gameState.timeNeed;

  if (myGame.gameState.timeNeed < 1) {
    myGame.gameState.timeLeft = timerLeft === 0 ? 30 : timerLeft;
  }

  if (funcState === 'waitPlayerTurn' || funcState === 'waitTakeCardDeskDeck') {
    // myGame.gameState.functionState = funcState;
    myGame.gameState.timerId = setInterval(() => { waitPlayerTurn(myGame, setGame); }, 1000);
  }

  if (funcState === 'waitEndMove') {
    myGame.gameState.timerId = setInterval(() => { waitEndMove(myGame, setGame); }, 1000);
  }
}

export default mainGameLoop;
