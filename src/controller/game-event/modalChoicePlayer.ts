import IGame from '../../interface/IGame';
import combo2ChoisePlayer from './subevent/combo2ChoisePlayer';
import combo3ChoisePlayer from './subevent/combo3ChoisePlayer';
import favorChoicePlayer from './subevent/favorChoicePlayer';
import findIndexPlayerTern from './subevent/findIndexPlayerTern';

function modalChoisePlayer(game: IGame, playerName: string): IGame {
  let myGame = { ...game };
  const inPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  if (myGame.players[inPl].isBot === false) {
    if (myGame.gameState.functionState === 'waitCombo2') myGame = combo2ChoisePlayer(myGame, playerName);
    if (myGame.gameState.functionState === 'waitCombo3') myGame = combo3ChoisePlayer(myGame, playerName);
    if (myGame.gameState.functionState === 'waitFavorPlayer') myGame = favorChoicePlayer(myGame, playerName);
  }
  return myGame;
}

export default modalChoisePlayer;
