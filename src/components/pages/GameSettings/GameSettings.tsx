import React, { useState, useCallback } from 'react';
import PlayerSettings from './PlayerSettings';

interface IPlayer {
  name: string;
  level: string;
  isBot: boolean;
}

export default function GameSettings() {
  // function deletePlayer(name: string) {
  //   console.log(name);
  // }

  const DATA: IPlayer[] = [
    { name: 'Main Player', isBot: false, level: 'easy' },
    { name: 'Player 1', isBot: true, level: 'easy' },
    { name: 'Player 2', isBot: true, level: 'hard' },
  ];

  const [name, setName] = useState('use hook');
  const [players, setPlayers] = useState(DATA);

  const deletePlayer = useCallback(
    (namePLayer: string) => {
      console.log(namePLayer);
      const remainingPLayers = players.filter(
        (player) => namePLayer !== player.name,
      );
      setPlayers(remainingPLayers);
    },
    [players],
  );

  function handleSubmit(e: React.FormEvent) {
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
        {players.map((player) => (
          <PlayerSettings
            name={player.name}
            level={player.level}
            key={player.name}
            isBot={player.isBot}
            deletePlayer={deletePlayer}
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
