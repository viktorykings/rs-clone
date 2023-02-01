import React from 'react';

export interface IPlayerProps {
  name: string;
  isBot: boolean;
  level: string;
  deletePlayer: (name: string) => void;
}

export default function PlayerSettings({
  name,
  isBot,
  level,
  deletePlayer,
}: IPlayerProps) {
  return (
    <li className="list-item">
      <div className="player">
        <div className="player-avatar" />
        <p className="player-name">{name}</p>
        {isBot && <p className="player-lavel">{level}</p>}
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit
          <span className="visually-hidden">{name}</span>
        </button>
        {isBot && (
          <button
            type="button"
            className="btn"
            onClick={() => deletePlayer(name)}
          >
            Delete
            <span className="visually-hidden">{name}</span>
          </button>
        )}
      </div>
    </li>
  );
}
