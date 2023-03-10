import IGame from '../../interface/IGame';
import findNextActivePlayer from '../game-event/subevent/findNextActivePlayer';
import { playerWaitTurn, botWaitTurn, botWaitAnswer } from '../../const/gameVariable';
import findIndexPlayerTern from '../game-event/subevent/findIndexPlayerTern';
import moveAttack from '../game-event/subevent/moveAttack';
import moveSkip from '../game-event/subevent/moveSkip';
import moveFavor from '../game-event/subevent/moveFavor';
import moveMix from '../game-event/subevent/moveMix';
import moveLook from '../game-event/subevent/moveLook';
import combo2Start from './combo2Start';
import combo3Start from './combo3Start';
import combo5Start from './combo5Start';
import startStateDeck from '../statePlayerDeck/startStateDeck';
import langs from '../../const/localization';

function waitAnserTurn(game: IGame, setGame: React.Dispatch<React.SetStateAction<IGame>>): void {
  const currLang = game.settings.lang;
  const base = langs[currLang].deskPage.gameMsg.no;
  let myGame = { ...game };

  const indPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  myGame.players[indPl] = startStateDeck(myGame.players[indPl], 'waitAnserTurn', false);
  let nextPl = findNextActivePlayer(myGame);
  myGame.gameState.timeNeed = nextPl.isBot ? botWaitAnswer : playerWaitTurn;
  myGame.gameState.playerTurn = nextPl.name;
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  nextPl = startStateDeck(nextPl, 'waitAnserTurn', true);
  myGame.gameState.message = `${myGame.players[indPl].name} ${base[1]}`;

  if (nextPl.name === myGame.gameState.playerWaitAnswer[0].name) {
    myGame.gameState.playerWaitAnswer.splice(0, 1);
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
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
        if (myGame.gameState.stateGame === 'doubleCombo') myGame = combo2Start(myGame);
        if (myGame.gameState.stateGame === 'tripleCombo') myGame = combo3Start(myGame);
        if (myGame.gameState.stateGame === 'fiveCombo') myGame = combo5Start(myGame);
        break;
      default: break;
    }
    myGame.gameState.typeTern = null;
    // myGame.reboundDeck.push(...myGame.showCards.splice(0));
  }

  setGame(myGame);
}

export default waitAnserTurn;
