import IGame from '../../interface/IGame';
import addHistory from './subevent/addHistory';
import findNextActivePlayer from './subevent/findNextActivePlayer';

function endMove(game: IGame): IGame {
  const myGame = { ...game };
  const indexPl = myGame.players.findIndex((pl) => pl.name === myGame.gameState.playerTern);
  if (myGame.players[indexPl].countTakeCard === 0) {
    // все что показываем в сброс
    if (myGame.showCards.length !== 0) myGame.reboundDeck.push(...myGame.showCards.splice(0));
    myGame.gameState.stateGame = 'tern';
    myGame.players[indexPl].buttons.finishMove = false;
    myGame.players[indexPl].buttons.comboEnabled = false;
    myGame.players[indexPl].buttons.dobleVisible = false;
    myGame.players[indexPl].buttons.tripleVisible = false;
    myGame.players[indexPl].buttons.fiveVisible = false;
    myGame.players[indexPl].countTakeCard = 1;
    myGame.gameState.message = `${myGame.players[indexPl].name} закончил ход.`;

    addHistory(myGame, 'endMove', [], true);

    myGame.gameState.playerTern = findNextActivePlayer(myGame).name;
  } else {
    myGame.players[indexPl].buttons.finishMove = false;
    const mes = `${myGame.players[indexPl].name} нужно взять ${myGame.players[indexPl].countTakeCard} карту/ы.`;
    myGame.gameState.message = mes;

    addHistory(myGame, 'endMove', [], false);
  }

  return myGame;
}

export default endMove;
