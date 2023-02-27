import React from 'react';
import { Link } from 'react-router-dom';
import IGame from '../../interface/IGame';
import langs from '../../const/localization';
import { pauseGame } from './handlers/moveHandlers';

interface IPause {
//   pause: boolean,
  game: IGame,
  setGame: React.Dispatch<React.SetStateAction<IGame>>,
}

export default function EndGameModal({ game, setGame }: IPause): JSX.Element {
  const currLang = game.settings.lang;
  const isPaused = game.gameState.pause;
  console.log(isPaused);
  return (
    <div className={isPaused === true ? 'pause-modal-active' : 'pause-modal'}>
      {/* <div className="pause-modal"> */}
      <div className="pause-modal-buttons">
        <button type="button" onClick={() => pauseGame(game, false, setGame)}>continue</button>
        <Link to="/"><button type="button">{langs[currLang].endGameModal.buttons[1]}</button></Link>
      </div>
      {/* </div> */}
    </div>
  );
}
