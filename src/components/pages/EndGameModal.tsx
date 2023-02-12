import React from 'react';
import { Link } from 'react-router-dom';

interface EndGame {
  show: boolean,
}

export default function EndGameModal({ show }: EndGame): JSX.Element {
  return (
    <div className={show ? 'end-game-bg-active' : 'end-game-bg'}>
      <div className="end-game">
        <h1>you win!</h1>
        <div className="end-game-buttons">
          <Link to="/gamesettings"><button type="button">Новая игра</button></Link>
          <Link to="/"><button type="button">Главное меню</button></Link>
        </div>
      </div>
    </div>
  );
}
