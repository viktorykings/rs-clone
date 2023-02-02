import ICard from '../../../interface/ICard';
import IGame from '../../../interface/IGame';
import TGameEvent from '../../../interface/TGameEvent';

function addHistory(
  game: IGame,
  event: TGameEvent,
  card: ICard[],
  result: boolean,
) {
  game.gameState.history.unshift({
    playerName: game.gameState.playerTern,
    event,
    card,
    result,
  });
  console.log({
    playerName: game.gameState.playerTern,
    event,
    card,
    result,
  });
}

export default addHistory;
