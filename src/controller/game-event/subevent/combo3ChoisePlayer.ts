import langs from '../../../const/localization';
import IGame from '../../../interface/IGame';
import createCard from '../../createCard';
import findIndexPlayerTern from './findIndexPlayerTern';

function combo3ChoisePlayer(game: IGame, playerName: string): IGame {
  const currLang = game.settings.lang;
  const base = langs[currLang].deskPage;
  const myGame = { ...game };
  myGame.gameState.functionState = 'waitPlayerCombo3';
  myGame.gameState.choicePlayer = myGame.players.find((pl) => pl.name === playerName) ?? null;
  const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  myGame.gameState.modalVisible = !myGame.players[iPl].isBot;

  // myGame.gameState.modalVisible = true;
  myGame.gameState.modalCardVisible = true;
  myGame.gameState.modalPlayers = [];
  myGame.gameState.modalDeck = [];
  for (let i = 1; i <= 8; i += 1) {
    myGame.gameState.modalDeck.push(createCard(i, i, 1, currLang));
  }
  myGame.gameState.modalTitle = `${base.modalTitles.combo}`;
  myGame.gameState.message = `${myGame.gameState.playerTurn} ${base.gameMsg.combos[4]} ${playerName}.`;
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  return myGame;
}

export default combo3ChoisePlayer;
