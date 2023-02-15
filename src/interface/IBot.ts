import IPlayer from './IPlayer';
import TStateGame from './IStateGame';

interface IBot {
  onTurn(player: IPlayer): { idCard: number, stateGame: TStateGame };
}

export default IBot;
