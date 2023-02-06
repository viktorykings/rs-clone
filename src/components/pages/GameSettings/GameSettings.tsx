import React, { useState, useCallback } from 'react';
import Bot from './Bot';
import createPlayer from '../../../controller/createPlayer';
import IPlayer from '../../../interface/IPlayer';
import MainPlayer from './MainPlayer';

import av0 from '../../../assets/avCats/av0.png';
import av1 from '../../../assets/avCats/av1.png';
import av2 from '../../../assets/avCats/av2.png';
import av3 from '../../../assets/avCats/av3.png';
import av4 from '../../../assets/avCats/av4.png';
import av5 from '../../../assets/avCats/av5.png';
import av6 from '../../../assets/avCats/av6.png';
import av7 from '../../../assets/avCats/av7.png';
import ModalBot from './ModalBot';

interface IBotSettings {
  name: string;
  isBot: boolean;
  link: string;
  levelBot: string;
}

export default function GameSettings() {
  const botsNames = [
    'Diablo Gato',
    'Puss in Boots',
    'Пушистый донжуан',
    'Чупакабра',
    'Игривый дваждылюб',
    'Рыжий убийца',
    'bot 7',
    'bot 8',
    'bot 9',
  ];
  const avCats = [av0, av1, av2, av3, av4, av5, av6, av7];
  const getRandomBotAvatar = (): string => {
    const avatar = avCats[Math.floor(Math.random() * avCats.length)];

    return avatar;
  };

  const getRandomBotName = (): string => {
    const name = botsNames[Math.floor(Math.random() * botsNames.length)];

    return name;
  };
  const DATA: IBotSettings[] = [
    {
      name: getRandomBotName(),
      isBot: true,
      link: getRandomBotAvatar(),
      levelBot: 'easy',
    },
  ];

  const [bots, setBots] = useState(DATA);
  // const [level, setLevel] = useState('easy');

  const deleteBot = useCallback(
    (namePLayer: string) => {
      if (bots.length > 1) {
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
  function isBotAvatarExist(link: string) {
    return (bots.find((bot) => bot.link === link) && true) || false;
  }
  function getBotAvatar(): string {
    let result = getRandomBotAvatar();

    while (isBotAvatarExist(result)) {
      result = getRandomBotAvatar();
    }
    return result;
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
    const newLink = getBotAvatar();

    const newBot: IBotSettings = {
      name: newBotName,
      levelBot: 'easy',
      link: newLink,
      isBot: true,
    };
    setBots([...bots, newBot]);
  }

  // const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setLevel(e.target.value);
  // };

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
      <ModalBot title="Choose level" />
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
                Add a kitten
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
                  link={player.link}
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
