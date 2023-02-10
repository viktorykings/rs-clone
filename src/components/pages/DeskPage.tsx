/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, {
  useMemo, useState,
} from 'react';
import Player from './Players';
import makeMove from '../../controller/game-event/makeMove';
import endMove from '../../controller/game-event/endMove';
import takeCardDeskDeck from '../../controller/game-event/takeCardDeskDeck';
import IGame, { Setter } from '../../interface/IGame';
import infoCat from '../../assets/info-cat.png';
import combo3Choise from '../../controller/game-event/subevent/combo3ChoisePlayer';
import {
  checkModalVisible,
  checkFunctionStateCombo5,
  // handleChoosePlayer,
  handleCombo5,
  usedDoubleCombo,
  usedFiveCombo,
  usedTripleCombo,
} from './handlers/comboHandlers';
import modalChoicePlayer from '../../controller/game-event/modalChoicePlayer';

const cardBack = 'cards/back.png';
const emptyCardsPlace = 'cards/empty.png';
// const infoCat = '../../assets/info-cat.png';

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
  const [isCombo3, setIsCombo3] = useState(false);
  console.log(setIsCombo3);
  const [translateVal, setTranslateVal] = useState(0);
  const [translateRebound, setTranslateRebound] = useState(0);
  const ourMessage = game.gameState.message;
  const showNextCard = () => {
    if (translateVal < 0) {
      console.log(190 * playerState[0].deck.length - 190);
      setTranslateVal(translateVal + 190);
    }
  };
  const showPrevCard = () => {
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
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                    onMouseDown={() => handleCombo5(game, el.id, setGame)}
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
            {playerState[0].deck.map((el) => (
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              <div className="animate__animated animate__backInDown" key={el.id}>
                <img
                  src={el.link}
                  alt={el.name}
                  key={el.id}
                  onMouseDown={() => {
                    const myGame = makeMove(game, el.id);
                    if (myGame !== null) setGame(myGame);
                    setPlayerState([...game.players]);
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
              onClick={() => {
                // handleChoosePlayer(game, el.name, setGame, setIsCombo3);
                modalChoicePlayer(game, el.name);
                setGame(game);
              }}
            >
              {el.name}
            </button>
          ))}
        </div>
        <div className={isCombo3 ? 'players-cards-active' : 'players-cards'}>
          {game.gameState.modalDeck.map((el) => (
            <img
              src={el.link}
              alt="card"
              width="50px"
              key={el.id}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
              onMouseDown={() => combo3Choise(game, el.name)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
