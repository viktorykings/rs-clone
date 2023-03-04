import ICard from './ICard';
import TGameEvent from './TGameEvent';

interface IHistory {
  playerName: string,
  event: TGameEvent,
  card: ICard [],
  result: boolean
}

export default IHistory;
