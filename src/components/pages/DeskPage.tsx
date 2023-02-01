import React from 'react';
import Player from './Players';
import card from '../../assets/cards/beardcat.png';
import card2 from '../../assets/cards/attack1.png';
import card3 from '../../assets/cards/attack2.png';

export default function DeskPage(): JSX.Element {
  return (
    <main className="desk">
      <div className="other-players">
        <Player />
        <Player />
        <Player />
        <Player />
      </div>
      <div className="game">
        <div className="deck">
          <img src="" alt="deck" />
          <p>Left X cards!</p>
        </div>
        <div className="play-cards">
          <img src="" alt="card" />
        </div>
      </div>
      <div className="main-player">
        <Player />
        <div className="main-player-cards">
          <p>card</p>
          <p>card</p>
          <p>card</p>
          <img src={card} alt="" />
          <img src={card2} alt="" />
          <img src={card3} alt="" />
        </div>
      </div>
    </main>
  );
}
