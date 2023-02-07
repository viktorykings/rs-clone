import React from 'react';

export interface IMainPlayer {
  name: string;
  isBot: boolean;
  level: string;
  openModal: () => void;
}

export default function MainPlayer({
  name,
  isBot,
  level,
  openModal,
}: IMainPlayer) {
  const viewTemplate = (
    <div className="human-player">
      <p className="human-player-name">{name}</p>
      <div className="human-avatar" />
      {isBot && <p className="player-lavel">{level}</p>}

      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => {
            openModal();
          }}
        >
          Edit Name
        </button>
        <button type="button" className="btn" onClick={() => {}}>
          Choose Avatar
        </button>
      </div>
    </div>
  );

  return <div className="list-item">{viewTemplate}</div>;
}
