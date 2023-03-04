import React from 'react';
import { Link } from 'react-router-dom';
import IGame from '../../interface/IGame';
import langs from '../../const/localization';

interface EndGame {
  show: boolean,
  game: IGame,
}

export default function EndGameModal({ show, game }: EndGame): JSX.Element {
  const currLang = game.settings.lang;
  return (
    <div className={show ? 'end-game-bg-active' : 'end-game-bg'}>
      <div className="end-game">
        <h2>{game.gameState.message}</h2>
        <div className="end-game-buttons">
          <Link to="/gamesettings"><button type="button">{langs[currLang].endGameModal.buttons[0]}</button></Link>
          <Link to="/"><button type="button">{langs[currLang].endGameModal.buttons[1]}</button></Link>
        </div>
      </div>
    </div>
  );
}
