/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import Player from './Players';
import makeMove from '../../controller/game-event/makeMove';
import endMove from '../../controller/game-event/endMove';
import takeCardDeskDeck from '../../controller/game-event/takeCardDeskDeck';
import { Setter } from '../../interface/IGame';
import infoCat from '../../assets/info-cat.png';

const cardBack = 'cards/back.png';
const emptyCardsPlace = 'cards/empty.png';
// const infoCat = '../../assets/info-cat.png';

export default function DeskPage({
  deskDeck, settings, players, reboundDeck, showCards, gameState, setGame,
}: Setter): JSX.Element {
  const [currentCard, setCurrentCard] = useState(-1);
  const [activePlayer, setActivePlayer] = useState(gameState.playerTern);
  const [activeRebound, setActiveRebound] = useState(false);
  console.log(activePlayer);
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
        {players.slice(1, players.length).map((el) => <Player key={el.name} name={el.name} className={activePlayer === el.name ? 'activePlayer' : ''} />)}
      </div>
      <div className="game">
        <div className="game-info">
          <div className="game-info-cat">
            <img src={infoCat} alt="info" />
          </div>
          <div className="game-info-messages">
            <p>{game.gameState.message}</p>
          </div>
          <p className="game-info-timer">
            {game.gameState.timeLeft}
          </p>
        </div>
        <div className="deck">
          <img
            src={cardBack}
            alt="deck"
            onMouseDown={() => { setGame(takeCardDeskDeck.bind(null, game)); }}
          />
          <p>
            Left
            {game.deskDeck.length}
            cards!
          </p>
        </div>
        <div className="play-cards">
          {// eslint-disable-next-line no-restricted-globals
          showCards.length === 0
            ? <div className="play-cards-place" />
            : showCards.map((card) => <img src={card.link} alt="card" key={card.id.toString()} className="animate__animated animate__backInUp" />)
          }
        </div>
        <div className={activeRebound ? 'rebound-deck-active' : 'rebound-deck'}>
          <button type="button" className="rebound-deck-controls">{'<'}</button>
          <img src={emptyCardsPlace} alt="card" onMouseDown={() => setActiveRebound(!activeRebound)} />
          <button type="button" className="rebound-deck-controls">{'>'}</button>
        </div>
      </div>
      <div className="main-player">
        <Player name="main" className={activePlayer === 'player1' ? 'activePlayer' : ''} />
        <div className="control-buttons">
          <button
            type="button"
            onClick={() => {
              setGame(endMove(game));
              setActivePlayer(endMove(game).gameState.playerTern);
            }}
            disabled={!game.players[0].buttons.finishMove}
          >
            end
          </button>
          <button type="button">2x Combo</button>
          <button type="button">3x Combo</button>
          <button type="button">5x Combo</button>
        </div>
        <div className="main-player-cards">
          {players[0].deck.map((el) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <div className="animate__animated animate__backInDown">
              <img
                src={el.link}
                alt={el.name}
                key={el.id}
                onMouseDown={() => {
                  setGame(makeMove.bind(null, game, el.id));
                  setCurrentCard(el.id);
                  console.log(currentCard, el.id);
                }}
                // className={currentCard === el.id ? 'activeCard' : ''}
                className="scaleCard"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
