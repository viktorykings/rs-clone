/* eslint-disable class-methods-use-this */
import IBot from '../../../interface/IBot';
import IPlayer from '../../../interface/IPlayer';
import choiceIndexArr from '../subevent/subevent/choiceIndexArr';
import TStateGame from '../../../interface/IStateGame';

class EasyBot implements IBot {
  /* bot: IPlayer;

  constructor(player: IPlayer) {
    this.bot = player;
  } */

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
}

export default EasyBot;
