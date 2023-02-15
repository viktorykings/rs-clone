import findUnnecessaryCard from '../controller/game-loop/bots/subevent/findUnnecessaryCard';
import createPlayer from '../controller/createPlayer';
import createCard from '../controller/createCard';
import MiddleBot from '../controller/game-loop/bots/middleBot';

const pl = createPlayer('a');
const result = -1;
const MB = new MiddleBot();

test('get -1 from empty data', () => {
  expect(findUnnecessaryCard(pl.deck, [], [], [])).toStrictEqual(result);
  expect(MB.onFavorChoiceCard(pl)).toStrictEqual(result);
});

const pl1 = createPlayer('a');
pl1.deck.push(createCard(10, 1, 0));

test('get -1 from one neutralize card', () => {
  expect(findUnnecessaryCard(pl1.deck, [], [], [])).toStrictEqual(-1);
  expect(MB.onFavorChoiceCard(pl1)).toStrictEqual(10);
});

const pl2 = createPlayer('a');
pl2.deck.push(createCard(10, 1, 0));
pl2.deck.push(createCard(15, 2, 0));

const pl3 = createPlayer('a');
pl3.deck.push(createCard(10, 1, 0));
pl3.deck.push(createCard(17, 3, 0));

const pl4 = createPlayer('a');
pl4.deck.push(createCard(10, 1, 0));
pl4.deck.push(createCard(20, 8, 0));

test('get id from one neutralize card and one other card', () => {
  expect(findUnnecessaryCard(pl2.deck, [], [], [])).toStrictEqual(15);
  expect(MB.onFavorChoiceCard(pl2)).toStrictEqual(15);
  expect(findUnnecessaryCard(pl3.deck, [], [], [])).toStrictEqual(17);
  expect(MB.onFavorChoiceCard(pl3)).toStrictEqual(17);
  expect(findUnnecessaryCard(pl4.deck, [], [], [])).toStrictEqual(20);
  expect(MB.onFavorChoiceCard(pl4)).toStrictEqual(20);
});

const pl5 = createPlayer('a');
pl5.deck.push(createCard(10, 1, 0));
pl5.deck.push(createCard(15, 2, 0));
pl5.deck.push(createCard(20, 8, 0));
pl5.deck.push(createCard(19, 8, 0));
const combo2 = [[pl5.deck[3], pl5.deck[2]]];

test('get id from one neutralize card and Combo2 one other card and not data from Combo2', () => {
  expect(findUnnecessaryCard(pl5.deck, [], [], [])).toStrictEqual(20);
  expect(findUnnecessaryCard(pl5.deck, combo2, [], [])).toStrictEqual(20);
  expect(MB.onFavorChoiceCard(pl5)).toStrictEqual(20);
});

const pl6 = createPlayer('a');
pl6.deck.push(createCard(10, 1, 0));
pl6.deck.push(createCard(15, 2, 0));
pl6.deck.push(createCard(20, 8, 0));
pl6.deck.push(createCard(19, 8, 0));
pl6.deck.push(createCard(18, 8, 0));
const combo21 = [[pl6.deck[3], pl6.deck[2]]];
const combo31 = [[pl6.deck[3], pl6.deck[2], pl6.deck[4]]];

test('get id from one neutralize card, Combo2, Combo3 one other card', () => {
  expect(findUnnecessaryCard(pl6.deck, [], [], [])).toStrictEqual(20);
  expect(findUnnecessaryCard(pl6.deck, combo21, combo31, [])).toStrictEqual(15);
  expect(MB.onFavorChoiceCard(pl6)).toStrictEqual(15);
});

const pl7 = createPlayer('a');
pl7.deck.push(createCard(10, 1, 0));
pl7.deck.push(createCard(15, 2, 0));
pl7.deck.push(createCard(20, 8, 0));
pl7.deck.push(createCard(19, 8, 0));
pl7.deck.push(createCard(18, 8, 0));
pl7.deck.push(createCard(22, 9, 0));
const combo27 = [[pl7.deck[3], pl7.deck[2]]];
const combo37 = [[pl7.deck[3], pl7.deck[2], pl7.deck[4]]];

test('get id from one neutralize card, Combo2, Combo3 one other card', () => {
  expect(findUnnecessaryCard(pl7.deck, [], [], [])).toStrictEqual(20);
  expect(findUnnecessaryCard(pl7.deck, combo27, combo37, [])).toStrictEqual(22);
  expect(MB.onFavorChoiceCard(pl7)).toStrictEqual(22);
});

const pl8 = createPlayer('a');
pl8.deck.push(createCard(10, 1, 0));
pl8.deck.push(createCard(15, 2, 0));
pl8.deck.push(createCard(20, 8, 0));
pl8.deck.push(createCard(19, 8, 0));
pl8.deck.push(createCard(18, 8, 0));
pl8.deck.push(createCard(24, 9, 0));
pl8.deck.push(createCard(23, 9, 0));
const combo28 = [[pl8.deck[3], pl8.deck[2]], [pl8.deck[5], pl8.deck[6]]];
const combo38 = [[pl8.deck[3], pl8.deck[2], pl8.deck[4]]];

test('get id from one neutralize card, 2 x Combo2, Combo3 one other card', () => {
  expect(findUnnecessaryCard(pl8.deck, [], [], [])).toStrictEqual(20);
  expect(findUnnecessaryCard(pl8.deck, combo28, combo38, [])).toStrictEqual(24);
  expect(MB.onFavorChoiceCard(pl8)).toStrictEqual(24);
});

const pl9 = createPlayer('a');
pl9.deck.push(createCard(10, 1, 0));
pl9.deck.push(createCard(15, 2, 0));
pl9.deck.push(createCard(20, 8, 0));
pl9.deck.push(createCard(19, 8, 0));
pl9.deck.push(createCard(18, 8, 0));
pl9.deck.push(createCard(24, 9, 0));
pl9.deck.push(createCard(23, 9, 0));
pl9.deck.push(createCard(25, 10, 0));
const combo29 = [[pl9.deck[3], pl9.deck[2]], [pl9.deck[5], pl9.deck[6]]];
const combo39 = [[pl9.deck[3], pl9.deck[2], pl9.deck[4]]];

test('get id from one neutralize card, 2 x Combo2, Combo3 one cat and other card', () => {
  expect(findUnnecessaryCard(pl9.deck, [], [], [])).toStrictEqual(20);
  expect(findUnnecessaryCard(pl9.deck, combo29, combo39, [])).toStrictEqual(25);
  expect(MB.onFavorChoiceCard(pl9)).toStrictEqual(25);
});

const pl10 = createPlayer('a');
pl10.deck.push(createCard(10, 1, 0));
pl10.deck.push(createCard(15, 2, 0));
pl10.deck.push(createCard(20, 8, 0));
pl10.deck.push(createCard(19, 8, 0));
pl10.deck.push(createCard(18, 8, 0));
pl10.deck.push(createCard(24, 9, 0));
pl10.deck.push(createCard(23, 9, 0));
pl10.deck.push(createCard(28, 9, 0));
const combo210 = [[pl10.deck[3], pl10.deck[2]], [pl10.deck[5], pl10.deck[6]]];
const combo310 = [
  [pl10.deck[3], pl10.deck[2], pl10.deck[4]], [pl10.deck[5], pl10.deck[6], pl10.deck[7]]];

test('get id from one neutralize card, 2 x Combo2, 2 x Combo3 other card', () => {
  // expect(findUnnecessaryCard(pl9.deck, [], [], [])).toStrictEqual(20);
  // expect(findUnnecessaryCard(pl10.deck, [], combo210, combo310)).toStrictEqual(18);
  expect(findUnnecessaryCard(pl10.deck, combo210, combo310, [])).toStrictEqual(15);
  expect(MB.onFavorChoiceCard(pl10)).toStrictEqual(15);
});

const pl11 = createPlayer('a');
pl11.deck.push(createCard(10, 1, 0));
pl11.deck.push(createCard(20, 8, 0));
pl11.deck.push(createCard(19, 8, 0));
pl11.deck.push(createCard(18, 8, 0));
pl11.deck.push(createCard(24, 9, 0));
pl11.deck.push(createCard(23, 9, 0));
pl11.deck.push(createCard(28, 9, 0));
const combo211 = [[pl11.deck[1], pl11.deck[2]], [pl11.deck[5], pl11.deck[6]]];
const combo311 = [
  [pl11.deck[1], pl11.deck[2], pl11.deck[3]], [pl11.deck[4], pl11.deck[5], pl11.deck[6]]];

test('get id from one neutralize card, 2 x Combo2, 2 x Combo3', () => {
  // expect(findUnnecessaryCard(pl9.deck, [], [], [])).toStrictEqual(20);
  expect(findUnnecessaryCard(pl11.deck, combo211, combo311, [])).toStrictEqual(20);
  expect(MB.onFavorChoiceCard(pl11)).toStrictEqual(20);
});

const pl12 = createPlayer('a');
pl12.deck.push(createCard(10, 1, 0));
pl12.deck.push(createCard(20, 8, 0));
pl12.deck.push(createCard(19, 8, 0));
pl12.deck.push(createCard(18, 8, 0));
pl12.deck.push(createCard(24, 9, 0));
pl12.deck.push(createCard(23, 9, 0));
pl12.deck.push(createCard(28, 9, 0));
pl12.deck.push(createCard(31, 10, 0));
pl12.deck.push(createCard(32, 11, 0));
pl12.deck.push(createCard(33, 12, 0));
const combo212 = [[pl12.deck[1], pl12.deck[2]], [pl12.deck[5], pl12.deck[6]]];
const combo312 = [
  [pl12.deck[1], pl12.deck[2], pl12.deck[3]], [pl12.deck[4], pl12.deck[5], pl12.deck[6]]];
const combo512 = [[pl12.deck[1], pl12.deck[4], pl12.deck[7], pl12.deck[8], pl12.deck[9]]];

test('get id from one neutralize card, 2 x Combo2, 2 x Combo3 and Combo5', () => {
  // expect(findUnnecessaryCard(pl9.deck, [], [], [])).toStrictEqual(20);
  expect(findUnnecessaryCard(pl12.deck, combo212, combo312, combo512)).toStrictEqual(19);
  expect(MB.onFavorChoiceCard(pl12)).toStrictEqual(19);
});

const pl13 = createPlayer('a');
pl13.deck.push(createCard(10, 1, 0));
pl13.deck.push(createCard(20, 8, 0));
pl13.deck.push(createCard(24, 9, 0));
pl13.deck.push(createCard(31, 10, 0));
pl13.deck.push(createCard(32, 11, 0));
pl13.deck.push(createCard(33, 12, 0));
const combo513 = [[pl13.deck[1], pl13.deck[2], pl13.deck[3], pl13.deck[4], pl13.deck[5]]];

test('get id from one neutralize card and Combo5', () => {
  // expect(findUnnecessaryCard(pl9.deck, [], [], [])).toStrictEqual(20);
  expect(findUnnecessaryCard(pl13.deck, [], [], combo513)).toStrictEqual(20);
  expect(MB.onFavorChoiceCard(pl13)).toStrictEqual(20);
});

const pl14 = createPlayer('a');
pl14.deck.push(createCard(10, 1, 0));
pl14.deck.push(createCard(20, 8, 0));
pl14.deck.push(createCard(24, 9, 0));
pl14.deck.push(createCard(31, 10, 0));
pl14.deck.push(createCard(32, 11, 0));
pl14.deck.push(createCard(33, 12, 0));
pl14.deck.push(createCard(35, 12, 0));
const combo214 = [[pl14.deck[5], pl14.deck[6]]];
const combo514 = [[pl14.deck[1], pl14.deck[2], pl14.deck[3], pl14.deck[4], pl14.deck[5]]];

test('get id from one neutralize card and Combo5', () => {
  // expect(findUnnecessaryCard(pl9.deck, [], [], [])).toStrictEqual(20);
  expect(findUnnecessaryCard(pl14.deck, combo214, [], combo514)).toStrictEqual(35);
  expect(MB.onFavorChoiceCard(pl14)).toStrictEqual(35);
});

const pl15 = createPlayer('a');
pl15.deck.push(createCard(10, 1, 0));
pl15.deck.push(createCard(20, 8, 0));
pl15.deck.push(createCard(24, 9, 0));
pl15.deck.push(createCard(31, 10, 0));
pl15.deck.push(createCard(32, 11, 0));
pl15.deck.push(createCard(33, 12, 0));
pl15.deck.push(createCard(35, 12, 0));
pl15.deck.push(createCard(5, 4, 0));
const combo215 = [[pl15.deck[5], pl15.deck[6]]];
const combo515 = [[pl15.deck[1], pl15.deck[2], pl15.deck[3], pl15.deck[4], pl15.deck[5]]];

test('get id from one neutralize card and Combo5', () => {
  // expect(findUnnecessaryCard(pl9.deck, [], [], [])).toStrictEqual(20);
  expect(findUnnecessaryCard(pl15.deck, combo215, [], combo515)).toStrictEqual(35);
  expect(MB.onFavorChoiceCard(pl15)).toStrictEqual(35);
});

const pl16 = createPlayer('a');
pl16.deck.push(createCard(10, 1, 0));
pl16.deck.push(createCard(20, 8, 0));
pl16.deck.push(createCard(24, 9, 0));
pl16.deck.push(createCard(31, 10, 0));
pl16.deck.push(createCard(32, 11, 0));
pl16.deck.push(createCard(33, 12, 0));
pl16.deck.push(createCard(5, 4, 0));
const combo516 = [[pl16.deck[1], pl16.deck[2], pl16.deck[3], pl16.deck[4], pl16.deck[5]]];

test('get id from one neutralize card and Combo5', () => {
  // expect(findUnnecessaryCard(pl9.deck, [], [], [])).toStrictEqual(20);
  expect(findUnnecessaryCard(pl16.deck, [], [], combo516)).toStrictEqual(5);
  expect(MB.onFavorChoiceCard(pl16)).toStrictEqual(5);
});
