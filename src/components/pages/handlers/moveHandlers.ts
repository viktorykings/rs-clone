import gamePause from '../../../controller/game-event/gamePause';
import makeMove from '../../../controller/game-event/makeMove';
import onTakeCard from '../../../controller/game-event/onTakeCard';
import endMoveNeutralize from '../../../controller/game-event/subevent/endMoveNeutralize';
// import takeCardDeskDeck from '../../../controller/game-event/takeCardDeskDeck';
import IGame from '../../../interface/IGame';
import IPlayer from '../../../interface/IPlayer';

export const handleMove = (
  game: IGame,
  cardId: number,
  setter: React.Dispatch<React.SetStateAction<IGame>>,
  setterPlayers: React.Dispatch<React.SetStateAction<IPlayer[]>>,
  setTranslate: React.Dispatch<React.SetStateAction<number>>,
) => {
  const myGame = makeMove(game, cardId);
  if (myGame !== null) setter(myGame);
  setterPlayers([...game.players]);
  setTranslate(0);
};

export const handleMoveNeut = (
  game: IGame,
  ind: number,
  setter: React.Dispatch<React.SetStateAction<IGame>>,
) => {
  endMoveNeutralize(game, ind);
  setter(game);
  // console.log(game.deskDeck);
};

export const handleTakeDeskCard = (
  game: IGame,
  setter: React.Dispatch<React.SetStateAction<IGame>>,
) => {
  // takeCardDeskDeck(game);
  onTakeCard(game);
  setter(game);
};
export const pauseGame = (
  game: IGame,
  isPause: boolean,
  setter: React.Dispatch<React.SetStateAction<IGame>>,
) => {
  setter(gamePause(game, isPause));
  console.log(game.gameState.pause);
};
