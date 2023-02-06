import IGame from '../../interface/IGame';
import findIndexPlayerTern from './subevent/findIndexPlayerTern';
import cardType from '../../const/cardType';
import findNextActivePlayer from './subevent/findNextActivePlayer';
import { botWaitAnswer, playerWaitTurn } from '../../const/gameVariable';

function makeMove(game: IGame, idCard: number): IGame {
  // console.log('make move');
  const myGame = { ...game };
  const inPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  if (myGame.gameState.stateGame === 'tern'
    || myGame.gameState.stateGame === 'doubleCombo'
    || myGame.gameState.stateGame === 'tripleCombo'
    || myGame.gameState.stateGame === 'fiveCombo'
  ) {
    const indCard = myGame.players[inPl].deck.findIndex((cr) => cr.id === idCard);
    if (indCard !== -1) {
      const typeTern = myGame.players[inPl].deck[indCard].type;
      if (typeTern > 2 && typeTern <= 7) {
        const plName = myGame.players[inPl].name;
        myGame.gameState.typeTern = typeTern;
        myGame.showCards = myGame.players[inPl].deck.splice(indCard, 1);
        myGame.gameState.message = `${plName} походил картой ${cardType[typeTern].name}`;
        myGame.gameState.functionState = 'waitAnserTurn';
        myGame.gameState.playerWaitAnswer = plName;
        const nextPl = findNextActivePlayer(myGame);
        myGame.gameState.playerTurn = nextPl.name;
        myGame.gameState.timeNeed = nextPl.isBot ? botWaitAnswer : playerWaitTurn;
      }
    }
  }
  /* if (myGame.gameState.stateGame === 'endTern') {
    myGame = endMove(myGame);
  } */
  // console.log(myGame);
  return myGame;
}

export default makeMove;
