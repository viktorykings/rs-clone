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
// import clearNameCombo from '../../controller/statePlayerDeck/clearNameCombo';

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
  const [activeRebound, setActiveRebound] = useState(false);
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
    return state === 'waitCombo2' || state === 'waitCombo3' || state === 'waitCombo5';
  };
  const clickDoubleCombo = useCallback((player: IPlayer): IPlayer => {
    clearNameCombo(player);
    player.combos.doubleCats.map((cr, ind) => cr.map((el) => {
    // player.combos.doubleCats.map((cr, ind) => cr.map((el) => {
      // eslint-disable-next-line no-param-reassign
      el.nameCombo = String(ind); return null;
    }));
    console.log(player);
    return player;
  }, [clearNameCombo]);

  const clickTripleCombo = useCallback((player: IPlayer): IPlayer => {
    clearNameCombo(player);
    player.combos.tripleCats.map((cr, ind) => cr.map((el) => {
      // eslint-disable-next-line no-param-reassign
      el.nameCombo = String(ind + 1);
      return null;
    }));
    console.log(player);
    return player;
  }, [clearNameCombo]);

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
        <div className={activeRebound ? 'rebound-deck-active' : 'rebound-deck'}>
          <button type="button" className="rebound-deck-controls">{'<'}</button>
          <img src={emptyCardsPlace} alt="card" onMouseDown={() => setActiveRebound(!activeRebound)} />
          <button type="button" className="rebound-deck-controls">{'>'}</button>
        </div>
      </div>
      <div className="main-player" aria-disabled>
        <div className="main-player-container">
          <Player name="main" className={gameState.playerTurn === 'player1' ? 'activePlayer' : ''} />
          <div className="control-buttons">
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
        <div className="main-player-cards">
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
      <div className={checkFunctionState() ? 'take-card-modal-active' : 'take-card-modal'}>
        <div className="players">
          {playerState.map((el) => (
            <button type="button" key={el.name}>{el.name}</button>
          ))}
        </div>
        <div className="players-cards">
          {playerState[1].deck.map((el) => (
            <img src={el.link} alt="card" width="50px" key={el.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
