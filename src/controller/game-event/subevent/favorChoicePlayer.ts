import langs from '../../../const/localization';
import IGame from '../../../interface/IGame';
import getPause from '../../game-loop/subevent/getPause';
import startStateDeck from '../../statePlayerDeck/startStateDeck';
import favorGiveCard from './favorGiveCard';
import findIndexPlayerTern from './findIndexPlayerTern';

function favorChoicePlayer(game: IGame, playerName: string): IGame {
  const currLang = game.settings.lang;
  const base = langs[currLang].deskPage.gameMsg.favour;
  let myGame = { ...game };
  myGame.gameState.functionState = 'waitFavorPlayerCard';
  myGame.gameState.choicePlayer = myGame.players.find((pl) => pl.name === playerName) ?? null;
  const plTurn = myGame.players.find((pl) => pl.name === myGame.gameState.playerTurn) ?? null;
  myGame.gameState.modalVisible = false;
  myGame.gameState.modalPlayers = [];
  if (myGame.gameState.choicePlayer !== null && plTurn !== null) {
    // myGame.gameState.playerWaitAnswer = myGame.gameState.playerTurn;
    const inPl = findIndexPlayerTern(myGame.players, plTurn.name);
    myGame.players[inPl] = startStateDeck(myGame.players[inPl], 'waitEndMove', false);
    myGame.gameState.playerWaitAnswer.unshift(myGame.players[inPl]);
    myGame.gameState.playerTurn = myGame.gameState.choicePlayer.name;
    myGame.gameState.timeLeft = getPause(
      myGame.gameState.choicePlayer.isBot,
      myGame.gameState.functionState,
    );
  }
  myGame.gameState.modalTitle = '';
  myGame.gameState.message = `${myGame.gameState.playerTurn} ${base}`;

  if (myGame.gameState.choicePlayer !== null && myGame.gameState.choicePlayer.deck.length <= 1) {
    myGame = favorGiveCard(myGame, myGame.gameState.choicePlayer.deck.length === 1
      ? myGame.gameState.choicePlayer.deck[0].id
      : -1);
  }
  return myGame;
}

export default favorChoicePlayer;
