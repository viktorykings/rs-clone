import IGame from '../../interface/IGame';
import findIndexPlayerTern from '../game-event/subevent/findIndexPlayerTern';
import waitAnserTurn from './waitAnsweTern';
import waitEndMove from './waitEndMove';
import waitPlayerTurn from './waitPlayerTurn';

function mainGameLoop(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  console.log(game.gameState.timeLeft);
  const myGame = { ...game };
  const inPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  const funcState = myGame.gameState.functionState;
  if (myGame.gameState.timeLeft <= 1) {
    if (myGame.gameState.timerId !== null) {
      clearInterval(myGame.gameState.timerId);
      myGame.gameState.timerId = null;
    }

    if (funcState === 'waitPlayerTurn' || funcState === 'waitTakeCardDeskDeck') {
      waitPlayerTurn(myGame, setGame);
      return;
    }

    if (funcState === 'waitEndMove') {
      waitEndMove(myGame, setGame);
      return;
    }

    if (funcState === 'waitAnserTurn') {
      waitAnserTurn(myGame, setGame);
      return;
    }
  }

  if (myGame.gameState.functionState === 'waitAnserTurn'
    && myGame.gameState.timeLeft === 4
    && myGame.players[inPl].isBot) {
    // вызов функции хода бота
    console.log('Bot maybe do move NOT');
  }

  if (myGame.gameState.functionState === 'waitPlayerTurn'
    && myGame.gameState.timeLeft === 7
    && myGame.players[inPl].isBot) {
    // вызов функции хода бота
    console.log('Bot do move');
  }

  if (myGame.gameState.timeLeft > 1) {
    myGame.gameState.timeLeft -= 1;
  }
}

export default mainGameLoop;
