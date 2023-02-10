import React from 'react';

interface Iplayer {
  name: string,
  className: string
  // url?:string
}

export default function Player({ name, className }: Iplayer): JSX.Element {
  return (
    <div className={`player ${className}`}>
      <p>{name}</p>
      <img src="" alt="player1" />
    </div>
  );
}
