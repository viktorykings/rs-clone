import IGame from '../../interface/IGame';
import endMove from '../game-event/endMove';
import findIndexPlayerTern from '../game-event/subevent/findIndexPlayerTern';
import takeCardDeskDeck from '../game-event/takeCardDeskDeck';
// eslint-disable-next-line import/no-cycle
// import mainGameLoop from './mainGameLoop';

function waitPlayerTurn(game: IGame, setGame: React.Dispatch<React.SetStateAction<IGame>>): void {
  console.log(game.gameState.timeLeft);

  let myGame = { ...game };

  if (myGame.gameState.timeLeft <= 1) {
    if (game.gameState.timerId !== null) clearInterval(game.gameState.timerId);
    setGame(myGame);
    const inPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
    if (myGame.players[inPl].countTakeCard > 0) {
      myGame = takeCardDeskDeck(myGame);
      console.log(myGame);
      // myGame.gameState.functionState = 'waitPlayerTurn';
      setGame(myGame);
      // mainGameLoop(myGame, setGame, 'waitPlayerTurn', 5);
      return;
    }

    if (myGame.players[inPl].countTakeCard === 0) {
      myGame = endMove(myGame);
      myGame.gameState.functionState = 'waitBotTurn';
      console.log(myGame);
      setGame(myGame);
      // mainGameLoop(myGame, setGame, 'waitBotTurn', 5);
    }
  }

  if (myGame.gameState.timeLeft > 1) {
    myGame.gameState.timeLeft -= 1;
  }
}

export default waitPlayerTurn;
