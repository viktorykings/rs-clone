import IPlayerSettings from '../../../interface/IPlayerSettings';
import utils from './utils';
// import langs from '../../../const/localization';

import av0 from '../../../assets/avCats/av0.png';
import av1 from '../../../assets/avCats/av1.png';
import av2 from '../../../assets/avCats/av2.png';
import av3 from '../../../assets/avCats/av3.png';
import av4 from '../../../assets/avCats/av4.png';
import av5 from '../../../assets/avCats/av5.png';
import av6 from '../../../assets/avCats/av6.png';
import av7 from '../../../assets/avCats/av7.png';
import defaultAvatar from '../../../assets/avatars/av9-big.jpg';

export const botNames = [
  'Diablo Gato',
  'Puss in Boots',
  'Пушистый донжуан',
  'Чупакабра',
  'Игривый дваждылюб',
  'Рыжий убийца',
  'bot 7',
  'bot 8',
  'bot 9',
];

export const avCats = [av0, av1, av2, av3, av4, av5, av6, av7];

const { getRandomBotName, getRandomBotAvatar } = utils();

export const defaultBot: IPlayerSettings[] = [
  {
    name: getRandomBotName(botNames),
    isBot: true,
    link: getRandomBotAvatar(avCats),
    levelBot: 'easy',
  },
];

export const defaultMainPlayer: IPlayerSettings = {
  name: 'Don Lokailo',
  isBot: false,
  link: defaultAvatar,
  levelBot: 'easy',
};
