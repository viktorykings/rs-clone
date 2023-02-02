import React, { useState } from 'react';
import Player from './Players';
import makeMove from '../../controller/game-event/makeMove';
import endMove from '../../controller/game-event/endMove';
import takeCardDeskDeck from '../../controller/game-event/takeCardDeskDeck';
import { Setter } from '../../interface/IGame';

const cardBack = 'cards/back.png';
const emptyCardsPlace = 'cards/empty.png';

export default function DeskPage({
  deskDeck, settings, players, reboundDeck, showCards, gameState,
}: Setter): JSX.Element {
  const [currentCard, setCurrentCard] = useState(1);
  const game = {
    deskDeck,
    settings,
    players,
    reboundDeck,
    showCards,
    gameState,
  };
  return (
    <main className="desk">
      <div className="other-players">
        {players.map((el) => <Player key={el.name} name={el.name} />)}
      </div>
      <div className="game">
        <div className="deck">
          <img src={cardBack} alt="deck" />
          <p>Left X cards!</p>
          <button
            type="button"
            onMouseDown={() => {
              takeCardDeskDeck(game);
              console.log(game.players[0].deck);
            }}
          >
            Take card!
          </button>
        </div>
        <div className="play-cards">
          {// eslint-disable-next-line no-restricted-globals
          showCards.length
            ? <img src={emptyCardsPlace} alt="card" />
            : <img src={showCards[length - 1].link} alt="card" />
          }
        </div>
        <div className="rebound-deck">
          <img src={emptyCardsPlace} alt="card" />
        </div>
      </div>
      <div className="main-player">
        <Player name="main" />
        <div className="control-buttons">
          <button type="button" onClick={() => makeMove(game, currentCard)}>move</button>
          <button type="button" onClick={() => endMove(game)}>end</button>
        </div>
        <div className="main-player-cards">
          {players[0].deck.map((el) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <img
              src={el.link}
              alt={el.name}
              key={el.id}
              onMouseDown={() => {
                makeMove.bind(null, game, el.id);
                setCurrentCard(el.id);
                console.log(currentCard, el.id);
              }}
              className={currentCard === el.id ? 'activeCard' : ''}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
