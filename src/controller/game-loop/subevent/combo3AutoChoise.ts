import IGame from '../../../interface/IGame';
import combo3Choise from '../../game-event/subevent/combo3Choise';

function combo3AutoChoise(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  const len = game.gameState.modalPlayers.length;
  const indPl = Math.floor(Math.random() * len);
  const lenDeck = game.gameState.modalDeck.length;
  const indCard = Math.floor(Math.random() * lenDeck);
  const myGame = combo3Choise(
    game,
    game.gameState.modalPlayers[indPl].name,
    game.gameState.modalDeck[indCard].type,
  );
  setGame(myGame);
}

export default combo3AutoChoise;
