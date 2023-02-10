import React from 'react';
import IModalBotProps from '../../../interface/IModalBotProps';

export default function ModalBot({
  title,
  level,
  updateLevel,
  setGameLevel,
  onSetLevel,
}: IModalBotProps) {
  function toggleClass(target: EventTarget) {
    const levelItems = document.querySelectorAll('.levels-item');
    levelItems.forEach((item) => item.classList.remove('active'));
    (target as HTMLElement).classList.toggle('active');
  }
  return (
    <div className="wrap-modal">
      <div className="modal">
        <h1 className="modal-title">{title}</h1>
        <h3 className="modal-bot-level">{level}</h3>
        <div className="levels">
          <div
            className="levels-item easy"
            onClick={(e) => {
              updateLevel('easy');
              toggleClass(e.target);
              setGameLevel('easy');
            }}
            onKeyPress={() => updateLevel('easy')}
            role="presentation"
          >
            <p className="levels-desc"> Easy</p>
          </div>
          <div
            className="levels-item normal"
            onClick={(e) => {
              updateLevel('normal');
              toggleClass(e.target);
              setGameLevel('normal');
            }}
            onKeyPress={() => updateLevel('normal')}
            role="presentation"
          >
            <p className="levels-desc">Normal</p>
          </div>
          <div
            className="levels-item hard"
            onClick={(e) => {
              updateLevel('hard');
              toggleClass(e.target);
              setGameLevel('hard');
            }}
            onKeyPress={() => updateLevel('hard')}
            role="presentation"
          >
            <p className="levels-desc">Hard</p>
          </div>
        </div>
        <div className="btn-groupe">
          <button type="button" onClick={() => onSetLevel()}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
