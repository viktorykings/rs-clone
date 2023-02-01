import React, { useState } from 'react';
import PlayerSettings from './PlayerSettings';

interface IPlayer {
  name: string;
  level: string;
  isBot: boolean;
}

export default function GameSettings() {
  const DATA: IPlayer[] = [
    { name: 'Main Player', level: 'easy', isBot: false },
    { name: 'Player 1', level: 'easy', isBot: true },
    { name: 'Player 2', level: 'hard', isBot: true },
  ];

  const [name, setName] = useState('use hook');
  const [players, setPlayers] = useState(DATA);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newPlayer: IPlayer = { name: `${name}`, level: 'easy', isBot: true };
    setPlayers([...players, newPlayer]);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  return (
    <div className="settings">
      <h1>Game Settings</h1>
      <form onSubmit={handleSubmit}>
        <h2>Add New Player</h2>
        <input
          type="text"
          id="new-player-input"
          className="input"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <select value="">
          <option value="Easy">Easy</option>
          <option value="Normal">Normal</option>
          <option value="Hard">Hard</option>
        </select>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
      <h3>List Of Players</h3>
      <ul className="list">
        {/* PLayer-Human */}
        {/* <PlayerSettings name="Main Player" level="hard" isBot={false} /> */}
        {/* Players-Bots */}
        {players.map((player) => (
          <PlayerSettings
            name={player.name}
            level={player.level}
            key={player.name}
            isBot={player.isBot}
          />
        ))}
      </ul>
      <button
        type="button"
        className="btn"
        onClick={() => console.log(players)}
      >
        Done
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => console.log('Cancel')}
      >
        Cancel
      </button>
    </div>
  );
}
