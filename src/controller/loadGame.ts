import IGame from '../interface/IGame';
import EasyBot from './game-loop/bots/easyBot';
import MiddleBot from './game-loop/bots/middleBot';
import HardBot from './game-loop/bots/hardBot';

function loadGame(): IGame | null {
// if (game.players.length === 0 && window.location.pathname === '/deck') {
  const myGame = localStorage.getItem('myGame');
  if (myGame !== null) {
    const mg: IGame = JSON.parse(myGame);
    mg.gameState.bot = new EasyBot();
    if (mg.players[0].levelBot === 'normal') mg.gameState.bot = new MiddleBot();
    if (mg.players[0].levelBot === 'hard') mg.gameState.bot = new HardBot();
    return mg;
  }
  return null;
}

export default loadGame;
