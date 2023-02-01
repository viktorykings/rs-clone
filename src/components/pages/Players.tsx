import React from 'react';

interface Iplayer {
  name: string
}

export default function Player({ name }: Iplayer): JSX.Element {
  return (
    <div className="player">
      <p>{name}</p>
      <img src="" alt="player1" />
      <div className="player-cards">cards</div>
    </div>
  );
}
