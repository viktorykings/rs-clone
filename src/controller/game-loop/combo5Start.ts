import langs from '../../const/localization';
import IGame from '../../interface/IGame';

function combo5Start(game: IGame): IGame {
  const currLang = game.settings.lang;
  const base = langs[currLang].deskPage.modalTitles.comboStart;
  const myGame = { ...game };
  myGame.reboundDeck.push(...myGame.showCards.splice(0));
  myGame.gameState.functionState = 'waitCombo5';
  myGame.gameState.message = `${base[2]}`;
  myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  return myGame;
}

export default combo5Start;
