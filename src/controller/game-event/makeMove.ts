import IGame from '../../interface/IGame';
import findIndexPlayerTern from './subevent/findIndexPlayerTern';
import cardType from '../../const/cardType';
import findNextActivePlayer from './subevent/findNextActivePlayer';
import { botWaitAnswer, playerWaitTurn } from '../../const/gameVariable';
import ICard from '../../interface/ICard';
import startStateDeck from '../statePlayerDeck/startStateDeck';
import clearNameCombo from '../statePlayerDeck/clearNameCombo';
// import ICard from '../../interface/ICard';

function makeMove(game: IGame, idCard: number): IGame {
  // console.log('make move');
  const myGame = { ...game };
  const inPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  const indCard = myGame.players[inPl].deck.findIndex((cr) => cr.id === idCard);
  const typeTern = myGame.players[inPl].deck[indCard].type;

  if ((myGame.gameState.stateGame === 'tern' && typeTern > 2 && typeTern <= 7)
    || myGame.gameState.stateGame === 'doubleCombo'
    || myGame.gameState.stateGame === 'tripleCombo'
    || myGame.gameState.stateGame === 'fiveCombo'
  ) {
    if (indCard !== -1) {
      const pl = myGame.players[inPl];
      myGame.gameState.typeTern = typeTern;
      if (typeTern > 2 && typeTern <= 7) {
        myGame.showCards = myGame.players[inPl].deck.splice(indCard, 1);
        myGame.gameState.message = `${pl.name} походил картой ${cardType[typeTern].name}`;
      }
      if (typeTern >= 8 && typeTern <= 12
        && (myGame.gameState.stateGame === 'doubleCombo'
          || myGame.gameState.stateGame === 'tripleCombo'
          || myGame.gameState.stateGame === 'fiveCombo')) {
        let combo = pl.combos.doubleCats;
        myGame.gameState.message = `${pl.name} походил 2x Combo`;
        if (myGame.gameState.stateGame === 'tripleCombo') {
          combo = pl.combos.tripleCats;
          myGame.gameState.message = `${pl.name} походил 3x Combo`;
        }
        if (myGame.gameState.stateGame === 'fiveCombo') {
          combo = pl.combos.fiveCats;
          myGame.gameState.message = `${pl.name} походил 5x Combo`;
        }
        const indCar = combo.findIndex((com) => com.find((cr) => cr.id === idCard));
        const t = combo[indCar];
        myGame.showCards.push(...t);
        pl.deck = pl.deck.reduce((dec: ICard[], card) => {
          if (!combo[indCar].includes(card)) dec.push(card);
          return dec;
        }, []);
      }
      clearNameCombo(pl);
      const indPl = findIndexPlayerTern(myGame.players, pl.name);
      const nPl = startStateDeck(pl);
      console.log('----pl----');
      console.log(nPl);
      myGame.players[indPl] = nPl;
      myGame.gameState.functionState = 'waitAnserTurn';
      myGame.gameState.playerWaitAnswer = pl.name;
      const nextPl = findNextActivePlayer(myGame);
      myGame.gameState.playerTurn = nextPl.name;
      myGame.gameState.timeNeed = nextPl.isBot ? botWaitAnswer : playerWaitTurn;
    }
  }
  /* if (myGame.gameState.stateGame === 'endTern') {
    myGame = endMove(myGame);
  } */
  console.log(myGame);
  return myGame;
}

export default makeMove;
