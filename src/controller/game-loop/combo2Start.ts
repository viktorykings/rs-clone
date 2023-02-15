import langs from '../../const/localization';
import IGame from '../../interface/IGame';
import combo2ChoisePlayer from '../game-event/subevent/combo2ChoisePlayer';

function combo2Start(game: IGame): IGame {
  const currLang = game.settings.lang;
  const base = langs[currLang].deskPage.modalTitles.comboStart;
  let myGame = { ...game };
  myGame.gameState.functionState = 'waitCombo2';

  const mPlayers = myGame.players.filter(
    (pl) => pl.name !== myGame.gameState.playerTurn && pl.active,
  );
  myGame.gameState.modalVisible = true;
  myGame.gameState.modalCardVisible = false;
  myGame.gameState.choicePlayer = null;
  myGame.gameState.modalPlayers = mPlayers;
  myGame.gameState.modalDeck = [];
  myGame.gameState.modalTitle = `${base[0]}`;
  myGame.gameState.message = `${myGame.gameState.playerTurn} думает кого выбрать.`;
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  if (mPlayers.length === 1) {
    [myGame.gameState.choicePlayer] = mPlayers;
    myGame = combo2ChoisePlayer(game, myGame.gameState.choicePlayer.name);
  }

  return myGame;
}

export default combo2Start;
