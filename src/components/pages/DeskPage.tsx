/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, {
  useMemo, useState,
} from 'react';
import Player from './Players';
import endMove from '../../controller/game-event/endMove';
import takeCardDeskDeck from '../../controller/game-event/takeCardDeskDeck';
import IGame, { Setter } from '../../interface/IGame';
import infoCat from '../../assets/info-cat.png';
import {
  checkModalVisible,
  checkFunctionStateCombo5,
  handleChoosePlayer,
  handleCombo5,
  usedDoubleCombo,
  usedFiveCombo,
  usedTripleCombo,
  handleChooseCard,
} from './handlers/comboHandlers';
import { handleMove, handleMoveNeut } from './handlers/moveHandlers';

const cardBack = 'cards/back.png';
const emptyCardsPlace = 'cards/empty.png';

export default function DeskPage({
  deskDeck, settings, players, reboundDeck, showCards, gameState, setGame,
}: Setter): JSX.Element {
  const game = useMemo((): IGame => ({
    deskDeck,
    settings,
    players,
    reboundDeck,
    showCards,
    gameState,
  }), [deskDeck, gameState, players, reboundDeck, settings, showCards]);
  const [playerState, setPlayerState] = useState(game.players);
  const [translateVal, setTranslateVal] = useState(0);
  const [translateRebound, setTranslateRebound] = useState(0);
  const ourMessage = game.gameState.message;
  const showPrevCard = () => {
    if (translateVal < 0) {
      console.log(190 * playerState[0].deck.length - 190);
      setTranslateVal(translateVal + 190);
    }
  };
  const showNextCard = () => {
    if (Math.abs(translateVal) < 190 * playerState[0].deck.length - 190 * 5) {
      console.log(190 * playerState[0].deck.length - 190 * 5);
      setTranslateVal(translateVal - 190);
    }
  };
  const showNextRebound = () => {
    setTranslateRebound(translateRebound - 160);
  };
  const showPrevRebound = () => {
    setTranslateRebound(translateRebound + 160);
  };
  const checkNeutralize = () => game.gameState.returnToDeck && game.gameState.playerTurn === 'player1';

  return (
    <main className="desk">
      <div className="other-players">
        {players.slice(1, players.length).map((el) => <Player key={el.name} name={el.name} className={gameState.playerTurn /* activePlayer */ === el.name ? 'activePlayer' : ''} />)}
      </div>
      <div className="game">
        <div className="game-info">
          <div className="game-info-cat">
            <img src={infoCat} alt="info" />
          </div>
          <div className="game-info-messages">
            <p>{ourMessage}</p>
          </div>
          <p className="game-info-timer">
            {game.gameState.timeLeft}
          </p>
        </div>
        <div className="deck">
          <img
            src={cardBack}
            alt="deck"
            onMouseDown={() => { setGame(takeCardDeskDeck(game)); }}
          />
          <div className={checkNeutralize() ? 'return-to-deck-active' : 'return-to-deck'}>
            <button type="button" onClick={() => handleMoveNeut(game, 1, setGame)}>First</button>
            <button type="button" onClick={() => handleMoveNeut(game, 2, setGame)}>Second</button>
            <button type="button" onClick={() => handleMoveNeut(game, 3, setGame)}>Third</button>
            <button
              type="button"
              onClick={() => handleMoveNeut(game, game.deskDeck.length - 1, setGame)}
            >
              Last
            </button>
            <button type="button" onClick={() => handleMoveNeut(game, 0, setGame)}>Random</button>
          </div>
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
        <div className={checkFunctionStateCombo5(game) ? 'rebound-deck-active' : 'rebound-deck'}>
          <button type="button" className="rebound-deck-controls" onClick={() => showPrevRebound()}>{'<'}</button>
          <div className="rebound-deck-container">
            <div className="rebound-deck-row" style={{ transform: `translateX(${translateRebound}px)` }}>
              {checkFunctionStateCombo5(game)
                ? game.reboundDeck.map((el) => (
                  <img
                    src={el.link}
                    alt="card"
                    onMouseDown={() => handleCombo5(game, el.id, setGame, setPlayerState)}
                  />
                ))
                : <img src={emptyCardsPlace} alt="card" />}
            </div>
          </div>
          <button type="button" className="rebound-deck-controls" onClick={() => showNextRebound()}>
            {'>'}
          </button>
        </div>
      </div>
      <div className="main-player">
        <div className="main-player-container">
          <Player name="main" className={gameState.playerTurn === 'player1' ? 'activePlayer' : ''} />
          <div className="control-buttons">
            <button
              type="button"
              onClick={() => {
                setGame(endMove(game));
              }}
              disabled={!game.players[0].buttons.finishMove}
            >
              end
            </button>
            <div className={game.players[0].buttons.comboEnabled ? 'combo-visible' : 'combo-hidden'}>
              <button
                type="button"
                disabled={!game.players[0].buttons.dobleEnabled}
                onClick={() => usedDoubleCombo(game, setPlayerState)}
              >
                2x Combo
              </button>
              <button
                type="button"
                disabled={!game.players[0].buttons.tripleEnabled}
                onClick={() => usedTripleCombo(game, setPlayerState)}
              >
                3x Combo
              </button>
              <button
                type="button"
                disabled={!game.players[0].buttons.fiveEnabled}
                onClick={() => usedFiveCombo(game, setPlayerState)}
              >
                5x Combo
              </button>
            </div>
          </div>
        </div>
        <button type="button" onClick={() => showPrevCard()} className="slider-controls">{'<'}</button>
        <div className="main-player-cards">
          <div className="main-player-cards-row" style={{ transform: `translateX(${translateVal}px)` }}>
            {playerState[0].deck.sort((a, b) => a.type - b.type).map((el) => (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              // <div className="animate__animated animate__backInDown" key={el.id}>
              <div className="animated-card" key={el.id}>
                <img
                  src={el.link}
                  alt={el.name}
                  key={el.id}
                  onMouseDown={() => {
                    handleMove(game, el.id, setGame, setPlayerState, setTranslateVal);
                  }}
                  className={el.nameCombo ? 'comboActive' : 'scaleCard'}
                />
              </div>
            ))}
          </div>
        </div>
        <button type="button" onClick={() => showNextCard()} className="slider-controls">{'>'}</button>
      </div>
      <div className={checkModalVisible(game) ? 'take-card-modal-active' : 'take-card-modal'}>
        <div className="players">
          {game.gameState.modalPlayers.map((el) => (
            <button
              type="button"
              key={el.name}
              onClick={() => handleChoosePlayer(game, el.name, setGame)}
            >
              {el.name}
            </button>
          ))}
        </div>
        <div className="players-cards-active">
          {game.gameState.modalDeck.map((el) => (
            <img
              src={game.gameState.modalCardVisible ? el.link : emptyCardsPlace}
              alt="card"
              width="50px"
              key={el.id}
              onMouseDown={() => handleChooseCard(game, el.id, setGame)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
