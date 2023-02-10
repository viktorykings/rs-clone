import IPlayer from '../interface/IPlayer';
import TLevel from '../interface/TLevel';
import ICard from '../interface/ICard';

function createPlayer(
  name: string,
  isBot = true,
  link = '',
  levelBot: TLevel = 'easy',
): IPlayer {
  const deck: ICard[] = [];
  const doubleCats: ICard[][] = [];
  const tripleCats: ICard[][] = [];
  const fiveCats: ICard[][] = [];

  return {
    name,
    link,
    isBot,

    levelBot: !isBot ? null : levelBot,
    countTakeCard: 0,
    active: true,
    deck,
    combos: {
      doubleCats,
      tripleCats,
      fiveCats,
    },
    buttons: {
      comboEnabled: false,
      dobleEnabled: false,
      tripleEnabled: false,
      fiveEnabled: false,
      nameEnabled: false,
      finishMove: false,
      dobleVisible: false,
      tripleVisible: false,
      fiveVisible: false,
    },
  };
}

export default createPlayer;
