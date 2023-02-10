import React from 'react';
import './App.scss';
import './scss/gameSettings.scss';
import DeskPage from './components/pages/DeskPage';
// import GameSettings from './components/pages/GameSettings/GameSettings';

function App(): JSX.Element {
  return (
    <div className="App">
      <DeskPage />
      {/* <GameSettings /> */}
    </div>
  );
}

export default App;
