import React from 'react';
import IMainPlayerSettings from '../../../interface/IMainPlayerSettings';

export default function MainPlayer({
  name,
  isBot,
  level,
  avatar,
  openModalChangeName,
  openModalChangeAvatar,
  localLang,
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
          {localLang[0]}
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => {
            openModalChangeAvatar();
          }}
        >
          {localLang[1]}
        </button>
      </div>
    </div>
  );

  return <div className="list-item">{viewTemplate}</div>;
}
