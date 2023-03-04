import IGame from '../../../interface/IGame';
import endNotToNot from '../../game-event/subevent/endNotToNot';

function endWaitEndNotToNot(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  const myGame = endNotToNot(game);
  setGame(myGame);
}

export default endWaitEndNotToNot;
