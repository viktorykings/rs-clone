import IGame from '../../../interface/IGame';
import makeMove from '../../game-event/makeMove';
import findIndexPlayerTern from '../../game-event/subevent/findIndexPlayerTern';

function moveAutoNeutralize(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  const iPl = findIndexPlayerTern(game.players, game.gameState.playerTurn);
  const iCr = game.players[iPl].deck.findIndex((cr) => cr.type === 1);
  let myGame = { ...game };
  if (iCr !== -1) {
    const iGame = makeMove(game, game.players[iPl].deck[iCr].id);
    if (iGame !== null) myGame = iGame;
  }
  setGame(myGame);
}

export default moveAutoNeutralize;
