import ICardTypesObj from '../interface/ICardTypesObj';

const baseRu = '/cards/ru';
const baseEn = '/cards/en';
const cardType: ICardTypesObj = {
  ru: [
    { name: 'Взрывной котенок', description: '', links: [`${baseRu}/bang1.png`, `${baseRu}/bang2.png`, `${baseRu}/bang3.png`, `${baseRu}/bang4.png`] },
    { name: 'Обезвредить', description: '', links: [`${baseRu}/defuse1.png`, `${baseRu}/defuse2.png`, `${baseRu}/defuse3.png`, `${baseRu}/defuse4.png`, `${baseRu}/defuse5.png`, `${baseRu}/defuse6.png`] },
    { name: 'Нет', description: '', links: [`${baseRu}/no1.png`, `${baseRu}/no2.png`, `${baseRu}/no3.png`, `${baseRu}/no4.png`, `${baseRu}/no5.png`] },
    { name: 'Атаковать', description: '', links: [`${baseRu}/attack1.png`, `${baseRu}/attack2.png`, `${baseRu}/attack3.png`, `${baseRu}/attack4.png`] },
    { name: 'Пропустить', description: '', links: [`${baseRu}/skip1.png`, `${baseRu}/skip2.png`, `${baseRu}/skip3.png`, `${baseRu}/skip4.png`] },
    { name: 'Одолжение', description: '', links: [`${baseRu}/favor1.png`, `${baseRu}/favor2.png`, `${baseRu}/favor3.png`, `${baseRu}/favor4.png`] },
    { name: 'Перемешать', description: '', links: [`${baseRu}/mix1.png`, `${baseRu}/mix2.png`, `${baseRu}/mix3.png`, `${baseRu}/mix4.png`] },
    { name: 'Заглянуть в будущее', description: '', links: [`${baseRu}/future1.png`, `${baseRu}/future2.png`, `${baseRu}/future3.png`, `${baseRu}/future4.png`] },
    { name: 'Котенок', description: '', links: [`${baseRu}/tacocat.png`, `${baseRu}/tacocat.png`, `${baseRu}/tacocat.png`, `${baseRu}/tacocat.png`] },
    { name: 'Котенок', description: '', links: [`${baseRu}/rainbowcat.png`, `${baseRu}/rainbowcat.png`, `${baseRu}/rainbowcat.png`, `${baseRu}/rainbowcat.png`] },
    { name: 'Котенок', description: '', links: [`${baseRu}/potatocat.png`, `${baseRu}/potatocat.png`, `${baseRu}/potatocat.png`, `${baseRu}/potatocat.png`] },
    { name: 'Котенок', description: '', links: [`${baseRu}/meloncat.png`, `${baseRu}/meloncat.png`, `${baseRu}/meloncat.png`, `${baseRu}/meloncat.png`] },
    { name: 'Котенок', description: '', links: [`${baseRu}/beardcat.png`, `${baseRu}/beardcat.png`, `${baseRu}/beardcat.png`, `${baseRu}/beardcat.png`] },
  ],
  en: [
    { name: 'Exploding kitten', description: '', links: [`${baseEn}/bang1.jpeg`, `${baseEn}/bang2.jpeg`, `${baseEn}/bang3.jpeg`, `${baseEn}/bang4.jpeg`] },
    { name: 'Defuse', description: '', links: [`${baseEn}/defuse1.jpeg`, `${baseEn}/defuse2.jpeg`, `${baseEn}/defuse3.jpeg`, `${baseEn}/defuse4.jpeg`, `${baseEn}/defuse5.jpeg`, `${baseEn}/defuse6.jpeg`] },
    { name: 'Nope', description: '', links: [`${baseEn}/no1.jpeg`, `${baseEn}/no2.jpeg`, `${baseEn}/no3.jpeg`, `${baseEn}/no4.jpeg`, `${baseEn}/no5.jpeg`] },
    { name: 'Attack', description: '', links: [`${baseEn}/attack1.png`, `${baseEn}/attack2.png`, `${baseEn}/attack3.png`, `${baseEn}/attack4.png`] },
    { name: 'Skip', description: '', links: [`${baseEn}/skip1.jpeg`, `${baseEn}/skip2.jpeg`, `${baseEn}/skip3.jpeg`, `${baseEn}/skip4.jpeg`] },
    { name: 'Favor', description: '', links: [`${baseEn}/favor1.jpeg`, `${baseEn}/favor2.jpeg`, `${baseEn}/favor3.jpeg`, `${baseEn}/favor4.jpeg`] },
    { name: 'Shuffle', description: '', links: [`${baseEn}/mix1.jpeg`, `${baseEn}/mix2.jpeg`, `${baseEn}/mix3.jpeg`, `${baseEn}/mix4.jpeg`] },
    { name: 'See the future', description: '', links: [`${baseEn}/future1.jpeg`, `${baseEn}/future2.jpeg`, `${baseEn}/future3.jpeg`, `${baseEn}/future4.jpeg`] },
    { name: 'Kitten', description: '', links: [`${baseEn}/tacocat.jpeg`, `${baseEn}/tacocat.jpeg`, `${baseEn}/tacocat.jpeg`, `${baseEn}/tacocat.jpeg`] },
    { name: 'Kitten', description: '', links: [`${baseEn}/rainbowcat.jpeg`, `${baseEn}/rainbowcat.jpeg`, `${baseEn}/rainbowcat.jpeg`, `${baseEn}/rainbowcat.jpeg`] },
    { name: 'Kitten', description: '', links: [`${baseEn}/potatocat.jpeg`, `${baseEn}/potatocat.jpeg`, `${baseEn}/potatocat.jpeg`, `${baseEn}/potatocat.jpeg`] },
    { name: 'Kitten', description: '', links: [`${baseEn}/meloncat.jpeg`, `${baseEn}/meloncat.jpeg`, `${baseEn}/meloncat.jpeg`, `${baseEn}/meloncat.jpeg`] },
    { name: 'Kitten', description: '', links: [`${baseEn}/beardcat.jpeg`, `${baseEn}/beardcat.jpeg`, `${baseEn}/beardcat.jpeg`, `${baseEn}/beardcat.jpeg`] },
  ],
};

export default cardType;
