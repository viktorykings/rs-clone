import IGame from '../../interface/IGame';
import addHistory from './subevent/addHistory';
import findIndexPlayerTern from './subevent/findIndexPlayerTern';
import getPause from '../game-loop/subevent/getPause';

function takeCardDeskDeck(game: IGame): IGame {
  const myGame = { ...game };
  const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  if (myGame.players[iPl].countTakeCard > 0) {
    const card = myGame.deskDeck.splice(-1, 1);
    myGame.players[iPl].countTakeCard -= 1;
    if (card[0].type !== 0) {
      myGame.players[iPl].deck.push(...card);
      myGame.players[iPl].buttons.finishMove = myGame.players[iPl].countTakeCard === 0;
      myGame.gameState.message = `${myGame.players[iPl].name} взял 1 карту.`;
      myGame.gameState.functionState = myGame.players[iPl].countTakeCard > 0 ? 'waitTakeCardDeskDeck' : 'waitEndMove';
      myGame.gameState.timeNeed = getPause(
        myGame.players[iPl].isBot,
        myGame.gameState.functionState,
      );
      // myGame.gameState.timeNeed = waitEndMove;
      addHistory(myGame, 'takeCardDeskDeck', card, true);
    } else {
      myGame.gameState.stateGame = 'explosion';
      myGame.showCards.push(...card);
      myGame.gameState.message = `${myGame.players[iPl].name} вытянул 'Взрывного котенка'.`;
      // eslint-disable-next-line no-param-reassign
      myGame.players[iPl].deck.map((el) => { el.enabled = el.type === 1; return el; });
      const neutralize = myGame.players[iPl].deck.findIndex((cr) => cr.type === 1);
      myGame.gameState.functionState = 'waitExplosion';
      myGame.gameState.timeNeed = 3;
      if (neutralize !== -1) {
        myGame.gameState.functionState = 'waitNeutralize';
        myGame.gameState.timeNeed = getPause(
          myGame.players[iPl].isBot,
          myGame.gameState.functionState,
        );
      } else {
        console.log(myGame);
      }
      addHistory(myGame, 'takeCardDeskDeck', card, true);
    }
  } else {
    myGame.gameState.message = `${myGame.players[iPl].name} не нужно брать карты!`;

    addHistory(myGame, 'takeCardDeskDeck', [], false);
  }
  // console.log(myGame);
  return myGame;
}

export default takeCardDeskDeck;
