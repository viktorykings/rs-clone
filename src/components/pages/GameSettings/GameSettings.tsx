import React, { useState, useCallback } from 'react';
import Bot from './Bot';
import createPlayer from '../../../controller/createPlayer';
import IPlayer from '../../../interface/IPlayer';
import MainPlayer from './MainPlayer';
import ModalBot from './ModalBot';
import ModalChangeName from './ModalChangeName';
// import ModalChangeAvatar from './ModalChangeAvatar';

import av0 from '../../../assets/avCats/av0.png';
import av1 from '../../../assets/avCats/av1.png';
import av2 from '../../../assets/avCats/av2.png';
import av3 from '../../../assets/avCats/av3.png';
import av4 from '../../../assets/avCats/av4.png';
import av5 from '../../../assets/avCats/av5.png';
import av6 from '../../../assets/avCats/av6.png';
import av7 from '../../../assets/avCats/av7.png';

interface IBotSettings {
  name: string;
  isBot: boolean;
  link: string;
  levelBot: string;
}
const { log } = console;

export default function GameSettings() {
  const [botLevel, setBotLevel] = useState('easy');

  const updateBotLevel = (value: string) => {
    setBotLevel(value);
  };

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
  const dataMainPlayer: IBotSettings[] = [
    {
      name: 'Don Lokailo',
      isBot: false,
      link: '',
      levelBot: 'easy',
    },
  ];

  const [bots, setBots] = useState(DATA);

  const [nameMainPlayer, setMainPlayer] = useState(dataMainPlayer[0].name);
  const updateMainPlayer = (value: string) => {
    setMainPlayer(value);
  };

  const [modal, setModal] = useState(false);
  const [modlChangeName, setModalChangeName] = useState(true);

  const setGameLevel = (value: string) => {
    const editedBots = bots.map((bot) => {
      if (value) {
        return { ...bot, levelBot: value };
      }
      return bot;
    });

    setBots(editedBots);
  };

  const deleteBot = useCallback(
    (namePLayer: string) => {
      if (bots.length > 1) {
        const remainingBots = bots.filter((bot) => namePLayer !== bot.name);
        setBots(remainingBots);
      }
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
      isBot: true,
      link: newLink,
      levelBot: 'easy',
    };
    setBots([...bots, newBot]);
  }

  function createBots(items: IBotSettings[]): void {
    log(bots);
    const result = items.reduce((acc: IPlayer[], cur) => {
      const [n, isB, lnk, lvl] = [...Object.values(cur)];
      acc.push(createPlayer(n, isB, lnk, lvl));
      return acc;
    }, []);
    log('Create players: ', result);
  }

  return (
    <div className="settings">
      {modal && (
        <ModalBot
          title="Choose level"
          level={botLevel}
          updateLevel={updateBotLevel}
          setGameLevel={setGameLevel}
          onSetLevel={() => setModal(false)}
        />
      )}
      <h1>Game Settings</h1>

      <div className="wrap-players">
        <div className="bot-settings">
          <form onSubmit={handleSubmit}>
            <h2>Bad Kittings</h2>
            <p className="game-level">{botLevel}</p>
            <div className="add-bot">
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
                  brdrColor={bdrcolor}
                />
              );
            })}
          </ul>
          <div className="choose-level">
            <button type="button" onClick={() => setModal(true)}>
              CHOOSE GAME LEVEL
            </button>
          </div>
        </div>
        <div className="player-settings">
          {modlChangeName && (
            <ModalChangeName
              title="Change Name"
              updateName={updateMainPlayer}
              onChangeName={() => setModalChangeName(false)}
            />
          )}
          {/* <ModalChangeAvatar title="Change Avatar" /> */}
          <MainPlayer
            name={nameMainPlayer}
            isBot={false}
            level=""
            openModal={() => setModalChangeName(true)}
          />
        </div>
      </div>
      <button
        type="button"
        className="start-btn btn"
        onClick={() => createBots(bots)}
      >
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
