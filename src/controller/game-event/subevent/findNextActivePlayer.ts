import IGame from '../../../interface/IGame';
import IPlayer from '../../../interface/IPlayer';

function findNextActivePlayer(myGame: IGame): IPlayer {
  const acPl = myGame.players.filter((pl) => pl.active);
  const indAcPl = acPl.findIndex((pl) => pl.name === myGame.gameState.playerTurn);
  const indPl = (indAcPl + 1 === acPl.length ? 0 : indAcPl + 1);
  return acPl[indPl];
}

export default findNextActivePlayer;
