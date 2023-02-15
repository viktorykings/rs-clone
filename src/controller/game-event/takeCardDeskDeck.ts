import IGame from '../../interface/IGame';
import addHistory from './subevent/addHistory';
import findIndexPlayerTern from './subevent/findIndexPlayerTern';
import getPause from '../game-loop/subevent/getPause';
import startStateDeck from '../statePlayerDeck/startStateDeck';

function takeCardDeskDeck(game: IGame): IGame {
  const myGame = { ...game };
  const iPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  if (myGame.players[iPl].countTakeCard > 0) {
    const card = myGame.deskDeck.splice(0, 1);
    myGame.players[iPl].countTakeCard -= 1;
    for (let i = 0; i < myGame.players.length; i += 1) {
      if (myGame.players[i].visibleCards.length > 0) {
        myGame.players[i].visibleCards = myGame.players[i].visibleCards
          .reduce((res: number[], el) => {
            if (el - 1 >= 0) res.push(el - 1);
            return res;
          }, []);
      }
    }
    if (card[0].type !== 0) {
      myGame.players[iPl].deck.push(...card);
      myGame.players[iPl].buttons.finishMove = myGame.players[iPl].countTakeCard === 0;
      myGame.gameState.message = `${myGame.players[iPl].name} взял 1 карту.`;
      if (myGame.gameState.functionState === 'waitTakeCardDeskDeck') {
        myGame.gameState.message = `${myGame.players[iPl].name} взял еще 1 карту.`;
      }
      myGame.gameState.functionState = myGame.players[iPl].countTakeCard > 0 ? 'waitTakeCardDeskDeck' : 'waitEndMove';
      myGame.players[iPl] = startStateDeck(
        myGame.players[iPl],
        myGame.gameState.functionState,
        true,
      );
      /* myGame.players[iPl].buttons.dobleEnabled = false;
      myGame.players[iPl].buttons.tripleEnabled = false;
      myGame.players[iPl].buttons.fiveEnabled = false; */
      myGame.gameState.timeLeft = getPause(
        myGame.players[iPl].isBot,
        myGame.gameState.functionState,
      );
      if (myGame.gameState.functionState === 'waitTakeCardDeskDeck') myGame.gameState.timeLeft = 3;
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
      myGame.gameState.timeLeft = 4;
      if (neutralize !== -1) {
        myGame.gameState.functionState = 'waitNeutralize';
        myGame.gameState.timeLeft = getPause(
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
  // myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  // console.log(myGame);
  return myGame;
}

export default takeCardDeskDeck;
