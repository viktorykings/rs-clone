import IGame from '../../../interface/IGame';
import favorChoicePlayer from './favorChoicePlayer';

function moveFavor(game: IGame): IGame {
  let myGame = { ...game };
  myGame.gameState.functionState = 'waitFavorPlayer';

  const mPlayers = myGame.players.filter(
    (pl) => pl.name !== myGame.gameState.playerTurn && pl.active,
  );
  myGame.gameState.modalVisible = true;
  myGame.gameState.modalCardVisible = false;
  myGame.gameState.choicePlayer = null;
  myGame.gameState.modalPlayers = mPlayers;
  myGame.gameState.modalDeck = [];
  myGame.gameState.modalTitle = 'Выберите игрока, который отдаст Вам карту!';
  myGame.gameState.message = `${myGame.gameState.playerTurn} думает кого выбрать.`;
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  if (mPlayers.length === 1) {
    // [myGame.gameState.choicePlayer] = mPlayers;
    myGame = favorChoicePlayer(game, mPlayers[0].name);
  }

  return myGame;
}

export default moveFavor;
