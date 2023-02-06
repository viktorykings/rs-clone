import React from 'react';

export interface IBotProps {
  name: string;
  isBot: boolean;
  level: string;
  deletePlayer: (name: string) => void;
  // editPlayer: (newName: string, name: string, level: string) => void;
  brdrColor: string;
}

export default function Bot({
  name,
  isBot = true,
  level,
  deletePlayer,
  // editPlayer,
  brdrColor,
}: IBotProps) {
  // const [isEditing, setEditing] = useState(false);
  // const [newName, setNewName] = useState('');
  // const [newLevel, setNewLevel] = useState('easy');

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setNewName(e.target.value);
  // }

  // function handleSubmitEdit(e: React.FormEvent) {
  //   e.preventDefault();
  //   editPlayer(newName, name, level);
  //   setNewName('');
  //   setEditing(false);
  // }

  // const handleEditSelcet = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setNewLevel(e.target.value);
  // };

  const viewTemplate = (
    <>
      <div className="bot">
        <div className="bot-avatar" />
        <p className="bot-name">{name}</p>
        {isBot && <p className="bot-lavel hidden">{level}</p>}
      </div>
      <div className="btn-group">
        {isBot && (
          <button
            type="button"
            className="btn"
            onClick={() => deletePlayer(name)}
          >
            DELETE
          </button>
        )}
      </div>
    </>
  );

  return (
    <li style={{ borderColor: brdrColor }} className="list-item">
      {viewTemplate}
    </li>
  );
}
