import React from 'react';

interface Iplayer {
  name: string,
  className: string,
  link: string,
}

export default function Player({
  name, className, link,
  // deck, isBot,
}: Iplayer): JSX.Element {
  return (
    <div className={`player ${className}`}>
      <div className="info">
        <p>{name}</p>
      </div>
      <img src={link} alt={name} />
    </div>
  );
}
