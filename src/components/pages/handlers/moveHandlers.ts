import makeMove from '../../../controller/game-event/makeMove';
import IGame from '../../../interface/IGame';
import IPlayer from '../../../interface/IPlayer';

const handleMove = (
  game: IGame,
  cardId: number,
  setter: React.Dispatch<React.SetStateAction<IGame>>,
  setterPlayers: React.Dispatch<React.SetStateAction<IPlayer[]>>,
  setWidth: React.Dispatch<React.SetStateAction<number>>,
) => {
  const myGame = makeMove(game, cardId);
  if (myGame !== null) setter(myGame);
  setterPlayers([...game.players]);
  setWidth(0);
};

export default handleMove;
