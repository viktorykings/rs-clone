import ICardTypesObj from '../interface/ICardTypesObj';

const baseRu = '/cards/ru';
const baseEn = '/cards/en';
const cardType: ICardTypesObj = {
ru: [
  { name: 'Взрывной котенок', description: '', links: [`${baseRu}/bang1.png`, `${baseRu}/bang2.png`, `${baseRu}/bang3.png`, `${baseRu}/bang4.png`] },
  { name: 'Обезвредить', description: '', links: [`${baseRu}/neutralize1.png`, `${baseRu}/neutralize2.png`, `${baseRu}/neutralize3.png`, `${baseRu}/neutralize4.png`, `${baseRu}/neutralize5.png`, `${baseRu}/neutralize6.png`] },
  { name: 'Нет', description: '', links: [`${baseRu}/no1.png`, `${baseRu}/no2.png`, `${baseRu}/no3.png`, `${baseRu}/no4.png`, `${baseRu}/no5.png`] },
  { name: 'Атаковать', description: '', links: [`${baseRu}/attack1.png`, `${baseRu}/attack2.png`, `${baseRu}/attack3.png`, `${baseRu}/attack4.png`] },
  { name: 'Пропустить', description: '', links: [`${baseRu}/skip1.png`, `${baseRu}/skip2.png`, `${baseRu}/skip3.png`, `${baseRu}/skip4.png`] },
  { name: 'Одолжение', description: '', links: [`${baseRu}/borrow1.png`, `${baseRu}/borrow2.png`, `${baseRu}/borrow3.png`, `${baseRu}/borrow4.png`] },
  { name: 'Перемешать', description: '', links: [`${baseRu}/mix1.png`, `${baseRu}/mix2.png`, `${baseRu}/mix3.png`, `${baseRu}/mix4.png`] },
  { name: 'Заглянуть в будущее', description: '', links: [`${baseRu}/future1.png`, `${baseRu}/future2.png`, `${baseRu}/future3.png`, `${baseRu}/future4.png`] },
  { name: 'Котенок', description: '', links: [`${baseRu}/tacocat.png`, `${baseRu}/tacocat.png`, `${baseRu}/tacocat.png`, `${baseRu}/tacocat.png`] },
  { name: 'Котенок', description: '', links: [`${baseRu}/rainbowcat.png`, `${baseRu}/rainbowcat.png`, `${baseRu}/rainbowcat.png`, `${baseRu}/rainbowcat.png`] },
  { name: 'Котенок', description: '', links: [`${baseRu}/potatocat.png`, `${baseRu}/potatocat.png`, `${baseRu}/potatocat.png`, `${baseRu}/potatocat.png`] },
  { name: 'Котенок', description: '', links: [`${baseRu}/meloncat.png`, `${baseRu}/meloncat.png`, `${baseRu}/meloncat.png`, `${baseRu}/meloncat.png`] },
  { name: 'Котенок', description: '', links: [`${baseRu}/beardcat.png`, `${baseRu}/beardcat.png`, `${baseRu}/beardcat.png`, `${baseRu}/beardcat.png`] },
],
en: [
  { name: 'Взрывной котенок', description: '', links: [`${baseEn}/bang1.png`, `${baseEn}/bang2.png`, `${baseEn}/bang3.png`, `${baseEn}/bang4.png`] },
  { name: 'Обезвредить', description: '', links: [`${baseEn}/neutralize1.png`, `${baseEn}/neutralize2.png`, `${baseEn}/neutralize3.png`, `${baseEn}/neutralize4.png`, `${baseEn}/neutralize5.png`, `${baseEn}/neutralize6.png`] },
  { name: 'Нет', description: '', links: [`${baseEn}/no1.png`, `${baseEn}/no2.png`, `${baseEn}/no3.png`, `${baseEn}/no4.png`, `${baseEn}/no5.png`] },
  { name: 'Атаковать', description: '', links: [`${baseEn}/attack1.png`, `${baseEn}/attack2.png`, `${baseEn}/attack3.png`, `${baseEn}/attack4.png`] },
  { name: 'Пропустить', description: '', links: [`${baseEn}/skip1.png`, `${baseEn}/skip2.png`, `${baseEn}/skip3.png`, `${baseEn}/skip4.png`] },
  { name: 'Одолжение', description: '', links: [`${baseEn}/borrow1.png`, `${baseEn}/borrow2.png`, `${baseEn}/borrow3.png`, `${baseEn}/borrow4.png`] },
  { name: 'Перемешать', description: '', links: [`${baseEn}/mix1.png`, `${baseEn}/mix2.png`, `${baseEn}/mix3.png`, `${baseEn}/mix4.png`] },
  { name: 'Заглянуть в будущее', description: '', links: [`${baseEn}/future1.png`, `${baseEn}/future2.png`, `${baseEn}/future3.png`, `${baseEn}/future4.png`] },
  { name: 'Котенок', description: '', links: [`${baseEn}/tacocat.png`, `${baseEn}/tacocat.png`, `${baseEn}/tacocat.png`, `${baseEn}/tacocat.png`] },
  { name: 'Котенок', description: '', links: [`${baseEn}/rainbowcat.png`, `${baseEn}/rainbowcat.png`, `${baseEn}/rainbowcat.png`, `${baseEn}/rainbowcat.png`] },
  { name: 'Котенок', description: '', links: [`${baseEn}/potatocat.png`, `${baseEn}/potatocat.png`, `${baseEn}/potatocat.png`, `${baseEn}/potatocat.png`] },
  { name: 'Котенок', description: '', links: [`${baseEn}/meloncat.png`, `${baseEn}/meloncat.png`, `${baseEn}/meloncat.png`, `${baseEn}/meloncat.png`] },
  { name: 'Котенок', description: '', links: [`${baseEn}/beardcat.png`, `${baseEn}/beardcat.png`, `${baseEn}/beardcat.png`, `${baseEn}/beardcat.png`] },
],
};

export default cardType;
