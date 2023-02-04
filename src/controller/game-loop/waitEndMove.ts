import IGame from '../../interface/IGame';
import endMove from '../game-event/endMove';
import findIndexPlayerTern from '../game-event/subevent/findIndexPlayerTern';

function waitEndMove(game: IGame, setGame: React.Dispatch<React.SetStateAction<IGame>>): void {
  const myGame = { ...game };
  const inPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);

  if (myGame.players[inPl].countTakeCard === 0) setGame(endMove(myGame));
}

export default waitEndMove;
