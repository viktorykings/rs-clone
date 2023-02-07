import React from 'react';

export interface IBotProps {
  name: string;
  isBot: boolean;
  link: string;
  level: string;
  deletePlayer: (name: string) => void;
  brdrColor: string;
}

export default function Bot({
  name,
  isBot = true,
  link,
  level,
  deletePlayer,
  // editPlayer,
  brdrColor,
}: IBotProps) {
  const viewTemplate = (
    <>
      <div className="bot">
        <div className="bot-avatar" />
        <p className="bot-name">{name}</p>

        {isBot && <p className="bot-lavel hidden">{level}</p>}
      </div>
      <div className="btn-group">
        {isBot && (
          <button
            type="button"
            className="btn"
            onClick={() => deletePlayer(name)}
          >
            DELETE
          </button>
        )}
      </div>
    </>
  );

  return (
    <li
      style={{
        borderColor: brdrColor,

        backgroundImage: `url(${link})`,
      }}
      className="list-item"
    >
      {viewTemplate}
    </li>
  );
}
