/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, {
  useCallback, useMemo, useState,
} from 'react';
import Player from './Players';
import makeMove from '../../controller/game-event/makeMove';
import endMove from '../../controller/game-event/endMove';
import takeCardDeskDeck from '../../controller/game-event/takeCardDeskDeck';
import IGame, { Setter } from '../../interface/IGame';
import infoCat from '../../assets/info-cat.png';
import IPlayer from '../../interface/IPlayer';
import combo3Choise from '../../controller/game-event/subevent/combo3Choise';
import combo5GiveCard from '../../controller/game-event/subevent/combo5GiveCard';

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
  // const [activeRebound, setActiveRebound] = useState(false);
  const [isCombo3, setIsCombo3] = useState(false);
  const [translateVal, setTranslateVal] = useState(0);
  const [translateRebound, setTranslateRebound] = useState(0);
  const ourMessage = game.gameState.message;
  const clearNameCombo = useCallback((player: IPlayer): void => {
    player.deck.map((el) => {
      // eslint-disable-next-line no-param-reassign
      el.nameCombo = String('');
      return null;
    });
  }, []);
  const checkFunctionState = () => {
    const state = game.gameState.functionState;
    return state === 'waitCombo2' || state === 'waitCombo3';
  };
  const checkFunctionStateCombo5 = () => {
    const state = game.gameState.functionState;
    return state === 'waitCombo5';
  };
  const handleIsCombo3 = () => {
    const state = game.gameState.functionState;
    if (state === 'waitCombo3') {
      setIsCombo3(true);
    }
    console.log(game);
  };
  const clickDoubleCombo = useCallback((player: IPlayer): IPlayer => {
    clearNameCombo(player);
    player.combos.doubleCats.map((cr, ind) => cr.map((el) => {
    // player.combos.doubleCats.map((cr, ind) => cr.map((el) => {
      // eslint-disable-next-line no-param-reassign
      el.nameCombo = String(ind); return null;
    }));
    console.log(player);
    console.log(game);
    return player;
  }, [clearNameCombo, game]);

  const clickTripleCombo = useCallback((player: IPlayer): IPlayer => {
    clearNameCombo(player);
    player.combos.tripleCats.map((cr, ind) => cr.map((el) => {
      // eslint-disable-next-line no-param-reassign
      el.nameCombo = String(ind + 1);
      return null;
    }));
    console.log(player);
    console.log(game);
    return player;
  }, [clearNameCombo, game]);

  const clickFiveCombo = useCallback((player: IPlayer): IPlayer => {
    clearNameCombo(player);
    player.combos.fiveCats.map((cr, ind) => cr.map((el) => {
      // eslint-disable-next-line no-param-reassign
      el.nameCombo = String(ind + 1);
      return null;
    }));
    console.log(player);
    return player;
  }, [clearNameCombo]);

  const usedDoubleCombo = useCallback(() => {
    const pl = game.players.find((p) => p.name === game.gameState.playerTurn);
    if (pl !== undefined) {
      clickDoubleCombo(pl);
      game.gameState.stateGame = 'doubleCombo';
      console.log('---combo---');
      console.log(game);
      setPlayerState((p) => ([...p]));
    }
  }, [clickDoubleCombo, game]);

  const usedTripleCombo = useCallback(() => {
    const pl = game.players.find((p) => p.name === game.gameState.playerTurn);
    if (pl !== undefined) {
      clickTripleCombo(pl);
      game.gameState.stateGame = 'tripleCombo';
      console.log('---combo---');
      console.log(game);
      setPlayerState((p) => ([...p]));
    }
  }, [clickTripleCombo, game]);

  const usedFiveCombo = useCallback(() => {
    const pl = game.players.find((p) => p.name === game.gameState.playerTurn);
    if (pl !== undefined) {
      clickFiveCombo(pl);
      game.gameState.stateGame = 'fiveCombo';
      console.log('---combo---');
      console.log(game);
      setPlayerState((p) => ([...p]));
    }
  }, [clickFiveCombo, game]);
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
    setTranslateRebound(translateRebound - 240);
  };
  const showPrevRebound = () => {
    setTranslateRebound(translateRebound + 240);
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
        <div className={checkFunctionStateCombo5() ? 'rebound-deck-active' : 'rebound-deck'}>
          <button type="button" className="rebound-deck-controls" onClick={() => showPrevRebound()}>{'<'}</button>
          <div className="rebound-deck-container">
            <div className="rebound-deck-row" style={{ transform: `translateX(${translateRebound}px)` }}>
              {checkFunctionStateCombo5()
                ? game.reboundDeck.map((el) => (
                  <img
                    src={el.link}
                    alt="card"
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                    onMouseDown={() => combo5GiveCard(game, el.id)}
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
                onClick={() => usedDoubleCombo()}
              >
                2x Combo
              </button>
              <button
                type="button"
                disabled={!game.players[0].buttons.tripleEnabled}
                onClick={() => usedTripleCombo()}
              >
                3x Combo
              </button>
              <button
                type="button"
                disabled={!game.players[0].buttons.fiveEnabled}
                onClick={() => usedFiveCombo()}
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
                  }}
                  className={el.nameCombo ? 'comboActive' : 'scaleCard'}
                />
              </div>
            ))}
          </div>
        </div>
        <button type="button" onClick={() => showNextCard()} className="slider-controls">{'>'}</button>
      </div>
      <div className={checkFunctionState() ? 'take-card-modal-active' : 'take-card-modal'}>
        <div className="players">
          {game.gameState.modalPlayers.map((el) => (
            <button type="button" key={el.name} onClick={() => handleIsCombo3()}>{el.name}</button>
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
              onMouseDown={() => combo3Choise(game, game.gameState.playerTurn, el.type)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
