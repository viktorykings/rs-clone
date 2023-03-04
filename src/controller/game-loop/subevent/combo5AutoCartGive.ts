import IGame from '../../../interface/IGame';
import combo5GiveCard from '../../game-event/subevent/combo5GiveCard';

function combo5AutoCardGive(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  const len = game.reboundDeck.length;
  const indCard = Math.floor(Math.random() * len);
  const myGame = combo5GiveCard(game, game.reboundDeck[indCard].id);
  setGame(myGame);
}

export default combo5AutoCardGive;
