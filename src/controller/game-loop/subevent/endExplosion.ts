import IGame from '../../../interface/IGame';
import explosion from '../../game-event/subevent/explosion';

function endExplosion(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  const myGame = explosion(game);
  setGame(myGame);
}

export default endExplosion;
