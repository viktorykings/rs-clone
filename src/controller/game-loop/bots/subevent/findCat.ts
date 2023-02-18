import ICard from '../../../../interface/ICard';

function findCat(deck: ICard[], deckCombo: ICard[]):ICard | undefined {
  return deck.find((cr) => cr.type >= 8 && (!deckCombo.includes(cr)));
}

export default findCat;
