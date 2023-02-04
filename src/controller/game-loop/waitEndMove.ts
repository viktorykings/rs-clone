import IGame from '../../interface/IGame';
import endMove from '../game-event/endMove';
import findIndexPlayerTern from '../game-event/subevent/findIndexPlayerTern';

function waitEndMove(game: IGame, setGame: React.Dispatch<React.SetStateAction<IGame>>): void {
  console.log(game.gameState.timeLeft);

  const myGame = { ...game };

  if (myGame.gameState.timeLeft <= 1) {
    if (myGame.gameState.timerId !== null) {
      clearInterval(myGame.gameState.timerId);
      myGame.gameState.timerId = null;
    }

    const inPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);

    if (myGame.players[inPl].countTakeCard === 0) {
      setGame(endMove(myGame));
      return;
    }
  }

  if (myGame.gameState.timeLeft > 1) {
    myGame.gameState.timeLeft -= 1;
  }
}

export default waitEndMove;
