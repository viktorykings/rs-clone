/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import Player from './Players';
import makeMove from '../../controller/game-event/makeMove';
import endMove from '../../controller/game-event/endMove';
import takeCardDeskDeck from '../../controller/game-event/takeCardDeskDeck';
import { Setter } from '../../interface/IGame';

const cardBack = 'cards/back.png';
const emptyCardsPlace = 'cards/empty.png';

export default function DeskPage({
  deskDeck, settings, players, reboundDeck, showCards, gameState, setGame,
}: Setter): JSX.Element {
  const [currentCard, setCurrentCard] = useState(-1);
  // const [activePlayer, setActivePlayer] = useState(gameState.playerTurn);
  // console.log(activePlayer);
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
        {players.slice(1, players.length).map((el) => <Player key={el.name} name={el.name} className={gameState.playerTurn /* activePlayer */ === el.name ? 'activePlayer' : ''} />)}
      </div>
      <div className="game">
        <p>{game.gameState.message}</p>
        <div className="deck">
          <img
            src={cardBack}
            alt="deck"
            onMouseDown={() => { setGame(takeCardDeskDeck.bind(null, game)); }}
          />
          <p>Left X cards!</p>
          {/* <button
            type="button"
            onMouseDown={() => {
              takeCardDeskDeck(game);
              console.log(game.players[0].deck);
            }}
          >
            Take card!
          </button> */}
        </div>
        <div className="play-cards">
          {// eslint-disable-next-line no-restricted-globals
          showCards.length === 0
            ? <img src={emptyCardsPlace} alt="card" />
            : showCards.map((card) => <img src={card.link} alt="card" key={card.id.toString()} />)
          }
        </div>
        <div className="rebound-deck">
          <img src={emptyCardsPlace} alt="card" />
        </div>
      </div>
      <div className="main-player">
        <Player name="main" className={gameState.playerTurn/* activePlayer */ === 'player1' ? 'activePlayer' : ''} />
        <div className="control-buttons">
          <button type="button" onClick={() => setGame(makeMove(game, currentCard))}>move</button>
          <button
            type="button"
            onClick={() => {
              setGame(endMove(game));
              // setActivePlayer(endMove(game).gameState.playerTurn);
            }}
            disabled={!game.players[0].buttons.finishMove}
          >
            end
          </button>
        </div>
        <div className="main-player-cards">
          {players[0].deck.map((el) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <img
              src={el.link}
              alt={el.name}
              key={el.id}
              onMouseDown={() => {
                setGame(makeMove.bind(null, game, el.id));
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
