import ICardType from '../interface/ICardType';
const base = '../assets/cards';

const cardType: ICardType [] = [
  { name: 'Взрывной котенок', description: '', links: [`${base}/bang1.png`, `${base}/bang2.png`, `${base}/bang3.png`, `${base}/bang4.png`] },
  { name: 'Обезвредить', description: '', links: [`${base}/neutralize1.png`, `${base}/neutralize2.png`, `${base}/neutralize3.png`, `${base}/neutralize4.png`, `${base}/neutralize5.png`, `${base}/neutralize6.png`] },
  { name: 'Нет', description: '', links: [`${base}/no1.png`, `${base}/no2.png`, `${base}/no3.png`, `${base}/no4.png`, `${base}/no5.png`] },
  { name: 'Атаковать', description: '', links: [`${base}/attack1.png`, `${base}/attack2.png`, `${base}/attack3.png`, `${base}/attack4.png`] },
  { name: 'Пропустить', description: '', links: [`${base}/skip1.png`, `${base}/skip2.png`, `${base}/skip3.png`, `${base}/skip4.png`] },
  { name: 'Одолжение', description: '', links: [`${base}/borrow1,png`,`${base}/borrow2,png`,`${base}/borrow3,png`,`${base}/borrow4,png`] },
  { name: 'Перемешать', description: '', links: [`${base}/mix1.png`, `${base}/mix2.png`, `${base}/mix3.png`, `${base}/mix4.png`] },
  { name: 'Заглянуть в будущее', description: '', links: [`${base}/future1.png`, `${base}/future2.png`, `${base}/future3.png`, `${base}/future4.png`] },
  { name: 'Котенок', description: '', links: [`${base}/tacocat.png`, `${base}/tacocat.png`, `${base}/tacocat.png`, `${base}/tacocat.png`] },
  { name: 'Котенок', description: '', links: [`${base}/rainbowcat.png`, `${base}/rainbowcat.png`, `${base}/rainbowcat.png`, `${base}/rainbowcat.png`] },
  { name: 'Котенок', description: '', links: [`${base}/potatocat.png`, `${base}/potatocat.png`, `${base}/potatocat.png`, `${base}/potatocat.png`] },
  { name: 'Котенок', description: '', links: [`${base}/meloncat.png`, `${base}/meloncat.png`, `${base}/meloncat.png`, `${base}/meloncat.png`] },
  { name: 'Котенок', description: '', links: [`${base}/beardcat.png`, `${base}/beardcat.png`, `${base}/beardcat.png`, `${base}/beardcat.png`] },
];

export default cardType;
