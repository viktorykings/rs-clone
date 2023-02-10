import IGame from '../../interface/IGame';
import combo2GiveCard from './subevent/combo2GiveCard';
import combo3GiveCard from './subevent/combo3GiveCard';

function modalChoiseCard(game: IGame, idCard: number): IGame {
  let myGame = { ...game };
  if (myGame.gameState.functionState === 'waitPlayerCombo2') myGame = combo2GiveCard(myGame, idCard);
  if (myGame.gameState.functionState === 'waitPlayerCombo3') myGame = combo3GiveCard(myGame, idCard);
  return myGame;
}

export default modalChoiseCard;
