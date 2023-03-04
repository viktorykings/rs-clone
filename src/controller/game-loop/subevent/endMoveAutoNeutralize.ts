import IGame from '../../../interface/IGame';
import endMoveNeutralize from '../../game-event/subevent/endMoveNeutralize';

function endMoveAutoNeutralize(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  const myGame = endMoveNeutralize(game, 0);
  setGame(myGame);
}

export default endMoveAutoNeutralize;
