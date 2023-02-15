/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, {
  useState,
} from 'react';
import Player from './Players';
import endMove from '../../controller/game-event/endMove';
import { Setter } from '../../interface/IGameProp';
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
import { handleMove, handleMoveNeut, handleTakeDeskCard } from './handlers/moveHandlers';
import EndGameModal from './EndGameModal';
import langs from '../../const/localization';

const cardBack = 'cards/back.png';
const emptyCardsPlace = 'cards/empty.png';

export default function DeskPage({
  // deskDeck, settings, players, reboundDeck, showCards, gameState,
  game, setGame,
}: Setter): JSX.Element {
  const [playerState, setPlayerState] = useState(game.players);
  const [translateVal, setTranslateVal] = useState(0);
  const [translateRebound, setTranslateRebound] = useState(0);
  const ourMessage = game.gameState.message;
  const cardWidth = 190;
  const sliderLen = 5;
  const reboundCardWidth = 160;
  const currLang = game.settings.lang;
  const neutBtnName = langs[currLang].deskPage.buttons.neutButtons;
  const comboBtnName = langs[currLang].deskPage.buttons.comboButtons;
  const showPrevCard = () => {
    if (translateVal < 0) {
      console.log(cardWidth * playerState[0].deck.length - cardWidth);
      setTranslateVal(translateVal + cardWidth);
    }
  };
  const showNextCard = () => {
    if (Math.abs(translateVal) < cardWidth * playerState[0].deck.length - cardWidth * sliderLen) {
      console.log(cardWidth * playerState[0].deck.length - cardWidth * sliderLen);
      setTranslateVal(translateVal - cardWidth);
    }
  };
  const showNextRebound = () => {
    if (Math.abs(translateRebound) < (game.reboundDeck.length - 1) * reboundCardWidth) {
      setTranslateRebound(translateRebound - reboundCardWidth);
    }
  };
  const showPrevRebound = () => {
    if (translateRebound < 0) {
      setTranslateRebound(translateRebound + reboundCardWidth);
    }
  };
  const checkNeutralize = () => (
    game.gameState.returnToDeck && game.gameState.playerTurn === game.players[0].name
  );

  return (
    <main className="desk">
      <div className="other-players">
        {game.players.slice(1, game.players.length).map((el) => <Player key={el.name} name={el.name} className={game.gameState.playerTurn === el.name ? 'activePlayer' : ''} />)}
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
            onMouseDown={() => handleTakeDeskCard(game, setGame)}
          />
          <div className={checkNeutralize() ? 'return-to-deck-active' : 'return-to-deck'}>
            <button type="button" onClick={() => handleMoveNeut(game, 1, setGame)}>{neutBtnName[0]}</button>
            <button type="button" onClick={() => handleMoveNeut(game, 2, setGame)}>{neutBtnName[1]}</button>
            <button type="button" onClick={() => handleMoveNeut(game, 3, setGame)}>{neutBtnName[2]}</button>
            <button
              type="button"
              onClick={() => handleMoveNeut(game, game.deskDeck.length + 1, setGame)}
            >
              {neutBtnName[3]}
            </button>
            <button type="button" onClick={() => handleMoveNeut(game, 0, setGame)}>{neutBtnName[4]}</button>
          </div>
          <p>
            Left
            {game.deskDeck.length}
            cards!
          </p>
        </div>
        <div className="play-cards">
          {// eslint-disable-next-line no-restricted-globals
          game.showCards.length === 0
            ? <div className="play-cards-place" />
            : game.showCards.map((card) => <img src={card.link} alt="card" key={card.id.toString()} className="animated-move" />)
          }
        </div>
        <div className={checkFunctionStateCombo5(game) ? 'rebound-deck-active' : 'rebound-deck'}>
          <button type="button" className="rebound-deck-controls" onClick={() => showPrevRebound()}>{'<'}</button>
          <div className="rebound-deck-container">
            <div className="rebound-deck-row" style={{ transform: `translateX(${translateRebound}px)` }}>
              {checkFunctionStateCombo5(game)
                ? game.reboundDeck.map((el) => (
                  <img
                    key={el.id}
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
          <Player name="main" className={game.gameState.playerTurn === game.players[0].name ? 'activePlayer' : ''} />
          <div className="control-buttons">
            <button
              type="button"
              onClick={() => {
                setGame(endMove(game));
              }}
              disabled={!game.players[0].buttons.finishMove}
            >
              {langs[currLang].deskPage.buttons.endMoveBtn}
            </button>
            <div className={game.players[0].buttons.comboEnabled ? 'combo-visible' : 'combo-hidden'}>
              <button
                type="button"
                disabled={!game.players[0].buttons.dobleEnabled}
                onClick={() => usedDoubleCombo(game, setPlayerState)}
              >
                {comboBtnName[0]}
              </button>
              <button
                type="button"
                disabled={!game.players[0].buttons.tripleEnabled}
                onClick={() => usedTripleCombo(game, setPlayerState)}
              >
                {comboBtnName[1]}
              </button>
              <button
                type="button"
                disabled={!game.players[0].buttons.fiveEnabled}
                onClick={() => usedFiveCombo(game, setPlayerState)}
              >
                {comboBtnName[2]}
              </button>
            </div>
          </div>
        </div>
        <button type="button" onClick={() => showPrevCard()} className="slider-controls">{'<'}</button>
        <div className="main-player-cards">
          <div className="main-player-cards-row" style={{ transform: `translateX(${translateVal}px)` }}>
            {playerState[0].deck.map((el) => (
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
      <div className={checkModalVisible(game) ? 'modal-bg-active' : 'modal-bg'}>
        <div className={checkModalVisible(game) ? 'take-card-modal-active' : 'take-card-modal'}>
          <h5>{game.gameState.modalTitle}</h5>
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
                key={el.id}
                onMouseDown={() => handleChooseCard(game, el.id, setGame)}
              />
            ))}
          </div>
        </div>
      </div>
      <EndGameModal show={game.gameState.endGame} game={game} />
    </main>
  );
}
