import IGame from '../../interface/IGame';
import findIndexPlayerTern from './subevent/findIndexPlayerTern';
import cardType from '../../const/cardType';
import findNextActivePlayer from './subevent/findNextActivePlayer';
import ICard from '../../interface/ICard';
import startStateDeck from '../statePlayerDeck/startStateDeck';
import clearNameCombo from '../statePlayerDeck/clearNameCombo';
import moveNeutralize from './subevent/moveNeutralize';
import getPause from '../game-loop/subevent/getPause';
import langs from '../../const/localization';
import moveNot from './subevent/moveNot';
import favorGiveCard from './subevent/favorGiveCard';
import moveNotToNot from './subevent/moveNotToNot';

function makeMove(game: IGame, idCard: number, pushRebound = true): IGame {
  let myGame = { ...game };
  const inPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  let indCard = -1;
  let typeTern = -1;
  if (pushRebound) {
    indCard = myGame.players[inPl].deck.findIndex((cr) => cr.id === idCard);
    if (indCard === -1) return game;
    typeTern = myGame.players[inPl].deck[indCard].type;
  } else {
    indCard = myGame.showCards.findIndex((cr) => cr.id === idCard);
    typeTern = myGame.showCards[indCard].type;
  }
  const currLang = game.settings.lang;
  const base = langs[currLang].deskPage.gameMsg;

  if (
    ((myGame.gameState.stateGame === 'tern' && typeTern > 2 && typeTern <= 7)
      || myGame.gameState.stateGame === 'doubleCombo'
      || myGame.gameState.stateGame === 'tripleCombo'
      || myGame.gameState.stateGame === 'fiveCombo')
    && myGame.gameState.functionState === 'waitPlayerTurn'
  ) {
    if (indCard !== -1) {
      const pl = myGame.players[inPl];
      myGame.gameState.typeTern = typeTern;
      if (typeTern > 2 && typeTern <= 7) {
        if (pushRebound) {
          myGame.showCards.push(
            ...myGame.players[inPl].deck.splice(indCard, 1),
          );
        }
        myGame.gameState.message = `${pl.name} ${base.makeMove.move} ${cardType[currLang][typeTern].name}`;
      }
      if (
        typeTern >= 8
        && typeTern <= 12
        && (myGame.gameState.stateGame === 'doubleCombo'
          || myGame.gameState.stateGame === 'tripleCombo'
          || myGame.gameState.stateGame === 'fiveCombo')
      ) {
        let combo = pl.combos.doubleCats;
        myGame.gameState.message = `${pl.name} ${base.makeMove.moveCombo[0]}`;
        if (myGame.gameState.stateGame === 'tripleCombo') {
          combo = pl.combos.tripleCats;
          myGame.gameState.message = `${pl.name} ${base.makeMove.moveCombo[1]}`;
        }
        if (myGame.gameState.stateGame === 'fiveCombo') {
          combo = pl.combos.fiveCats;
          myGame.gameState.message = `${pl.name} ${base.makeMove.moveCombo[2]}`;
        }
        if (pushRebound) {
          const indCar = combo.findIndex(
            (com) => com.find((cr) => cr.id === idCard),
          );
          const t = combo[indCar];
          myGame.showCards.push(...t);
          pl.deck = pl.deck.reduce((dec: ICard[], card) => {
            if (!combo[indCar].includes(card)) dec.push(card);
            return dec;
          }, []);
        }
      }

      myGame.gameState.functionState = 'waitAnserTurn';
      clearNameCombo(pl);
      const indPl = findIndexPlayerTern(myGame.players, pl.name);
      const nPl = startStateDeck(pl, myGame.gameState.functionState, false);
      myGame.players[indPl] = nPl;
      // myGame.gameState.playerWaitAnswer = pl.name;
      myGame.gameState.playerWaitAnswer.unshift(nPl);
      let nextPl = findNextActivePlayer(myGame);
      nextPl = startStateDeck(nextPl, myGame.gameState.functionState, true);
      const indPlN = findIndexPlayerTern(myGame.players, nextPl.name);
      myGame.players[indPlN] = nextPl;
      myGame.gameState.playerTurn = nextPl.name;
      myGame.gameState.timeNeed = getPause(
        nextPl.isBot,
        myGame.gameState.functionState,
      );
      myGame.gameState.timeLeft = myGame.gameState.timeNeed;
    }
  }

  if (myGame.gameState.stateGame === 'tern' && typeTern >= 8) {
    myGame.gameState.message = 'Картами котов можно ходить только после выбора режима Combo';
  }

  if (myGame.gameState.functionState === 'waitNeutralize' && typeTern === 1) {
    myGame = moveNeutralize(myGame, idCard);
  }

  if (myGame.gameState.functionState === 'waitNotToNot' && typeTern === 2) {
    myGame = moveNotToNot(myGame, idCard);
  }

  if (myGame.gameState.functionState === 'waitAnserTurn' && typeTern === 2) {
    myGame = moveNot(myGame, idCard);
  }

  if (myGame.gameState.functionState === 'waitFavorPlayerCard') {
    myGame = favorGiveCard(myGame, idCard);
  }
  // console.log(myGame);
  return myGame;
}

export default makeMove;
