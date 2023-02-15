import createCard from '../controller/createCard';
import findCat from '../controller/game-loop/bots/subevent/findCat';
import ICard from '../interface/ICard';

const ar: ICard [] = [];
ar.push(createCard(50, 1, 0));

test('get one cat', () => {
  expect(findCat(ar, [])).toStrictEqual(undefined);
});

const ar1: ICard [] = [];

const c0 = createCard(50, 1, 0);
const c1 = createCard(41, 8, 0);
const c2 = createCard(42, 8, 0);
const c3 = createCard(43, 8, 0);
ar1.push(c0, c1, c2, c3);

test('get one cat', () => {
  expect(findCat(ar1, [])).toStrictEqual(c1);
  expect(findCat(ar1, ar1)).toStrictEqual(undefined);
});

const ar2: ICard [] = [];

const c4 = createCard(30, 9, 0);
ar2.push(c0, c1, c2, c3, c4);

test('get one cat', () => {
  expect(findCat(ar1, [])).toStrictEqual(c1);
  expect(findCat(ar2, [c0, c1, c2, c3])).toStrictEqual(c4);
});

const d0 = createCard(10, 1, 0);
const d1 = createCard(15, 2, 0);
const d2 = createCard(20, 8, 0);
const d3 = createCard(19, 8, 0);
const d4 = createCard(18, 8, 0);
const d5 = createCard(24, 9, 0);
const d6 = createCard(23, 9, 0);
const d7 = createCard(25, 10, 0);

// const combo29 = [[d3, d2], [d5, d6]];
// const combo39 = [[d3, d2, d4]];

test('get one cat', () => {
  // expect(findCat([], [])).toStrictEqual(c1);
  expect(findCat([d0, d1, d2, d3, d4, d5, d6, d7], [d3, d2, d4])).toStrictEqual(d5);
  expect(findCat([d0, d1, d2, d3, d4, d5, d6, d7], [d3, d2, d5, d6, d3, d2, d4])).toStrictEqual(d7);
});
