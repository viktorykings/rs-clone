import ICard from './ICard';
import TLevel from './TLevel';

interface IPlayer {
  name: string,
  link: string,
  active: boolean,
  isBot: boolean,
  levelBot: null | TLevel,
  countTakeCard: number,
  deck: ICard [],
  combos: {
    doubleCats: ICard [] [],
    tripleCats: ICard [] [],
    fiveCats: ICard [] []
  },
  buttons: {
    comboEnabled: boolean;
    dobleEnabled: boolean;
    tripleEnabled: boolean;
    fiveEnabled: boolean;
    nameEnabled: boolean;
    finishMove: boolean;
    dobleVisible: boolean;
    tripleVisible: boolean;
    fiveVisible: boolean;
  },
  visibleCards: number[],
}

export default IPlayer;
