import IGame from '../../../interface/IGame';
import createCard from '../../createCard';

function combo3ChoisePlayer(game: IGame, playerName: string): IGame {
  const myGame = { ...game };
  myGame.gameState.functionState = 'waitPlayerCombo3';
  myGame.gameState.choicePlayer = myGame.players.find((pl) => pl.name === playerName) ?? null;
  myGame.gameState.modalVisible = true;
  myGame.gameState.modalCardVisible = true;
  myGame.gameState.modalPlayers = [];
  myGame.gameState.modalDeck = [];
  for (let i = 1; i <= 8; i += 1) {
    myGame.gameState.modalDeck.push(createCard(i, i, 1));
  }
  myGame.gameState.modalTitle = 'Выберите карту!';
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  return myGame;
}

export default combo3ChoisePlayer;
