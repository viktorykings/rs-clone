import IGame from '../../interface/IGame';
import combo2ChoisePlayer from './subevent/combo2ChoisePlayer';
import combo3ChoisePlayer from './subevent/combo3ChoisePlayer';

function modalChoisePlayer(game: IGame, playerName: string): IGame {
  let myGame = { ...game };
  if (myGame.gameState.functionState === 'waitCombo2') myGame = combo2ChoisePlayer(myGame, playerName);
  if (myGame.gameState.functionState === 'waitCombo3') myGame = combo3ChoisePlayer(myGame, playerName);
  return myGame;
}

export default modalChoisePlayer;