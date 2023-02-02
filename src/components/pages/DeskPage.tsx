import React, { useState } from 'react';
import Player from './Players';
import createGame from '../../controller/createGame';
import createPlayer from '../../controller/createPlayer';
import makeMove from '../../controller/game-event/makeMove';

const cardBack = 'cards/back.png';
const emptyCardsPlace = 'cards/empty.png';

export default function DeskPage(): JSX.Element {
  const player = createPlayer('a');
  const player1 = createPlayer('и');
  const player2 = createPlayer('л');
  const game = createGame([player, player1, player2]);
  const [currentCard, setCurrentCard] = useState(1);
  // const deck = game.deskDeck;
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
          <img src={cardBack} alt="deck" />
          <p>Left X cards!</p>
        </div>
        <div className="play-cards">
          <img src={emptyCardsPlace} alt="card" />
        </div>
        <div className="rebound-deck">
          <img src={emptyCardsPlace} alt="card" />
        </div>
      </div>
      <div className="main-player">
        <Player name="main" />
        <button type="button" onClick={() => makeMove(game, currentCard)}>move</button>
        <div className="main-player-cards">
          {game.players[0].deck.map((el) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <img
              src={el.link}
              alt={el.name}
              key={el.id}
              className={currentCard === el.id ? 'activeCard' : ''}
              onMouseDown={() => setCurrentCard(el.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
