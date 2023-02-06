import React from 'react';

interface Iplayer {
  name: string,
  className: string
  // url?:string
}

export default function Player({ name, className }: Iplayer): JSX.Element {
  return (
    <div className={`player ${className}`}>
      <div className="info">
        <p>{name}</p>
        {/* <button type="button">Take card!</button> */}
      </div>
      <img src="" alt="player1" />
    </div>
  );
}
