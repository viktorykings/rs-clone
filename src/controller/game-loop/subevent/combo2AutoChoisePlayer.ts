import IGame from '../../../interface/IGame';
import combo2ChoisePlayer from '../../game-event/subevent/combo2ChoisePlayer';
import choiceIndexArr from './subevent/choiceIndexArr';

function combo2AutoPlayerChoise(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  const indPl = choiceIndexArr(game.gameState.modalPlayers);
  const myGame = combo2ChoisePlayer(game, game.gameState.modalPlayers[indPl].name);
  setGame(myGame);
}

export default combo2AutoPlayerChoise;
