import IGame from '../../interface/IGame';
import findNextActivePlayer from '../game-event/subevent/findNextActivePlayer';
import { playerWaitTurn, botWaitAnswer } from '../../const/gameVariable';
import findIndexPlayerTern from '../game-event/subevent/findIndexPlayerTern';
import startStateDeck from '../statePlayerDeck/startStateDeck';
import endNot from '../game-event/subevent/endNot';

function waitNotToNot(game: IGame, setGame: React.Dispatch<React.SetStateAction<IGame>>): void {
  let myGame = { ...game };

  const indPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  myGame.players[indPl] = startStateDeck(myGame.players[indPl], 'waitAnserTurn', false);
  let nextPl = findNextActivePlayer(myGame);
  myGame.gameState.timeNeed = nextPl.isBot ? botWaitAnswer : playerWaitTurn;
  myGame.gameState.playerTurn = nextPl.name;
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  nextPl = startStateDeck(nextPl, 'waitAnserTurn', true);
  myGame.gameState.message = `${myGame.players[indPl].name} думает походить ли 'Нет' на 'Нет'.`;

  if (nextPl.name === myGame.gameState.playerWaitAnswer[0].name) {
    myGame.gameState.playerTurn = myGame.gameState.playerWaitAnswer[1].name;
    myGame.gameState.playerWaitAnswer.splice(0, 2);
    myGame.gameState.functionState = 'waitPlayerTurn';
    myGame.gameState.typeTern = null;
    myGame = endNot(myGame);
  }

  setGame(myGame);
}

export default waitNotToNot;
