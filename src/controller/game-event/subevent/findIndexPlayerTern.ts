import IPlayer from '../../../interface/IPlayer';

function findIndexPlayerTern(players: IPlayer[], playerName: string): number {
  return players.findIndex((pl) => pl.name === playerName);
}

export default findIndexPlayerTern;
