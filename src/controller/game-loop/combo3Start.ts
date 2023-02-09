import IGame from '../../interface/IGame';
import createCard from '../createCard';

function combo3Start(game: IGame): IGame {
  const myGame = { ...game };
  myGame.gameState.functionState = 'waitCombo3';
  const mPlayers = myGame.players.filter(
    (pl) => pl.name !== myGame.gameState.playerTurn && pl.active,
  );
  myGame.gameState.modalPlayers = mPlayers;
  myGame.gameState.modalTypeCard = null;
  myGame.gameState.modalDeck = [];
  for (let i = 1; i <= 8; i += 1) {
    myGame.gameState.modalDeck.push(createCard(i, i, 1));
  }
  myGame.gameState.modalTitle = 'Выберите игрока и название карты, которую отдаст Вам игрок, если у него она есть!';
  myGame.gameState.message = '';
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  return myGame;
}

export default combo3Start;
