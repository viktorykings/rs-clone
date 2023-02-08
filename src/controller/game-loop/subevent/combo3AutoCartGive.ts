import IGame from '../../../interface/IGame';
import combo3GiveCard from '../../game-event/subevent/combo3GiveCard';
import findIndexPlayerTern from '../../game-event/subevent/findIndexPlayerTern';

function combo3AutoCardGive(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  const indPlGive = findIndexPlayerTern(game.players, game.gameState.playerTurn);
  const indCard = game.players[indPlGive].deck.findIndex(
    (cr) => cr.type === game.gameState.modalTypeCard
      || (cr.type >= 8 && game.gameState.modalTypeCard !== null
          && game.gameState.modalTypeCard >= 8),
  );
  const myGame = combo3GiveCard(game, game.players[indPlGive].deck[indCard].id);
  setGame(myGame);
}

export default combo3AutoCardGive;
