import ICard from '../interface/ICard';
import ICardPlayers from '../interface/ICardPlayers';
import IPlayer from '../interface/IPlayer';
import createCard from './createCard';

function createDeckFirst(players: IPlayer []): ICardPlayers {
  const deskDeck: ICard[] = [];
  const playersDeck = [...players];
  let id = 0;

  for (let i = 0; i < playersDeck.length; i += 1) {
    playersDeck[i].deck.push(createCard(id, 1, i));
    id += 1;
  }

  for (let i = 0; i < 5; i += 1) {
    deskDeck.push(createCard(id, 2, i));
    id += 1;
  }

  for (let i = 0; i < 4; i += 1) {
    deskDeck.push(createCard(id, 3, i));
    deskDeck.push(createCard(id + 1, 4, i));
    deskDeck.push(createCard(id + 2, 5, i));
    deskDeck.push(createCard(id + 3, 6, i));
    deskDeck.push(createCard(id + 1, 7, i));
    deskDeck.push(createCard(id + 2, 8, i));
    deskDeck.push(createCard(id + 3, 9, i));
    deskDeck.push(createCard(id + 4, 10, i));
    deskDeck.push(createCard(id + 5, 11, i));
    deskDeck.push(createCard(id + 6, 12, i));
    id += 10;
  }

  deskDeck.sort(() => Math.random() - 0.5);
  playersDeck.map((player) => player.deck.push(...deskDeck.splice(0, 4)));

  for (let i = 0; i < playersDeck.length - 1; i += 1) {
    deskDeck.push(createCard(id, 0, i));
    id += 1;
  }
  for (let i = 0; i < 6 - playersDeck.length; i += 1) {
    deskDeck.push(createCard(id, 1, i));
    id += 1;
  }
  deskDeck.sort(() => Math.random() - 0.5);

  return { deskDeck, playersDeck };
}

export default createDeckFirst;
