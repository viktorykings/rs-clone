import React, { useState, useCallback } from 'react';
import PlayerSettings from './PlayerSettings';
import createPlayer from '../../../controller/createPlayer';
import IPlayer from '../../../interface/IPlayer';

interface IPlayerSettings {
  name: string;
  isBot: boolean;
  link: string;
  level: string;
}

export default function GameSettings() {
  const DATA: IPlayerSettings[] = [
    {
      name: 'Main Player',
      isBot: false,
      link: '',
      level: 'easy',
    },
    {
      name: 'Player 1',
      isBot: true,
      link: '',
      level: 'easy',
    },
    {
      name: 'Player 2',
      isBot: true,
      link: '',
      level: 'hard',
    },
  ];

  const [name, setName] = useState('Enter Player Name...');
  const [players, setPlayers] = useState(DATA);

  const deletePlayer = useCallback(
    (namePLayer: string) => {
      if (players.length > 2) {
        const remainingPLayers = players.filter(
          (player) => namePLayer !== player.name,
        );
        setPlayers(remainingPLayers);
      }
    },
    [players],
  );

  // Add New PLayer
  function handleSubmit(e: React.FormEvent) {
    if (players.length >= 5) {
      return;
    }
    console.log(players);
    e.preventDefault();
    const newPlayer: IPlayerSettings = {
      name: `${name}`,
      level: 'easy',
      link: '',
      isBot: true,
    };
    setPlayers([...players, newPlayer]);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function createPlayers(items: IPlayerSettings[]): void {
    const result = items.reduce((acc: IPlayer[], cur) => {
      const [n, isB, lnk, lvl] = [...Object.values(cur)];
      acc.push(createPlayer(n, isB, lnk, lvl));
      return acc;
    }, []);
    console.log(result);
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
        onClick={() => createPlayers(players)}
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
