/* eslint-disable class-methods-use-this */
import IBot from '../../../interface/IBot';
import IPlayer from '../../../interface/IPlayer';
import choiceIndexArr from '../subevent/subevent/choiceIndexArr';
import TStateGame from '../../../interface/IStateGame';
import ICard from '../../../interface/ICard';

class EasyBot implements IBot {
  onTurn(player: IPlayer): { idCard: number, stateGame: TStateGame } {
    const deck = [
      ...player.deck.filter((cr) => cr.type >= 3 && cr.type <= 7),
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

  onAnswerTurn(player: IPlayer): number {
    let retId = -1;
    const deckNot = player.deck.filter((cr) => cr.type === 2);
    if (deckNot.length > 0 && Math.random() >= 0.5) {
      retId = deckNot[0].id;
    }
    return retId;
  }

  onComboPlayerChoice(modulPlayers: IPlayer[]): string {
    return modulPlayers[choiceIndexArr(modulPlayers)].name;
  }

  onCombo2CardChoice(deck: ICard[]): number {
    let ret = -1;
    if (deck.length > 0) ret = deck[choiceIndexArr(deck)].id;
    return ret;
  }

  onCombo3CardChoice(deck: ICard[]): number {
    let ret = -1;
    if (deck.length > 0) ret = deck[choiceIndexArr(deck)].id;
    return ret;
  }

  onCombo5CardChoice(deck: ICard[]): number {
    let ret = -1;
    if (deck.length > 0) ret = deck[choiceIndexArr(deck)].id;
    return ret;
  }

  onFavorChoiceCard(player: IPlayer): number {
    let ret = -1;
    if (player.deck.length > 0) ret = player.deck[choiceIndexArr(player.deck)].id;
    return ret;
  }

  onPutExplosiveKitten(): number {
    return 0;
  }
}

export default EasyBot;
