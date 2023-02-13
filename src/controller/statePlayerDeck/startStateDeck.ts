import IPlayer from '../../interface/IPlayer';
import TFunctionState from '../../interface/TFunctionState';

function startStateDeck(player: IPlayer, functionState: TFunctionState, isTurn: boolean): IPlayer {
  const myPl = { ...player };
  myPl.buttons.comboEnabled = false;
  myPl.buttons.dobleVisible = false;
  myPl.buttons.tripleVisible = false;
  myPl.buttons.fiveVisible = false;
  myPl.buttons.dobleEnabled = false;
  myPl.buttons.tripleEnabled = false;
  myPl.buttons.fiveEnabled = false;
  myPl.buttons.finishMove = false;

  if (functionState !== 'waitEndMove' && functionState !== 'waitAnserTurn') {
    const deckCats = player.deck.filter((card) => card.type >= 8 && card.type <= 12);
    deckCats.sort((a, b) => a.type - b.type);
    let i2 = -1;
    let i3 = -1;
    let type = 0;
    myPl.combos.doubleCats = [];
    myPl.combos.tripleCats = [];
    myPl.combos.fiveCats = [];
    for (let i = 0; i < deckCats.length; i += 1) {
      if (type === deckCats[i].type) {
        if (myPl.combos.doubleCats[i2].length === 1) myPl.combos.doubleCats[i2].push(deckCats[i]);
        if (myPl.combos.tripleCats[i3].length <= 2) myPl.combos.tripleCats[i3].push(deckCats[i]);
      }
      if (type !== deckCats[i].type) {
        if (myPl.combos.doubleCats.length > 0 && myPl.combos.doubleCats[i2].length !== 2) {
          myPl.combos.doubleCats.splice(i2, 1);
        } else {
          i2 += 1;
        }
        if (myPl.combos.tripleCats.length > 0 && myPl.combos.tripleCats[i3].length !== 3) {
          myPl.combos.tripleCats.splice(i3, 1);
        } else {
          i3 += 1;
        }
        type = deckCats[i].type;
        myPl.combos.doubleCats.push([deckCats[i]]);
        myPl.combos.tripleCats.push([deckCats[i]]);
        if (myPl.combos.fiveCats.length > 0) myPl.combos.fiveCats[0].push(deckCats[i]);
        else myPl.combos.fiveCats.push([deckCats[i]]);
      }
    }

    if (myPl.combos.doubleCats.length > 0 && myPl.combos.doubleCats[i2].length !== 2) {
      myPl.combos.doubleCats.splice(i2, 1);
    }
    if (myPl.combos.tripleCats.length > 0 && myPl.combos.tripleCats[i3].length !== 3) {
      myPl.combos.tripleCats.splice(i3, 1);
    }
    if (myPl.combos.fiveCats.length > 0 && myPl.combos.fiveCats[0].length !== 5) {
      myPl.combos.fiveCats.splice(0, 1);
    }

    if (myPl.combos.doubleCats.length > 0) {
      myPl.buttons.comboEnabled = true;
      myPl.buttons.dobleEnabled = true;
    }
    if (myPl.combos.tripleCats.length > 0) {
      myPl.buttons.comboEnabled = true;
      myPl.buttons.tripleEnabled = true;
    }
    if (myPl.combos.fiveCats.length > 0) {
      myPl.buttons.comboEnabled = true;
      myPl.buttons.fiveEnabled = true;
    }
    // eslint-disable-next-line no-param-reassign
    myPl.deck.map((card) => { card.enabled = card.type >= 3 && card.type <= 7; return card; });
  }

  if ((functionState === 'waitEndMove' || functionState === 'waitAnserTurn') && isTurn) myPl.buttons.finishMove = true;

  return myPl;
}

export default startStateDeck;
