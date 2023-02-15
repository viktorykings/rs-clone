// Befor run test need comment rundom turn without visible cards
import MiddleBot from '../controller/game-loop/bots/middleBot';
import createPlayer from '../controller/createPlayer';
import ICard from '../interface/ICard';
import createCard from '../controller/createCard';

const pl = createPlayer('a');
const MB = new MiddleBot();

const result0 = { idCard: -1, stateGame: 'tern' };
const result81 = { idCard: 81, stateGame: 'tern' };
const result91 = { idCard: 91, stateGame: 'doubleCombo' };
const result111 = { idCard: 91, stateGame: 'fiveCombo' };

const deck1: ICard[] = [];
deck1.push(createCard(10, 1, 0));
deck1.push(createCard(11, 2, 0));
deck1.push(createCard(12, 3, 0));

const deck2: ICard[] = [];
deck2.push(createCard(100, 0, 0));
deck2.push(createCard(11, 2, 0));
deck2.push(createCard(12, 3, 0));

const deck3: ICard[] = [];
deck3.push(createCard(11, 2, 0));
deck3.push(createCard(100, 0, 0));
deck3.push(createCard(12, 3, 0));

test('get result0 from not visible and not cards', () => {
  expect(MB.onTurn(pl, [], deck1)).toStrictEqual(result0);
  expect(MB.onTurn(pl, [], deck2)).toStrictEqual(result0);
  expect(MB.onTurn(pl, [], deck3)).toStrictEqual(result0);
});

const pl1 = createPlayer('a');
pl1.deck.push(createCard(80, 2, 0));

test('get result0 from not visible, and have card Attack', () => {
  expect(MB.onTurn(pl1, [], deck1)).toStrictEqual(result0);
  expect(MB.onTurn(pl1, [], deck2)).toStrictEqual(result0);
  expect(MB.onTurn(pl1, [], deck3)).toStrictEqual(result0);
});

const pl2 = createPlayer('a');
pl2.deck.push(createCard(80, 2, 0));
pl2.visibleCards.push(1);

test('get result from visible 1-st card, and have card Not', () => {
  expect(MB.onTurn(pl2, [], deck1)).toStrictEqual(result0);
  expect(MB.onTurn(pl2, [], deck2)).toStrictEqual(result0);
  expect(MB.onTurn(pl2, [], deck3)).toStrictEqual(result0);
});

const pl3 = createPlayer('a');

pl3.deck.push(createCard(80, 2, 0));
pl3.deck.push(createCard(81, 3, 0));
pl3.visibleCards.push(1);

test('get result from visible 1-st card, and have card Not', () => {
  expect(MB.onTurn(pl3, [], deck1)).toStrictEqual(result0);
  expect(MB.onTurn(pl3, [], deck2)).toStrictEqual(result81);
  expect(MB.onTurn(pl3, [], deck3)).toStrictEqual(result0);
});

const pl4 = createPlayer('a');

pl4.deck.push(createCard(80, 2, 0));
pl4.deck.push(createCard(81, 3, 0));
pl4.visibleCards.push(2);
pl4.countTakeCard = 2;

test('get result from visible 1-st card, and have card Not', () => {
  expect(MB.onTurn(pl4, [], deck1)).toStrictEqual(result0);
  expect(MB.onTurn(pl4, [], deck2)).toStrictEqual(result0);
  expect(MB.onTurn(pl4, [], deck3)).toStrictEqual(result81);
});

const pl5 = createPlayer('a');

const c51 = createCard(91, 8, 0);
const c52 = createCard(92, 8, 0);

pl5.deck.push(createCard(80, 2, 0));
pl5.deck.push(c51, c52);
pl5.combos.doubleCats.push([c51, c52]);
pl5.visibleCards.push(1);

test('get result from visible 1-st card, and have card Not', () => {
  expect(MB.onTurn(pl5, [], deck1)).toStrictEqual(result0);
  expect(MB.onTurn(pl5, [], deck2)).toStrictEqual(result91);
  expect(MB.onTurn(pl5, [], deck3)).toStrictEqual(result0);
});

const pl6 = createPlayer('a');

pl6.deck.push(createCard(80, 2, 0));
pl6.deck.push(c51, c52);
pl6.combos.doubleCats.push([c51, c52]);
pl6.visibleCards.push(1, 2);

test('get result from visible 1-st card, and have card Not', () => {
  expect(MB.onTurn(pl6, [], deck1)).toStrictEqual(result0);
  expect(MB.onTurn(pl6, [], deck2)).toStrictEqual(result91);
  expect(MB.onTurn(pl6, [], deck3)).toStrictEqual(result0);
});

const pl7 = createPlayer('a');

pl7.deck.push(createCard(80, 2, 0));
pl7.deck.push(c51, c52);
pl7.combos.doubleCats.push([c51, c52]);
pl7.visibleCards.push(1, 2);
pl7.countTakeCard = 2;

test('get result from visible 1-st card, and have card Not', () => {
  expect(MB.onTurn(pl7, [], deck1)).toStrictEqual(result0);
  expect(MB.onTurn(pl7, [], deck2)).toStrictEqual(result91);
  expect(MB.onTurn(pl7, [], deck3)).toStrictEqual(result91);
});

const pl8 = createPlayer('a');

const c53 = createCard(101, 9, 0);
const c54 = createCard(102, 10, 0);
const c55 = createCard(103, 11, 0);
const c56 = createCard(104, 12, 0);
pl8.deck.push(createCard(80, 2, 0));
pl8.deck.push(c51, c53, c54, c55, c56);
pl8.combos.fiveCats.push([c51, c53, c54, c55, c56]);
pl8.visibleCards.push(1, 2, 3);
pl8.countTakeCard = 2;

test('get result from visible 1-st card, and have card Not', () => {
  expect(MB.onTurn(pl8, [], deck1)).toStrictEqual(result0);
  expect(MB.onTurn(pl8, [], deck2)).toStrictEqual(result0);
  expect(MB.onTurn(pl8, [], deck3)).toStrictEqual(result0);
});

const pl9 = createPlayer('a');
const c1 = createCard(111, 1, 0);
pl9.deck.push(createCard(80, 2, 0));
pl9.deck.push(c51, c53, c54, c55, c56);
pl9.combos.fiveCats.push([c51, c53, c54, c55, c56]);
pl9.visibleCards.push(1, 2, 3);
pl9.countTakeCard = 2;

test('get result from visible 1-st card, and have card Not', () => {
  expect(MB.onTurn(pl9, [c1], deck1)).toStrictEqual(result111);
  expect(MB.onTurn(pl9, [c1], deck2)).toStrictEqual(result111);
  expect(MB.onTurn(pl9, [c1], deck3)).toStrictEqual(result111);
});
