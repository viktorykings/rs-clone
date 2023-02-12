import React from 'react';
import { Link } from 'react-router-dom';
import IGame from '../../interface/IGame';

interface EndGame {
  show: boolean,
  game: IGame,
}

export default function EndGameModal({ show, game }: EndGame): JSX.Element {
  return (
    <div className={show ? 'end-game-bg-active' : 'end-game-bg'}>
      <div className="end-game">
        <h2>{game.gameState.message}</h2>
        <div className="end-game-buttons">
          <Link to="/gamesettings"><button type="button">Новая игра</button></Link>
          <Link to="/"><button type="button">Главное меню</button></Link>
        </div>
      </div>
    </div>
  );
}
