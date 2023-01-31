import ICard from '../interface/ICard';
import createCard from './createCard';

function createDeckFirst(countPlayers: number): ICard[] {
  const deck: ICard[] = [];
  let id = 0;
  for (let i = 0; i < countPlayers - 1; i += 1) {
    deck.push(createCard(id, 0));
    id += 1;
  }

  for (let i = 0; i < 6 - countPlayers; i += 1) {
    deck.push(createCard(id, 1));
    id += 1;
  }

  for (let i = 0; i < 5; i += 1) {
    deck.push(createCard(id, 2));
    deck.push(createCard(id + 1, 7));
    deck.push(createCard(id + 2, 8));
    deck.push(createCard(id + 3, 9));
    deck.push(createCard(id + 4, 10));
    deck.push(createCard(id + 5, 11));
    deck.push(createCard(id + 6, 12));
    id += 7;
  }

  for (let i = 0; i < 4; i += 1) {
    deck.push(createCard(id, 3));
    deck.push(createCard(id + 1, 4));
    deck.push(createCard(id + 2, 5));
    deck.push(createCard(id + 3, 6));
    id += 4;
  }

  return deck;
}

export default createDeckFirst;
