import ICard from '../interface/ICard';
import ICardPlayers from '../interface/ICardPlayers';
import IPlayer from '../interface/IPlayer';
import createCard from './createCard';
import startStateDeck from './statePlayerDeck/startStateDeck';

function createDeckFirst(players: IPlayer [], lang: string): ICardPlayers {
  const deskDeck: ICard[] = [];
  let playersDeck = [...players];
  let id = 0;

  for (let i = 0; i < playersDeck.length; i += 1) {
    playersDeck[i].deck.push(createCard(id, 1, i, lang));
    id += 1;
  }

  for (let i = 0; i < 5; i += 1) {
    deskDeck.push(createCard(id, 2, i, lang));
    id += 1;
  }

  for (let i = 0; i < 4; i += 1) {
    deskDeck.push(createCard(id, 3, i, lang));
    deskDeck.push(createCard(id + 1, 4, i, lang));
    deskDeck.push(createCard(id + 2, 5, i, lang));
    deskDeck.push(createCard(id + 3, 6, i, lang));
    deskDeck.push(createCard(id + 4, 7, i, lang));
    deskDeck.push(createCard(id + 5, 8, i, lang));
    deskDeck.push(createCard(id + 6, 9, i, lang));
    deskDeck.push(createCard(id + 7, 10, i, lang));
    deskDeck.push(createCard(id + 8, 11, i, lang));
    deskDeck.push(createCard(id + 9, 12, i, lang));
    id += 10;
  }

  deskDeck.sort(() => Math.random() - 0.5);
  playersDeck.map((player) => player.deck.push(...deskDeck.splice(0, 12)));

  for (let i = 0; i < playersDeck.length - 1; i += 1) {
    deskDeck.push(createCard(id, 0, i, lang));
    id += 1;
  }
  for (let i = 0; i < 6 - playersDeck.length; i += 1) {
    deskDeck.push(createCard(id, 1, i, lang));
    id += 1;
  }
  deskDeck.sort(() => Math.random() - 0.5);

  playersDeck = playersDeck.map((pl) => startStateDeck(pl, '', false));

  return { deskDeck, playersDeck };
}

export default createDeckFirst;
