import React from 'react';
// import ICard from '../../interface/ICard';
// import IPlayer from '../../interface/IPlayer';

interface Iplayer {
  // id: number,
  name: string,
  className: string,
  // deck: ICard[],
  // isBot: boolean,
  // url?:string
}
// const cardBack = 'cards/back.png';

export default function Player({
  name, className,
  // deck, isBot,
}: Iplayer): JSX.Element {
  return (
    <div className={`player ${className}`}>
      <div className="info">
        <p>{name}</p>
        {/* <button type="button">Take card!</button> */}
      </div>
      <img src="" alt="player1" />
      {/* {isBot
        ? (
          <div className="bots-animated-cards">
            {deck.map((el) => <img key={el.id} src={cardBack} alt={el.name} />)}
          </div>
        )
        : ''} */}
    </div>
  );
}
