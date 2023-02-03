import IGame from '../../interface/IGame';
import endMove from '../game-event/endMove';
import findIndexPlayerTern from '../game-event/subevent/findIndexPlayerTern';
import takeCardDeskDeck from '../game-event/takeCardDeskDeck';

function waitPlayerTurn(game: IGame, setGame: React.Dispatch<React.SetStateAction<IGame>>): void {
  console.log(game.gameState.timeLeft);

  let myGame = { ...game };

  if (myGame.gameState.timeLeft <= 1) {
    if (game.gameState.timerId !== null) clearInterval(game.gameState.timerId);
    const inPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
    if (myGame.players[inPl].countTakeCard > 0) {
      myGame = takeCardDeskDeck(myGame);
      setGame(myGame);
      return;
    }

    if (myGame.players[inPl].countTakeCard === 0) {
      myGame = endMove(myGame);
      setGame(myGame);
      return;
    }
  }

  if (myGame.gameState.timeLeft === 7 && myGame.gameState.functionState === 'waitBotTurn') {
    // вызов функции хода бота
    console.log('Bot do move');
  }

  if (myGame.gameState.timeLeft > 1) {
    myGame.gameState.timeLeft -= 1;
  }
}

export default waitPlayerTurn;
