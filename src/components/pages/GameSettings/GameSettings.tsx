import React, { useState, useCallback } from 'react';
import Bot from './Bot';
import createPlayer from '../../../controller/createPlayer';
import IPlayer from '../../../interface/IPlayer';
import MainPlayer from './MainPlayer';

interface IBotSettings {
  name: string;
  isBot: boolean;
  link: string;
  levelBot: string;
}

export default function GameSettings() {
  const botsNames = [
    'bot 1',
    'bot 2',
    'bot 3',
    'bot 4',
    'bot 5',
    'bot 6',
    'bot 7',
    'bot 8',
    'bot 9',
  ];
  const getRandomBotName = (): string => {
    const name = botsNames[Math.floor(Math.random() * botsNames.length)];

    return name;
  };
  const DATA: IBotSettings[] = [
    {
      name: getRandomBotName(),
      isBot: true,
      link: '',
      levelBot: 'easy',
    },
    // {
    //   name: getBotName(botsNames),
    //   isBot: true,
    //   link: '',
    //   levelBot: 'easy',
    // },
  ];

  const [bots, setBots] = useState(DATA);
  // const [level, setLevel] = useState('easy');

  const deleteBot = useCallback(
    (namePLayer: string) => {
      if (bots.length > 2) {
        const remainingBots = bots.filter((bot) => namePLayer !== bot.name);
        setBots(remainingBots);
      }
    },
    [bots],
  );

  const editNameBot = useCallback(
    (newName: string, namePlayer: string, newLevel: string) => {
      const editedBots = bots.map((bot) => {
        console.log(namePlayer === bot.name);
        if (namePlayer === bot.name) {
          return { ...bot, name: newName, levelBot: newLevel };
        }
        return bot;
      });

      setBots(editedBots);
    },
    [bots],
  );

  const getRandomColor = useCallback(() => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    return `#${color}`;
  }, []);

  function isBotNameExist(name: string) {
    return (bots.find((bot) => bot.name === name) && true) || false;
  }
  function getBotName(): string {
    let result = getRandomBotName();

    while (isBotNameExist(result)) {
      result = getRandomBotName();
    }
    return result;
  }
  // Add New Bot
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (bots.length >= 4) {
      return;
    }
    const newBotName = getBotName();

    const newBot: IBotSettings = {
      name: newBotName,
      levelBot: 'easy',
      link: '',
      isBot: true,
    };
    setBots([...bots, newBot]);
  }

  // const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setLevel(e.target.value);
  // };

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setName(e.target.value);
  // }

  function createBots(items: IBotSettings[]): void {
    const result = items.reduce((acc: IPlayer[], cur) => {
      const [n, isB, lnk, lvl] = [...Object.values(cur)];
      acc.push(createPlayer(n, isB, lnk, lvl));
      return acc;
    }, []);
    console.log('Create players: ', result);
  }

  return (
    <div className="settings">
      <h1>Game Settings</h1>
      <div className="wrap-players">
        <div className="bot-settings">
          <form onSubmit={handleSubmit}>
            <h2>Add Bot</h2>
            <div className="add-bot">
              {/* <input
                type="text"
                id="new-player-input"
                className="input"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
              /> */}
              {/* <select value={level} onChange={handleChangeSelect}>
                <option value="Easy">Easy</option>
                <option value="Normal">Normal</option>
                <option value="Hard">Hard</option>
              </select> */}
              <button type="submit" className="btn">
                Add
              </button>
            </div>
          </form>
          <ul className="list">
            {bots.map((player) => {
              const bdrcolor = getRandomColor();
              return (
                <Bot
                  name={player.name}
                  level={player.levelBot}
                  key={player.name}
                  isBot={player.isBot}
                  deletePlayer={deleteBot}
                  // editPlayer={editNamePLayer}
                  brdrColor={bdrcolor}
                />
              );
            })}
          </ul>
        </div>
        <div className="player-settings">
          <MainPlayer
            name="DON LOKAILO"
            isBot={false}
            level=""
            editPlayer={editNameBot}
          />
        </div>
      </div>
      <button type="button" className="btn" onClick={() => createBots(bots)}>
        Start Game
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
