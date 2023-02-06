import React from 'react';

export interface IModalBotProps {
  title: string;
  level: string;
  updateLevel: (value: string) => void;
  setGameLevel: (value: string) => void;
}
export default function ModalBot({
  title,
  level,
  updateLevel,
  setGameLevel,
}: IModalBotProps) {
  function toggleClass(target: EventTarget) {
    const levelItems = document.querySelectorAll('.levels-item');
    levelItems.forEach((item) => item.classList.remove('active'));
    (target as HTMLElement).classList.toggle('active');
  }
  return (
    <div className="modal-bot">
      <h1 className="modal-bot-title">{title}</h1>
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
        <button type="button">OK</button>
        <button type="button">Cancel</button>
      </div>
    </div>
  );
}
