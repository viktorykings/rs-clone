import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
// import './scss/gameSettings.scss';
import RulesPage from './components/pages/RulesPage';
import AboutPage from './components/pages/AboutPage';
import DeskPage from './components/pages/DeskPage';
import MainPage from './components/pages/MainPage';
import Settings from './components/pages/Settings';
import GameSettings from './components/pages/GameSettings/GameSettings';
import createGame from './controller/createGame';
import gameLoop from './controller/game-loop/gameLoop';
// import a from './assets/sounds/sound.mp3';

function App(): JSX.Element {
  const [game, setGame] = useState(createGame('ru', []));
  // const [playAudio, setPlayAudio] = useState(true);
  useEffect(() => gameLoop(game, setGame), [game]);
  // console.log(playAudio);
  // const audio = new Audio();
  // audio.src = './assets/sounds/sound.mp3';
  // audio.play();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage settings={game.settings} />} />
        <Route
          path="/gamesettings"
          element={<GameSettings game={game} setGame={setGame} />}
        />
        <Route
          path="/settings"
          element={(
            <Settings
              game={game}
              setGame={setGame}
              // playAudio={playAudio}
              // setPlayAudio={setPlayAudio}
            />
          )}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/rules" element={<RulesPage currLang={game.settings.lang} />} />
        <Route
          path="/desk"
          element={(
            <DeskPage
              game={game}
              setGame={setGame}
            />
          )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
