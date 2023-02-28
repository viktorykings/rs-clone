import langs from '../../../const/localization';
import IGame from '../../../interface/IGame';

function win(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  const currLang = game.settings.lang;
  const base = langs[currLang].endGameModal.buttons;
  const myGame = { ...game };
  myGame.gameState.message = `${base[2]}`;
  myGame.gameState.endGame = true;
  setGame(myGame);
}

export default win;
