import IGame from '../../../interface/IGame';
import combo3Choise from '../../game-event/subevent/combo3ChoisePlayer';
import choiceIndexArr from './subevent/choiceIndexArr';

function combo3AutoChoise(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  const indPl = choiceIndexArr(game.gameState.modalPlayers);
  const myGame = combo3Choise(
    game,
    game.gameState.modalPlayers[indPl].name,
  );
  setGame(myGame);
}

export default combo3AutoChoise;
