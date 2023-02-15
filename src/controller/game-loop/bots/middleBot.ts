/* eslint-disable class-methods-use-this */
import IBot from '../../../interface/IBot';
import IPlayer from '../../../interface/IPlayer';
import choiceIndexArr from '../subevent/subevent/choiceIndexArr';
import TStateGame from '../../../interface/IStateGame';
import ICard from '../../../interface/ICard';
import findIndexPlayerTern from '../../game-event/subevent/findIndexPlayerTern';
import findPriorIndex from './subevent/findPriorIndex';
import startStateDeck from '../../statePlayerDeck/startStateDeck';
import findUnnecessaryCard from './subevent/findUnnecessaryCard';

class MiddleBot implements IBot {
  onTurn(player: IPlayer): { idCard: number, stateGame: TStateGame } {
    const deck = [
      ...player.deck.filter((cr) => cr.type >= 3 && cr.type <= 8),
      ...player.combos.doubleCats,
      ...player.combos.tripleCats,
      ...player.combos.fiveCats,
    ];
    const myRet: { idCard: number, stateGame: TStateGame } = { idCard: -1, stateGame: 'tern' };
    if (deck.length > 0) {
      if (Math.random() >= 0.5) {
        const el = deck[choiceIndexArr(deck)];
        if (Array.isArray(el)) {
          myRet.idCard = el[0].id;
          if (el.length === 2) myRet.stateGame = 'doubleCombo';
          if (el.length === 3) myRet.stateGame = 'tripleCombo';
          if (el.length === 5) myRet.stateGame = 'fiveCombo';
        } else {
          myRet.idCard = el.id;
        }
      }
    }

    return myRet;
  }

  onAnswerTurn(player: IPlayer, players: IPlayer []): number {
    let retId = -1;
    const deckNot = player.deck.filter((cr) => cr.type === 2);
    if (deckNot.length > 0) {
      const activePl = players.filter((pl) => pl.active);
      const myInd = findIndexPlayerTern(activePl, player.name);
      const indPlRight = findPriorIndex(activePl, myInd);
      if (player.name === activePl[indPlRight].name) retId = deckNot[0].id;
    }
    return retId;
  }

  onComboPlayerChoice(modulPlayers: IPlayer[], players: IPlayer[], playerTurnName: string): string {
    const activePl = players.filter((pl) => pl.active);
    const myInd = findIndexPlayerTern(activePl, playerTurnName);
    const indPlRight = findPriorIndex(activePl, myInd);
    const indModulPl = findIndexPlayerTern(modulPlayers, activePl[indPlRight].name);
    if (indModulPl !== -1) return activePl[indPlRight].name;
    return modulPlayers[choiceIndexArr(modulPlayers)].name;
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

  onPutExplosiveKitten(players: IPlayer[]): number {
    const actPl = players.filter((pl) => pl.active);
    return actPl.length - 1;
  }
}

export default MiddleBot;
