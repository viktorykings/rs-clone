import IGame from '../../../interface/IGame';
import endMoveLook from '../../game-event/subevent/endMoveLook';

function endAutoEndLook(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  const myGame = endMoveLook(game);
  setGame(myGame);
}

export default endAutoEndLook;
