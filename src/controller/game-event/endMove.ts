import IGame from '../../interface/IGame';
import addHistory from './subevent/addHistory';
import findIndexPlayerTern from './subevent/findIndexPlayerTern';
import findNextActivePlayer from './subevent/findNextActivePlayer';
import getPause from '../game-loop/subevent/getPause';
import clearNameCombo from '../statePlayerDeck/clearNameCombo';
import startStateDeck from '../statePlayerDeck/startStateDeck';
import langs from '../../const/localization';

function endMove(game: IGame): IGame {
  const myGame = { ...game };
  const indexPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  const currLang = game.settings.lang;
  const base = langs[currLang].deskPage.gameMsg.endMove;
  if (myGame.players[indexPl].countTakeCard === 0 && myGame.gameState.functionState === 'waitEndMove') {
    // все что показываем в сброс
    myGame.reboundDeck.push(...myGame.showCards.splice(0));
    myGame.gameState.stateGame = 'tern';
    myGame.players[indexPl] = startStateDeck(
      myGame.players[indexPl],
      'waitEndMove',
      false,
    );
    /* myGame.players[indexPl].buttons.finishMove = false;
    myGame.players[indexPl].buttons.comboEnabled = false;
    myGame.players[indexPl].buttons.dobleVisible = false;
    myGame.players[indexPl].buttons.tripleVisible = false;
    myGame.players[indexPl].buttons.fiveVisible = false; */
    myGame.players[indexPl].countTakeCard = 1;
    myGame.gameState.message = `${myGame.players[indexPl].name} ${base[0]}`;
    clearNameCombo(myGame.players[indexPl]);
    addHistory(myGame, 'endMove', [], true);

    myGame.gameState.playerTurn = findNextActivePlayer(myGame).name;
    // console.log('next player', myGame.gameState.playerTurn);
    const nIndPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
    myGame.gameState.functionState = 'waitPlayerTurn';
    myGame.players[nIndPl] = startStateDeck(
      myGame.players[nIndPl],
      myGame.gameState.functionState,
      myGame.players[nIndPl].name === myGame.gameState.playerTurn,
    );
    myGame.gameState.timeNeed = getPause(
      myGame.players[nIndPl].isBot,
      myGame.gameState.functionState,
    );
    myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  }/* else {
    myGame.players[indexPl].buttons.finishMove = false;
    // const mes = `${myGame.players[indexPl].name}
    // нужно взять ${myGame.players[indexPl].countTakeCard} карту/ы.`;
    // const mes = `${myGame.players[indexPl].name} ${base[1]}
     ${myGame.players[indexPl].countTakeCard} ${base[2]}`;
    myGame.gameState.message = mes;

    addHistory(myGame, 'endMove', [], false);
  } */
  if (myGame.gameState.functionState === 'waitAnserTurn'
    || myGame.gameState.functionState === 'waitPlayerLook'
    || myGame.gameState.functionState === 'waitNotToNot') {
    myGame.gameState.timeLeft = 1;
    myGame.players[indexPl] = startStateDeck(
      myGame.players[indexPl],
      'waitAnserTurn',
      false,
    );
  }

  return myGame;
}

export default endMove;
