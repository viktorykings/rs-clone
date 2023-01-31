import React from 'react';
import Player from './Players';

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
        </div>
      </div>
    </main>
  );
}
