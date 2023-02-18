import ICard from '../../../../interface/ICard';
import findCat from './findCat';
import choiceIndexArr from '../../subevent/subevent/choiceIndexArr';

function findUnnecessaryCard(deck: ICard[], n1: ICard[][], n2: ICard[][], n3: ICard[][]): number {
  const d: ICard[] = [];
  const t: ICard[] = [];
  const f: ICard[] = [];

  if (n1.length > 0) { n1.map((el) => d.push(...el)); }
  if (n2.length > 0) { n2.map((el) => t.push(...el)); }
  if (n3.length > 0) { n3.map((el) => f.push(...el)); }

  const deckCombo = [...d, ...t, ...f];
  let card = findCat(deck, deckCombo);
  if (card !== undefined) return card.id;

  const deckCombo1 = [...t, ...f];
  card = findCat(deck, deckCombo1);
  if (card !== undefined) return card.id;

  if (f.length > 0) {
    const deckCombo2 = [...f];
    card = findCat(deck, deckCombo2);
    if (card !== undefined) return card.id;

    const deck1 = deck.filter((cr) => cr.type >= 2 && cr.type <= 7);
    if (deck1.length > 0) return deck1[choiceIndexArr(deck1)].id;
  }

  // if (t.length > 0) {
  const deckCombo3 = [...t];
  card = findCat(deck, deckCombo3);
  if (card !== undefined) return card.id;
  // }

  /* if (d.length > 0) {
    const deckCombo3 = [...d];
    card = findCat(deck, deckCombo3);
    if (card !== undefined) return card.id;
  } */

  const deck1 = deck.filter((cr) => cr.type >= 2 && cr.type <= 7);
  if (deck1.length > 0) return deck1[choiceIndexArr(deck1)].id;

  if (deckCombo.length > 0) return deckCombo[0].id;
  return -1;
}

export default findUnnecessaryCard;
