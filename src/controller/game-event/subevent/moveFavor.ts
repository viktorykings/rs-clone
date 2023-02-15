import langs from '../../../const/localization';
import IGame from '../../../interface/IGame';
import startStateDeck from '../../statePlayerDeck/startStateDeck';
import favorChoicePlayer from './favorChoicePlayer';
import findIndexPlayerTern from './findIndexPlayerTern';

function moveFavor(game: IGame): IGame {
  const currLang = game.settings.lang;
  const base = langs[currLang].deskPage.modalTitles.favour;
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
  myGame.gameState.modalTitle = `${base}`;
  myGame.gameState.message = `${myGame.gameState.playerTurn} думает кого выбрать.`;
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  const inPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  myGame.players[inPl] = startStateDeck(myGame.players[inPl], 'waitEndMove', false);
  if (mPlayers.length === 1) {
    // [myGame.gameState.choicePlayer] = mPlayers;
    myGame = favorChoicePlayer(game, mPlayers[0].name);
  }

  return myGame;
}

export default moveFavor;
