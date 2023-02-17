/* eslint-disable class-methods-use-this */
import IBot from '../../../interface/IBot';
import IPlayer from '../../../interface/IPlayer';
import choiceIndexArr from '../subevent/subevent/choiceIndexArr';
import TStateGame from '../../../interface/IStateGame';
import ICard from '../../../interface/ICard';
import findIndexPlayerTern from '../../game-event/subevent/findIndexPlayerTern';
import startStateDeck from '../../statePlayerDeck/startStateDeck';
import findUnnecessaryCard from './subevent/findUnnecessaryCard';

class HardBot implements IBot {
  onTurn(player: IPlayer, reboundDeck: ICard[], deskDeck: ICard[], players: IPlayer[]): {
    idCard: number, stateGame: TStateGame } {
    const myRet: { idCard: number, stateGame: TStateGame } = { idCard: -1, stateGame: 'tern' };

    if (player.combos.fiveCats.length > 0) {
      const indNet = reboundDeck.findIndex((cr) => cr.type === 1);
      if (indNet > -1) {
        myRet.stateGame = 'fiveCombo';
        myRet.idCard = player.combos.fiveCats[0][0].id;
        return myRet;
      }
    }

    const vCard = player.visibleCards.filter((el) => el > 0);
    if (vCard.length > 0) {
      const visibleExpCats = player.visibleCards.some(
        (el) => (
          (el > 0 && el <= player.countTakeCard
            && deskDeck.length >= el && deskDeck[el - 1].type === 0)
        ),
      );
      const actPl = players.filter((pl) => pl.active === true);
      const onlyKatLeft = (deskDeck.length + 1 === actPl.length);
      if (visibleExpCats || onlyKatLeft) {
        const tCard = [3, 6];
        if (player.countTakeCard <= player.deck.filter((cr) => cr.type === 4).length) {
          tCard.push(4);
        }

        const deck = player.deck.filter((cr) => tCard.includes(cr.type));
        if (deck.length > 0) {
          myRet.idCard = deck[choiceIndexArr(deck)].id;
          return myRet;
        }

        const deck1 = [
          ...player.deck.filter((cr) => cr.type === 5),
          ...player.combos.doubleCats,
          ...player.combos.tripleCats,
        ];
        if (deck1.length > 0) {
          const el = deck1[choiceIndexArr(deck1)];
          if (Array.isArray(el)) {
            myRet.idCard = el[0].id;
            if (el.length === 2) myRet.stateGame = 'doubleCombo';
            if (el.length === 3) myRet.stateGame = 'tripleCombo';
          } else {
            myRet.idCard = el.id;
          }
          return myRet;
        }
      }
    }

    const tCard = [3, 4, 5, 6];
    if (vCard.length === 0) tCard.push(7);
    const deck = [
      ...player.deck.filter((cr) => tCard.includes(cr.type)),
      ...player.combos.doubleCats,
      ...player.combos.tripleCats,
    ];

    if (deck.length > 0) {
      if (Math.random() >= 0.25) {
        const el = deck[choiceIndexArr(deck)];
        if (Array.isArray(el)) {
          myRet.idCard = el[0].id;
          if (el.length === 2) myRet.stateGame = 'doubleCombo';
          if (el.length === 3) myRet.stateGame = 'tripleCombo';
        } else {
          myRet.idCard = el.id;
        }
      }
    }

    return myRet;
  }

  onAnswerTurn(player: IPlayer, players: IPlayer [], playerWaitAnswer: IPlayer[]): number {
    let retId = -1;
    const deckNot = player.deck.filter((cr) => cr.type === 2);
    if (deckNot.length > 0) {
      const activePl = players.filter((pl) => pl.active && pl.isBot === false);
      if (activePl.length > 0 && playerWaitAnswer[0].name === activePl[0].name) {
        retId = deckNot[0].id;
      }
    }
    return retId;
  }

  onComboPlayerChoice(modulPlayers: IPlayer[], players: IPlayer[]): string {
    const activePl = players.filter((pl) => pl.active && pl.isBot === false);
    if (activePl.length > 0 && activePl[0].deck.length > 0) {
      const indModulPl = findIndexPlayerTern(modulPlayers, activePl[0].name);
      if (indModulPl !== -1) return activePl[0].name;
    }
    const otherPl = modulPlayers.filter((pl) => pl.isBot);
    return otherPl[choiceIndexArr(otherPl)].name;
  }

  onCombo2CardChoice(deck: ICard[]): number {
    let ret = -1;
    if (deck.length > 0) ret = deck[choiceIndexArr(deck)].id;
    return ret;
  }

  onCombo3CardChoice(deck: ICard[]): number {
    let ret = -1;
    if (deck.length > 0) {
      const card = deck.find((cr) => cr.type === 1);
      if (card !== undefined) ret = card.id;
    }
    return ret;
  }

  onCombo5CardChoice(deck: ICard[]): number {
    let ret = this.onCombo3CardChoice(deck);
    if (ret === -1) ret = deck[choiceIndexArr(deck)].id;
    return ret;
  }

  onFavorChoiceCard(player: IPlayer): number {
    let pl: IPlayer = JSON.parse(JSON.stringify(player));
    pl = startStateDeck(pl, 'waitPlayerTurn', true);

    const idCard = findUnnecessaryCard(
      pl.deck,
      pl.combos.doubleCats,
      pl.combos.tripleCats,
      pl.combos.fiveCats,
    );
    if (idCard !== -1) return idCard;

    let ret = -1;
    if (pl.deck.length > 0) ret = pl.deck[choiceIndexArr(pl.deck)].id;
    return ret;
  }

  onPutExplosiveKitten(players: IPlayer[], playerTurnName: string): number {
    const actPl = players.filter((pl) => pl.active);
    const notBotPl = players.filter((pl) => pl.active && pl.isBot === false);
    if (notBotPl.length > 0 && actPl.length > 0) {
      const indBot = findIndexPlayerTern(actPl, playerTurnName);
      const indPl = findIndexPlayerTern(actPl, notBotPl[0].name);
      if (indBot !== -1 && indPl !== -1) {
        if (indBot > indPl) {
          return actPl.length - indBot + indPl;
        }
        return indPl - indBot;
      }
    }
    return actPl.length - 1;
  }

  onAnswerNotToNot(player: IPlayer, players: IPlayer [], playerWaitAnswer: IPlayer[]): number {
    /* let retId = -1;
    const deckNot = player.deck.filter((cr) => cr.type === 2);
    if (deckNot.length > 0) {
      const activePl = players.filter((pl) => pl.active && pl.isBot === false);
      if (activePl.length > 0 && playerWaitAnswer[1].name !== activePl[0].name) {
        retId = deckNot[0].id;
      }
    }
    return retId; */
    return this.onAnswerTurn(player, players, playerWaitAnswer);
  }
}

export default HardBot;
