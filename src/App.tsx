import React, { useState } from 'react';
import './App.scss';
import DeskPage from './components/pages/DeskPage';
import createGame from './controller/createGame';
import createPlayer from './controller/createPlayer';

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
  // console.log('player1', game.players[0].deck);
  // console.log('player2', game.players[1].deck);
  // console.log('player2', game.players[2].deck);
  // console.log('desk', game.deskDeck);
  // // console.log('desk', game.playersDeck);
  // console.log('showcards', game.showCards);
  console.log(game);
  return (
    <div className="App">
      <DeskPage
        deskDeck={deskDeck}
        settings={settings}
        players={players}
        reboundDeck={reboundDeck}
        showCards={showCards}
        gameState={gameState}
        setGame={setGame}
      />
    </div>
  );
}

export default App;
