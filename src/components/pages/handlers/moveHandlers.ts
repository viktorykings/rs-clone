import makeMove from '../../../controller/game-event/makeMove';
import endMoveNeutralize from '../../../controller/game-event/subevent/endMoveNeutralize';
import IGame from '../../../interface/IGame';
import IPlayer from '../../../interface/IPlayer';

export const handleMove = (
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

export const handleMoveNeut = (
  game: IGame,
  ind: number,
  setter: React.Dispatch<React.SetStateAction<IGame>>,
) => {
  endMoveNeutralize(game, ind);
  setter(game);
  console.log(game.deskDeck);
};
