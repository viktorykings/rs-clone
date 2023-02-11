import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import AboutPage from './components/pages/AboutPage';
import DeskPage from './components/pages/DeskPage';
import MainPage from './components/pages/MainPage';
import Settings from './components/pages/Settings';
import createGame from './controller/createGame';
import createPlayer from './controller/createPlayer';
import gameLoop from './controller/game-loop/gameLoop';

function App(): JSX.Element {
  const player = createPlayer('player1', false);
  const player1 = createPlayer('и');
  const player2 = createPlayer('л');
  const [game, setGame] = useState(createGame([player, player1, player2]));
  // const game = createGame([player, player1, player2]);
  const { deskDeck } = game;
  const { settings } = game;
  const { players } = game;
  const { reboundDeck } = game;
  const { showCards } = game;
  const { gameState } = game;
  // console.log('player1', game.players[0].active);
  // console.log('player2', game.players[1].deck);
  // console.log('player2', game.players[2].deck);
  // console.log('desk', game.deskDeck);
  // // console.log('desk', game.playersDeck);
  // console.log('showcards', game.gameState.playerTurn);
  // console.log(game);
  // console.log('----App--------');
  useEffect(() => gameLoop(game, setGame), [game]);
  // mainGameLoop(game, setGame);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gamesettings" element={<MainPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/desk"
          element={(
            <DeskPage
              deskDeck={deskDeck}
              settings={settings}
              players={players}
              reboundDeck={reboundDeck}
              showCards={showCards}
              gameState={gameState}
              setGame={setGame}
            />
        )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
