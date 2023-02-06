import React from 'react';

export interface IModalBotProps {
  title: string;
}
export default function ModalBot({ title }: IModalBotProps) {
  return (
    <div className="modal-bot">
      <h1 className="modal-bot-title">{title}</h1>
      <div className="levels">
        <div className="levels-item easy">
          <p className="levels-desc"> Easy</p>
        </div>
        <div className="levels-item normal">
          <p className="levels-desc">Normal</p>
        </div>
        <div className="levels-item hard">
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
