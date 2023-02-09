import IGame from '../../../interface/IGame';
import endNot from '../../game-event/subevent/endNot';

function endWaitEndNot(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  const myGame = endNot(game);
  setGame(myGame);
}

export default endWaitEndNot;
