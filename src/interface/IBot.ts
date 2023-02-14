import IPlayer from './IPlayer';
import TStateGame from './IStateGame';
import ICard from './ICard';

interface IBot {
  onTurn(player: IPlayer): { idCard: number, stateGame: TStateGame };
  onAnswerTurn(player: IPlayer, players: IPlayer [], playerWaitAnswer: IPlayer[]): number;
  onComboPlayerChoice(modulPlayers: IPlayer[], players: IPlayer[], playerTurnName: string): string;
  onCombo2CardChoice(deck: ICard[]): number;
  onCombo3CardChoice(deck: ICard[]): number;
  onCombo5CardChoice(deck: ICard[]): number;
  onFavorChoiceCard(player: IPlayer): number;
  onPutExplosiveKitten(): number;
}

export default IBot;
