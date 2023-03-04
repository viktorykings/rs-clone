import IGame from '../../../interface/IGame';
import favorGiveCard from '../../game-event/subevent/favorGiveCard';
import findIndexPlayerTern from '../../game-event/subevent/findIndexPlayerTern';
import choiceIndexArr from './subevent/choiceIndexArr';

function favorAutoCardGive(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  const indPl = findIndexPlayerTern(game.players, game.gameState.playerTurn);
  const indCard = choiceIndexArr(game.players[indPl].deck);
  const myGame = favorGiveCard(game, game.players[indPl].deck[indCard].id);
  setGame(myGame);
}

export default favorAutoCardGive;
