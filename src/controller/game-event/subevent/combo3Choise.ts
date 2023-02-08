import cardType from '../../../const/cardType';
import IGame from '../../../interface/IGame';

function combo3Choise(game: IGame, playerName: string, typeCard: number): IGame {
  const myGame = { ...game };
  myGame.gameState.functionState = 'waitPlayerCombo3';
  myGame.gameState.playerWaitAnswer = myGame.gameState.playerTurn;
  myGame.gameState.playerTurn = playerName;
  myGame.gameState.modalTypeCard = typeCard;
  myGame.gameState.message = `${myGame.gameState.playerWaitAnswer} хочет получить карту ${cardType[typeCard].name} у ${playerName}.`;
  return myGame;
}

export default combo3Choise;
