import IGame from '../../interface/IGame';
import findIndexPlayerTern from '../game-event/subevent/findIndexPlayerTern';
import combo2AutoCardGive from './subevent/combo2AutoCartGive';
import combo2AutoPlayerChoise from './subevent/combo2AutoChoisePlayer';
import waitAnserTurn from './waitAnsweTern';
import waitEndMove from './waitEndMove';
import waitPlayerTurn from './waitPlayerTurn';

function mainGameLoop(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  console.log(game.gameState.timeLeft);
  const myGame = { ...game };
  const inPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  const funcState = myGame.gameState.functionState;
  if (myGame.gameState.timeLeft <= 1) {
    if (myGame.gameState.timerId !== null) {
      clearInterval(myGame.gameState.timerId);
      myGame.gameState.timerId = null;
    }

    switch (funcState) {
      case 'waitPlayerTurn':
      case 'waitTakeCardDeskDeck': waitPlayerTurn(myGame, setGame); return;
      case 'waitEndMove': waitEndMove(myGame, setGame); return;
      case 'waitAnserTurn': waitAnserTurn(myGame, setGame); return;
      case 'waitCombo2': combo2AutoPlayerChoise(myGame, setGame); return;
      case 'waitPlayerCombo2': combo2AutoCardGive(myGame, setGame); return;
      default: return;
    }
    /* if (funcState === 'waitPlayerTurn' || funcState === 'waitTakeCardDeskDeck') {
      waitPlayerTurn(myGame, setGame);
      return;
    }

    if (funcState === 'waitEndMove') {
      waitEndMove(myGame, setGame);
      return;
    }

    if (funcState === 'waitAnserTurn') {
      waitAnserTurn(myGame, setGame);
      return;
    } */
  }

  if (myGame.gameState.functionState === 'waitAnserTurn'
    && myGame.gameState.timeLeft === 4
    && myGame.players[inPl].isBot) {
    // вызов функции хода бота
    console.log('Bot maybe do move NOT');
  }

  if (myGame.gameState.functionState === 'waitCombo2'
    && myGame.gameState.timeLeft === 4
    && myGame.players[inPl].isBot) {
    // вызов функции бота выбора игрока для Космбо2
    console.log('Bot maybe choise player');
  }

  if (myGame.gameState.functionState === 'waitPlayerCombo2'
    && myGame.gameState.timeLeft === 4
    && myGame.players[inPl].isBot) {
    // вызов функции бота выбора игрока для Космбо2
    console.log('Bot maybe choise card');
  }

  if (myGame.gameState.functionState === 'waitPlayerTurn'
    && myGame.gameState.timeLeft === 7
    && myGame.players[inPl].isBot) {
    // вызов функции хода бота
    console.log('Bot do move');
  }

  if (myGame.gameState.timeLeft > 1) {
    myGame.gameState.timeLeft -= 1;
  }
}

export default mainGameLoop;
