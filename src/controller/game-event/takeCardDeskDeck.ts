import IGame from '../../interface/IGame';
import addHistory from './subevent/addHistory';

function takeCardDeskDeck(game: IGame) {
  const myGame = { ...game };
  const iPl = myGame.players.findIndex((pl) => pl.name === myGame.gameState.playerTern);
  if (myGame.players[iPl].countTakeCard > 0) {
    const card = myGame.deskDeck.splice(-1, 1);
    myGame.players[iPl].countTakeCard -= 1;
    if (card[0].type !== 0) {
      myGame.players[iPl].deck.push(...card);
      myGame.players[iPl].buttons.finishMove = myGame.players[iPl].countTakeCard === 0;
      myGame.gameState.message = `${myGame.players[iPl].name} взял 1 карту.`;
      addHistory(myGame, 'takeCardDeskDeck', card, true);
    } else {
      myGame.gameState.stateGame = 'explosion';
      myGame.showCards.push(...card);
      myGame.gameState.message = `${myGame.players[iPl].name} вытянул 'Взрывного котенка'.`;
      // eslint-disable-next-line no-param-reassign
      myGame.players[iPl].deck.map((el) => { el.enabled = false; return el; });
      addHistory(myGame, 'takeCardDeskDeck', card, true);
    }
  } else {
    myGame.gameState.message = `${myGame.players[iPl].name} не нужно брать карты!`;

    addHistory(myGame, 'takeCardDeskDeck', [], false);
  }
  return myGame;
}

export default takeCardDeskDeck;
