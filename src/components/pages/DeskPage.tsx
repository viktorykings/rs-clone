import React from 'react';
import Player from './Players';
import createGame from '../../controller/createGame';
// import card from '../../assets/cards/beardcat.png';
// import card2 from '../../assets/cards/attack1.png';
// import card3 from '../../assets/cards/attack2.png';
// import card from '../../../public/cards';
// import card1 from '../../assets/cards/neutralize1.png';
import createPlayer from '../../controller/createPlayer';

export default function DeskPage(): JSX.Element {
  const player = createPlayer('a');
  const player1 = createPlayer('и');
  const player2 = createPlayer('л');
  const game = createGame([player, player1, player2]);
  console.log('player1', game.players[0].deck);
  console.log('player2', game.players[1].deck);
  console.log('player2', game.players[2].deck);
  console.log('desk', game.deskDeck);
  // console.log('desk', game.playersDeck);
  console.log('showcards', game.showCards);
  return (
    <main className="desk">
      <div className="other-players">
        {game.players.map((el) => <Player key={el.name} name={el.name} />)}
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
        <Player name="main" />
        <div className="main-player-cards">
          {game.players[0].deck.map((el) => <img src={el.link} alt={el.name} key={el.id} />)}
          {/* <img src={card} alt="" /> */}
          {/* <img src={card1} alt="" />/ */}
          {/* <img src={card} alt="" />
          <img src={card2} alt="" />
          <img src={card3} alt="" /> */}
        </div>
      </div>
    </main>
  );
}
