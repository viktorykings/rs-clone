import React from 'react';
import IMainPlayerSettings from '../../../interface/IMainPlayerSettings';

export default function MainPlayer({
  name,
  isBot,
  level,
  avatar,
  openModalChangeName,
  openModalChangeAvatar,
}: IMainPlayerSettings) {
  const viewTemplate = (
    <div className="human-player">
      <p className="human-player-name">{name}</p>
      <div
        className="human-avatar"
        style={{ backgroundImage: `url(${avatar})` }}
      />
      {isBot && <p className="player-lavel">{level}</p>}

      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => {
            openModalChangeName();
          }}
        >
          Edit Name
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => {
            openModalChangeAvatar();
          }}
        >
          Choose Avatar
        </button>
      </div>
    </div>
  );

  return <div className="list-item">{viewTemplate}</div>;
}
