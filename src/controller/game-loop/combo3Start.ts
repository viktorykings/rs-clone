import langs from '../../const/localization';
import IGame from '../../interface/IGame';
import combo3ChoisePlayer from '../game-event/subevent/combo3ChoisePlayer';
import findIndexPlayerTern from '../game-event/subevent/findIndexPlayerTern';

function combo3Start(game: IGame): IGame {
  const currLang = game.settings.lang;
  const base = langs[currLang].deskPage;
  let myGame = { ...game };
  myGame.gameState.functionState = 'waitCombo3';
  const mPlayers = myGame.players.filter(
    (pl) => pl.name !== myGame.gameState.playerTurn && pl.active,
  );
  const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  myGame.gameState.modalVisible = !myGame.players[iPl].isBot;

  // myGame.gameState.modalVisible = true;
  myGame.gameState.modalCardVisible = true;
  myGame.gameState.modalPlayers = mPlayers;
  myGame.gameState.modalTypeCard = null;
  myGame.gameState.modalDeck = [];
  myGame.gameState.modalTitle = `${base.modalTitles.comboStart[1]}`;
  myGame.gameState.message = `${myGame.gameState.playerTurn} ${base.gameMsg.combos[5]}`;
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  if (myGame.gameState.modalPlayers.length === 1) {
    myGame = combo3ChoisePlayer(myGame, mPlayers[0].name);
  }
  return myGame;
}

export default combo3Start;
