import IGame from '../../../interface/IGame';
import combo3GiveCard from '../../game-event/subevent/combo3GiveCard';
import choiceIndexArr from './subevent/choiceIndexArr';

function combo3AutoCardGive(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  // const lenDeck = game.gameState.modalDeck.length;
  const indCard = choiceIndexArr(game.gameState.modalDeck); // Math.floor(Math.random() * lenDeck);
  // const indPlGive = findIndexPlayerTern(game.players, game.gameState.playerTurn);
  /* const indCard = game.players[indPlGive].deck.findIndex(
    (cr) => cr.type === game.gameState.modalTypeCard
      || (cr.type >= 8 && game.gameState.modalTypeCard !== null
          && game.gameState.modalTypeCard >= 8),
  ); */
  const myGame = combo3GiveCard(game, game.gameState.modalDeck[indCard].id);
  setGame(myGame);
}

export default combo3AutoCardGive;
