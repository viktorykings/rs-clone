import IGame from '../../../interface/IGame';
import getPause from '../../game-loop/subevent/getPause';
import favorGiveCard from './favorGiveCard';

function favorChoicePlayer(game: IGame, playerName: string): IGame {
  let myGame = { ...game };
  myGame.gameState.functionState = 'waitFavorPlayerCard';
  myGame.gameState.choicePlayer = myGame.players.find((pl) => pl.name === playerName) ?? null;
  const plTurn = myGame.players.find((pl) => pl.name === myGame.gameState.playerTurn) ?? null;
  myGame.gameState.modalVisible = false;
  myGame.gameState.modalPlayers = [];
  if (myGame.gameState.choicePlayer !== null && plTurn !== null) {
    // myGame.gameState.playerWaitAnswer = myGame.gameState.playerTurn;
    myGame.gameState.playerWaitAnswer.unshift(plTurn);
    myGame.gameState.playerTurn = myGame.gameState.choicePlayer.name;
    myGame.gameState.timeLeft = getPause(
      myGame.gameState.choicePlayer.isBot,
      myGame.gameState.functionState,
    );
  }
  myGame.gameState.modalTitle = '';
  myGame.gameState.message = `${myGame.gameState.playerTurn} думает какую отдать карту!`;

  if (myGame.gameState.choicePlayer !== null && myGame.gameState.choicePlayer.deck.length <= 1) {
    myGame = favorGiveCard(myGame, myGame.gameState.choicePlayer.deck.length === 1
      ? myGame.gameState.choicePlayer.deck[0].id
      : -1);
  }
  return myGame;
}

export default favorChoicePlayer;
