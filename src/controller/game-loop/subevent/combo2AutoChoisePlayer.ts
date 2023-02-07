import IGame from '../../../interface/IGame';
import combo2ChoisePlayer from '../../game-event/subevent/combo2ChoisePlayer';

function combo2AutoPlayerChoise(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  const len = game.gameState.modalPlayers.length;
  const indPl = Math.floor(Math.random() * len);
  const myGame = combo2ChoisePlayer(game, game.gameState.modalPlayers[indPl].name);
  setGame(myGame);
}

export default combo2AutoPlayerChoise;
