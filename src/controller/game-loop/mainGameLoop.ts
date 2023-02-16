import IGame from '../../interface/IGame';
import findIndexPlayerTern from '../game-event/subevent/findIndexPlayerTern';
import combo2AutoCardGive from './subevent/combo2AutoCartGive';
import combo2AutoPlayerChoise from './subevent/combo2AutoChoisePlayer';
import combo3AutoChoise from './subevent/combo3AutoChoise';
import combo3AutoCardGive from './subevent/combo3AutoCartGive';
import combo5AutoCardGive from './subevent/combo5AutoCartGive';
import waitAnserTurn from './waitAnsweTern';
import waitEndMove from './waitEndMove';
import waitPlayerTurn from './waitPlayerTurn';
import moveAutoNeutralize from './subevent/moveAutoNeutralize';
import endMoveAutoNeutralize from './subevent/endMoveAutoNeutralize';
import endExplosion from './subevent/endExplosion';
import endWaitEndNot from './subevent/endWaitEndNot';
import endAutoEndLook from './subevent/endAutoEndLook';
import favorAutoPlayerChoice from './subevent/favorAutoPlayerChoice';
import favorAutoCardGive from './subevent/favorAutoCardGive';
import win from './subevent/win';
import makeMove from '../game-event/makeMove';
import moveNot from '../game-event/subevent/moveNot';
import combo2ChoisePlayer from '../game-event/subevent/combo2ChoisePlayer';
import combo3ChoisePlayer from '../game-event/subevent/combo3ChoisePlayer';
import combo2GiveCard from '../game-event/subevent/combo2GiveCard';
import combo3GiveCard from '../game-event/subevent/combo3GiveCard';
import combo5GiveCard from '../game-event/subevent/combo5GiveCard';
import favorChoicePlayer from '../game-event/subevent/favorChoicePlayer';
import favorGiveCard from '../game-event/subevent/favorGiveCard';
import endMoveNeutralize from '../game-event/subevent/endMoveNeutralize';
import waitNotToNot from './waitNotToNot';
import endWaitEndNotToNot from './subevent/endWaitEndNotToNot';

function mainGameLoop(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  console.log(game.gameState.timeLeft);
  let myGame = { ...game };
  const inPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  const funcState = myGame.gameState.functionState;
  if (myGame.gameState.timeLeft <= 1) {
    if (myGame.gameState.timerId !== null) {
      clearInterval(myGame.gameState.timerId);
      myGame.gameState.timerId = null;
    }

    switch (funcState) {
      case 'waitPlayerTurn':
      case 'waitTakeCardDeskDeck': waitPlayerTurn(myGame, setGame); return;
      case 'waitEndMove': waitEndMove(myGame, setGame); return;
      case 'waitAnserTurn': waitAnserTurn(myGame, setGame); return;
      case 'waitCombo2': combo2AutoPlayerChoise(myGame, setGame); return;
      case 'waitPlayerCombo2': combo2AutoCardGive(myGame, setGame); return;
      case 'waitCombo3': combo3AutoChoise(myGame, setGame); return;
      case 'waitPlayerCombo3': combo3AutoCardGive(myGame, setGame); return;
      case 'waitCombo5': combo5AutoCardGive(myGame, setGame); return;
      case 'waitNeutralize': moveAutoNeutralize(myGame, setGame); return;
      case 'endNeutralize': endMoveAutoNeutralize(myGame, setGame); return;
      case 'waitExplosion': endExplosion(myGame, setGame); return;
      case 'waitEndNot': endWaitEndNot(myGame, setGame); return;
      case 'waitPlayerLook': endAutoEndLook(myGame, setGame); return;
      case 'waitFavorPlayer': favorAutoPlayerChoice(myGame, setGame); return;
      case 'waitFavorPlayerCard': favorAutoCardGive(myGame, setGame); return;
      case 'win': win(myGame, setGame); return;
      case 'waitNotToNot': waitNotToNot(myGame, setGame); return;
      case 'waitEndNotToNot': endWaitEndNotToNot(myGame, setGame); return;
      default: return;
    }
  }

  if (myGame.gameState.functionState === 'waitAnserTurn'
    && myGame.gameState.timeLeft === 4
    && myGame.players[inPl].isBot) {
    // вызов функции хода бота
    // console.log('Bot maybe do move NOT');
    const idCardBotNot = myGame.gameState.bot.onAnswerTurn(
      myGame.players[inPl],
      myGame.players,
      myGame.gameState.playerWaitAnswer,
    );
    if (idCardBotNot > -1) {
      myGame = (moveNot(myGame, idCardBotNot));
    } else {
      myGame.gameState.timeLeft = 1;
    }
  }

  if (myGame.gameState.functionState === 'waitCombo2'
    && myGame.gameState.timeLeft === 7
    && myGame.players[inPl].isBot) {
    // вызов функции бота выбора игрока для Космбо2
    // console.log('Bot maybe choise player');
    const choicePlayerName = myGame.gameState.bot.onComboPlayerChoice(
      myGame.gameState.modalPlayers,
      myGame.players,
      myGame.gameState.playerTurn,
    );
    myGame = combo2ChoisePlayer(myGame, choicePlayerName);
  }

  if (myGame.gameState.functionState === 'waitPlayerCombo2'
    && myGame.gameState.timeLeft === 7
    && myGame.players[inPl].isBot) {
    // вызов функции бота выбора игрока для Космбо2
    // console.log('Bot maybe choise card');
    const idCard = myGame.gameState.bot.onCombo2CardChoice(myGame.gameState.modalDeck);
    myGame = combo2GiveCard(myGame, idCard);
  }

  if (myGame.gameState.functionState === 'waitCombo3'
    && myGame.gameState.timeLeft === 7
    && myGame.players[inPl].isBot) {
    // вызов функции бота выбора игрока и типа карты для Космбо3
    // console.log('Bot maybe choise player and type card');
    const choicePlayerName = myGame.gameState.bot.onComboPlayerChoice(
      myGame.gameState.modalPlayers,
      myGame.players,
      myGame.gameState.playerTurn,
    );
    myGame = combo3ChoisePlayer(myGame, choicePlayerName);
  }

  if (myGame.gameState.functionState === 'waitPlayerCombo3'
    && myGame.gameState.timeLeft === 7
    && myGame.players[inPl].isBot) {
    // вызов функции бота выбора игрока для Космбо2
    // console.log('Bot maybe choise card');
    const idCard = myGame.gameState.bot.onCombo3CardChoice(myGame.gameState.modalDeck);
    myGame = combo3GiveCard(myGame, idCard);
  }

  if (myGame.gameState.functionState === 'waitCombo5'
    && myGame.gameState.timeLeft === 7
    && myGame.players[inPl].isBot) {
    // вызов функции бота выбора карты для Космбо5
    // console.log('Bot maybe choise card from rebaund');
    const idCard = myGame.gameState.bot.onCombo5CardChoice(myGame.reboundDeck);
    myGame = combo5GiveCard(myGame, idCard);
  }

  if (myGame.gameState.functionState === 'waitPlayerTurn'
    && myGame.gameState.timeLeft === 7
    && myGame.players[inPl].isBot) {
    // вызов функции хода бота
    // console.log('Bot do move');
    const botMove = myGame.gameState.bot.onTurn(
      myGame.players[inPl],
      myGame.reboundDeck,
      myGame.deskDeck,
      myGame.players,
    );
    if (botMove.idCard > -1) {
      myGame.gameState.stateGame = botMove.stateGame;
      myGame = (makeMove(myGame, botMove.idCard));
    } else {
      myGame.gameState.timeLeft = 1;
    }
  }

  if (myGame.gameState.functionState === 'waitFavorPlayer'
    && myGame.gameState.timeLeft === 7
    && myGame.players[inPl].isBot) {
    // вызов функции бота выбора игрока для одолжить
    // console.log('Bot maybe choise player for Favor');
    const choicePlayerName = myGame.gameState.bot.onComboPlayerChoice(
      myGame.gameState.modalPlayers,
      myGame.players,
      myGame.gameState.playerTurn,
    );
    myGame = favorChoicePlayer(myGame, choicePlayerName);
  }

  if (myGame.gameState.functionState === 'waitFavorPlayerCard'
  && myGame.gameState.timeLeft === 7
  && myGame.players[inPl].isBot) {
  // вызов функции бота выбора карты, которую нужно отдать Одолжить
  // console.log('Bot maybe choise player for Favor');
    const indPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
    const idCard = myGame.gameState.bot.onFavorChoiceCard(myGame.players[indPl]);
    myGame = favorGiveCard(myGame, idCard);
  }

  if (myGame.gameState.functionState === 'endNeutralize'
  && myGame.gameState.timeLeft === 7
  && myGame.players[inPl].isBot) {
  // вызов функции бота выбора карты, которую нужно отдать Одолжить
  // console.log('Bot maybe choise player for Favor');
    const nomCard = myGame.gameState.bot.onPutExplosiveKitten(
      myGame.players,
      myGame.gameState.playerTurn,
    );
    myGame = endMoveNeutralize(myGame, nomCard);
  }

  if (myGame.gameState.timeLeft > 1) {
    myGame.gameState.timeLeft -= 1;
  }
  setGame(myGame);
}

export default mainGameLoop;
