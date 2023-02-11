import IGame from '../../../interface/IGame';
import favorChoicePlayer from '../../game-event/subevent/favorChoicePlayer';
import choiceIndexArr from './subevent/choiceIndexArr';

function favorAutoPlayerChoice(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  const indPl = choiceIndexArr(game.gameState.modalPlayers);
  const myGame = favorChoicePlayer(
    game,
    game.gameState.modalPlayers[indPl].name,
  );
  setGame(myGame);
}

export default favorAutoPlayerChoice;
