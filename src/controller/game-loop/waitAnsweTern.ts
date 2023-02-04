import IGame from '../../interface/IGame';
import findNextActivePlayer from '../game-event/subevent/findNextActivePlayer';
import { playerWaitTurn, botWaitTurn, botWaitAnswer } from '../../const/gameVariable';
import findIndexPlayerTern from '../game-event/subevent/findIndexPlayerTern';
import moveAttack from '../game-event/subevent/moveAttack';
import moveSkip from '../game-event/subevent/moveSkip';
import moveFavor from '../game-event/subevent/moveFavor';
import moveMix from '../game-event/subevent/moveMix';
import moveLook from '../game-event/subevent/moveLook';

function waitAnserTurn(game: IGame, setGame: React.Dispatch<React.SetStateAction<IGame>>): void {
  console.log(game.gameState.timeLeft);

  let myGame = { ...game };
  const inPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);

  if (myGame.gameState.timeLeft <= 1) {
    if (myGame.gameState.timerId !== null) {
      clearInterval(myGame.gameState.timerId);
      myGame.gameState.timerId = null;
    }

    const nextPl = findNextActivePlayer(myGame);
    myGame.gameState.timeNeed = nextPl.isBot ? botWaitAnswer : playerWaitTurn;
    myGame.gameState.playerTurn = nextPl.name;

    if (nextPl.name === myGame.gameState.playerWaitAnswer) {
      myGame.gameState.playerWaitAnswer = '';
      myGame.gameState.functionState = 'waitPlayerTurn';
      myGame.gameState.timeNeed = nextPl.isBot ? botWaitTurn : playerWaitTurn;

      // никто не кинул Нет, выполняем действие карты
      const indNowPl = findIndexPlayerTern(myGame.players, nextPl.name);
      switch (myGame.gameState.typeTern) {
        case 3: myGame = moveAttack(game, indNowPl); break;
        case 4: myGame = moveSkip(game); break;
        case 5: myGame = moveFavor(game); break;
        case 6: myGame = moveMix(game); break;
        case 7: myGame = moveLook(game); break;
        default: break;
      }
      myGame.gameState.typeTern = null;
    }
    setGame(myGame);
  }

  if (myGame.gameState.functionState === 'waitAnserTurn'
    && myGame.gameState.timeLeft === 4
    && myGame.players[inPl].isBot) {
    // вызов функции хода бота
    console.log('Bot maybe do move NOT');
  }

  if (myGame.gameState.timeLeft > 1) {
    myGame.gameState.timeLeft -= 1;
  }
}

export default waitAnserTurn;
