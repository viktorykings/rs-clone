import langs from '../../../const/localization';
import IGame from '../../../interface/IGame';
import combo2GiveCard from './combo2GiveCard';

function combo2ChoisePlayer(game: IGame, playerName: string): IGame {
  const currLang = game.settings.lang;
  const base = langs[currLang].deskPage.modalTitles.combo;
  let myGame = { ...game };
  myGame.gameState.functionState = 'waitPlayerCombo2';
  myGame.gameState.choicePlayer = myGame.players.find((pl) => pl.name === playerName) ?? null;
  myGame.gameState.modalVisible = true;
  myGame.gameState.modalPlayers = [];
  if (myGame.gameState.choicePlayer !== null) {
    myGame.gameState.modalDeck = myGame.gameState.choicePlayer.deck;
  }
  myGame.gameState.modalTitle = `${base}`;
  myGame.gameState.message = '';
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;

  if (myGame.gameState.modalDeck.length <= 1) {
    myGame = combo2GiveCard(myGame, myGame.gameState.modalDeck.length === 1
      ? myGame.gameState.modalDeck[0].id
      : -1);
  }
  // myGame.gameState.playerWaitAnswer = myGame.gameState.playerTurn;
  // myGame.gameState.playerTurn = playerName;
  // myGame.gameState.message = `${playerName} думает какую отдать карту.`;
  return myGame;
}

export default combo2ChoisePlayer;
