import IGame from '../../interface/IGame';
import addHistory from './subevent/addHistory';

function endMove(game: IGame) {
  const myGame = { ...game };
  const indexPl = myGame.players.findIndex((pl) => pl.name === myGame.gameState.playerTern);
  if (myGame.players[indexPl].countTakeCard === 0) {
    myGame.gameState.stateGame = 'tern';
    myGame.players[indexPl].buttons.finishMove = false;
    myGame.players[indexPl].buttons.comboEnabled = false;
    myGame.players[indexPl].buttons.dobleVisible = false;
    myGame.players[indexPl].buttons.tripleVisible = false;
    myGame.players[indexPl].buttons.fiveVisible = false;
    myGame.players[indexPl].countTakeCard = 1;
    myGame.gameState.message = `${myGame.players[indexPl].name} закончил ход.`;

    addHistory(myGame, 'endMove', [], true);

    const indPl = (indexPl + 1 === myGame.players.length ? 0 : indexPl + 1);
    myGame.gameState.playerTern = myGame.players[indPl].name;
  } else {
    myGame.players[indexPl].buttons.finishMove = false;
    const mes = `${myGame.players[indexPl].name} нужно взять ${myGame.players[indexPl].countTakeCard} карту/ы.`;
    myGame.gameState.message = mes;

    addHistory(myGame, 'endMove', [], false);
  }
}

export default endMove;
