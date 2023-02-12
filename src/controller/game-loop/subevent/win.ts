import IGame from '../../../interface/IGame';

function win(
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
): void {
  const myGame = { ...game };
  myGame.gameState.message = 'Вы победили!';
  setGame(myGame);
}

export default win;
