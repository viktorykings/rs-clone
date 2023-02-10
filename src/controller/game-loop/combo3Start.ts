import IGame from '../../interface/IGame';
import combo3ChoisePlayer from '../game-event/subevent/combo3ChoisePlayer';

function combo3Start(game: IGame): IGame {
  let myGame = { ...game };
  myGame.gameState.functionState = 'waitCombo3';
  const mPlayers = myGame.players.filter(
    (pl) => pl.name !== myGame.gameState.playerTurn && pl.active,
  );
  myGame.gameState.modalVisible = true;
  myGame.gameState.modalPlayers = mPlayers;
  myGame.gameState.modalTypeCard = null;
  myGame.gameState.modalDeck = [];
  myGame.gameState.modalTitle = 'Выберите игрока который отдаст Вам карту, если у него она есть!';
  myGame.gameState.message = '';
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  if (myGame.gameState.modalPlayers.length === 1) {
    myGame = combo3ChoisePlayer(myGame, mPlayers[0].name);
  }
  return myGame;
}

export default combo3Start;
