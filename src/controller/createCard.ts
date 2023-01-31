import ICard from '../interface/ICard';
import cardType from '../const/cardType';

function createCard(id: number, type: number): ICard {
  return {
    id,
    type,
    name: cardType[type].name,
    nameCombo: '',
    numberCombo: -1,
    enabled: false,
    link: '',
    description: cardType[type].description,
  };
}

export default createCard;
