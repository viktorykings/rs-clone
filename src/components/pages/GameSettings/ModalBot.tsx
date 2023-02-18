import React from 'react';
import IModalBotProps from '../../../interface/IModalBotProps';

export default function ModalBot({
  title,
  level,
  updateLevel,
  setGameLevel,
  onSetLevel,
  localLang,
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
              updateLevel(localLang[0]);
              toggleClass(e.target);
              setGameLevel('easy');
            }}
            onKeyPress={() => updateLevel(localLang[0])}
            role="presentation"
          >
            <p className="levels-desc">{localLang[0]}</p>
          </div>
          <div
            className="levels-item normal"
            onClick={(e) => {
              updateLevel(localLang[1]);
              toggleClass(e.target);
              setGameLevel('normal');
            }}
            onKeyPress={() => updateLevel(localLang[1])}
            role="presentation"
          >
            <p className="levels-desc">{localLang[1]}</p>
          </div>
          <div
            className="levels-item hard"
            onClick={(e) => {
              updateLevel(localLang[2]);
              toggleClass(e.target);
              setGameLevel('hard');
            }}
            onKeyPress={() => updateLevel(localLang[2])}
            role="presentation"
          >
            <p className="levels-desc">{localLang[2]}</p>
          </div>
        </div>
        <div className="btn-group">
          <button className="btn" type="button" onClick={() => onSetLevel()}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
