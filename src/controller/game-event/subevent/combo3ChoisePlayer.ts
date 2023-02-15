import langs from '../../../const/localization';
import IGame from '../../../interface/IGame';
import createCard from '../../createCard';

function combo3ChoisePlayer(game: IGame, playerName: string): IGame {
  const currLang = game.settings.lang;
  const base = langs[currLang].deskPage.modalTitles.combo;
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
  myGame.gameState.modalTitle = `${base}`;
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  return myGame;
}

export default combo3ChoisePlayer;
