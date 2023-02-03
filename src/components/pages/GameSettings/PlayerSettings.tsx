// import { setegid } from 'process';
import React, { useState } from 'react';

export interface IPlayerProps {
  name: string;
  isBot: boolean;
  level: string;
  deletePlayer: (name: string) => void;
  editPlayer: (newName: string, name: string, level: string) => void;
}

export default function PlayerSettings({
  name,
  isBot,
  level,
  deletePlayer,
  editPlayer,
}: IPlayerProps) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const [newLevel, setNewLevel] = useState('easy');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewName(e.target.value);
  }

  function handleSubmitEdit(e: React.FormEvent) {
    e.preventDefault();
    editPlayer(newName, name, level);
    setNewName('');
    setEditing(false);
  }

  const handleEditSelcet = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewLevel(e.target.value);
  };

  const editingTemplate = (
    <form className="form" onSubmit={handleSubmitEdit}>
      <div className="form-group">
        <label htmlFor={name} className="player-label">
          {`New name for ${name}`}
        </label>
        <input
          value={newName}
          onChange={handleChange}
          id={name}
          type="text"
          placeholder={name}
        />
        <select value={newLevel} onChange={handleEditSelcet}>
          <option value="Easy">Easy</option>
          <option value="Normal">Normal</option>
          <option value="Hard">Hard</option>
        </select>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-cancel"
          onClick={() => setEditing(false)}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-save">
          Save
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <>
      <div className="player">
        <div className="player-avatar" />
        <p className="player-name">{name}</p>
        {isBot && <p className="player-lavel">{level}</p>}
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn"
          onClick={() => {
            setEditing(true);
          }}
        >
          Edit
        </button>
        {isBot && (
          <button
            type="button"
            className="btn"
            onClick={() => deletePlayer(name)}
          >
            Delete
          </button>
        )}
      </div>
    </>
  );

  return (
    <li className="list-item">{isEditing ? editingTemplate : viewTemplate}</li>
  );
}
