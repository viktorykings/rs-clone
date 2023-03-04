import IGame from '../../interface/IGame';
import findIndexPlayerTern from './subevent/findIndexPlayerTern';
import takeCardDeskDeck from './takeCardDeskDeck';

function onTakeCard(game: IGame): IGame {
  let myGame = { ...game };
  const inPl = findIndexPlayerTern(myGame.players, myGame.gameState.playerTurn);
  if (myGame.players[inPl].isBot === false
    && (myGame.gameState.functionState === 'waitPlayerTurn'
      || myGame.gameState.functionState === 'waitTakeCardDeskDeck')
  ) {
    myGame = takeCardDeskDeck(game);
  }
  return myGame;
}

export default onTakeCard;
