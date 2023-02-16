import ICard from '../interface/ICard';
import cardType from '../const/cardType';
// import ICardType from '../interface/ICardType';
// import ICardTypesObj from '../interface/ICardTypesObj';

function createCard(id: number, type: number, link: number, lang: string): ICard {
  return {
    id,
    type,
    name: cardType[lang][type].name,
    nameCombo: '',
    numberCombo: -1,
    enabled: false,
    link: cardType[lang][type].links[link],
    description: cardType[lang][type].description,
  };
}

export default createCard;
