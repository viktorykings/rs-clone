import IGame from '../../../interface/IGame';
import combo2GiveCard from '../../game-event/subevent/combo2GiveCard';
import findIndexPlayerTern from '../../game-event/subevent/findIndexPlayerTern';

function combo2AutoCardGive(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  const indPl = findIndexPlayerTern(game.players, game.gameState.playerTurn);
  const len = game.players[indPl].deck.length;
  const indCard = Math.floor(Math.random() * len);
  const myGame = combo2GiveCard(game, game.players[indPl].deck[indCard].id);
  setGame(myGame);
}

export default combo2AutoCardGive;
