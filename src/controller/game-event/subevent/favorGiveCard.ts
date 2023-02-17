import IGame from '../../../interface/IGame';
import findIndexPlayerTern from './findIndexPlayerTern';
import cardType from '../../../const/cardType';
import getPause from '../../game-loop/subevent/getPause';
import startStateDeck from '../../statePlayerDeck/startStateDeck';
import langs from '../../../const/localization';

function favorGiveCard(game: IGame, idCard: number): IGame {
  const currLang = game.settings.lang;
  const base = langs[currLang].deskPage.gameMsg.combos;
  const myGame = { ...game };
  myGame.gameState.functionState = 'waitPlayerTurn';
  myGame.gameState.stateGame = 'tern';
  const indPlGive = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  if (idCard > -1 && myGame.gameState.playerWaitAnswer[0] !== null) {
    const indCard = myGame.players[indPlGive].deck.findIndex((cr) => cr.id === idCard);
    const [card] = myGame.players[indPlGive].deck.splice(indCard, 1);
    // myGame.gameState.choicePlayer.deck.push(card);
    myGame.gameState.playerWaitAnswer[0].deck.push(card);
    myGame.gameState.message = `${myGame.gameState.playerWaitAnswer[0].name} ${base[0]} ${cardType[currLang][card.type].name}.`;
  } else {
    myGame.gameState.message = `${base[1]} ${myGame.gameState.choicePlayer?.name} ${base[2]}`;
  }
  myGame.gameState.timeLeft = getPause(
    myGame.gameState.playerWaitAnswer[0].isBot,
    myGame.gameState.functionState,
  );
  myGame.players[indPlGive] = startStateDeck(myGame.players[indPlGive], 'waitEndMove', false);
  myGame.gameState.choicePlayer = null;
  myGame.gameState.modalVisible = false;
  myGame.gameState.playerTurn = myGame.gameState.playerWaitAnswer[0].name;
  const indPlTake = findIndexPlayerTern(myGame.players, myGame.gameState.playerWaitAnswer[0].name);
  myGame.players[indPlTake] = startStateDeck(myGame.players[indPlTake], 'waitPlayerTurn', true);
  myGame.gameState.playerWaitAnswer.splice(0, 1);
  myGame.reboundDeck.push(...myGame.showCards.splice(0));
  if (myGame.gameState.timeLeft < 2) myGame.gameState.timeLeft = myGame.gameState.timeNeed;
  // console.log(myGame);
  return myGame;
}

export default favorGiveCard;
