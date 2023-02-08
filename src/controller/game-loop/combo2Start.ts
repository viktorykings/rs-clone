import IGame from '../../interface/IGame';

function combo2Start(game: IGame): IGame {
  const myGame = { ...game };
  myGame.gameState.functionState = 'waitCombo2';
  const mPlayers = myGame.players.filter(
    (pl) => pl.name !== myGame.gameState.playerTurn && pl.active,
  );
  myGame.gameState.modalPlayers = mPlayers;
  myGame.gameState.modalDeck = [];
  myGame.gameState.modalTitle = 'Выберите игрока, который отдаст Вам одну карту!';
  myGame.gameState.message = '';
  return myGame;
}

export default combo2Start;
