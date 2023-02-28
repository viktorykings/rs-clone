import { useState, useCallback } from 'react';
import IPlayerSettings from '../../../interface/IPlayerSettings';
import IPlayer from '../../../interface/IPlayer';
import createPlayer from '../../../controller/createPlayer';
import utils from './utils';

import {
  // defaultBot,
  defaultMainPlayer,
  // botNames,
  avCats,
} from './dataSettings';
// import IGame from '../../../interface/IGame';
// import { IGameSettings } from './GameSettings';

const { getRandomBotName, getRandomBotAvatar } = utils();

export default function useSettings() {
  const [modal, setModal] = useState(false);
  const [modalChangeAvatar, setModalChangeAvatar] = useState(false);
  const [modalChangeName, setModalChangeName] = useState(false);

  const [bots, setBots] = useState<IPlayerSettings[]>([]);
  const [mainPlayer, setMainPlayer] = useState(defaultMainPlayer);

  const updateNameMainPlayer = (value: string) => {
    setMainPlayer({ ...mainPlayer, name: value });
  };
  const updateAvatarMainPlayer = (value: string) => {
    setMainPlayer({ ...mainPlayer, link: value });
  };

  const setGameLevel = (value: string) => {
    const editedBots = bots.map((bot) => {
      if (value) {
        return { ...bot, levelBot: value };
      }
      return bot;
    });

    setBots(editedBots);
    console.log(editedBots);
  };

  const deleteBot = useCallback(
    (namePLayer: string) => {
      if (bots.length > 1) {
        const remainingBots = bots.filter((bot) => namePLayer !== bot.name);
        setBots(remainingBots);
      }
    },
    [bots, setBots],
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
    let result = getRandomBotAvatar(avCats);

    while (isBotAvatarExist(result)) {
      result = getRandomBotAvatar(avCats);
    }
    return result;
  }
  function getBotName(botNamesArr: string[]): string {
    let result = getRandomBotName(botNamesArr);

    while (isBotNameExist(result)) {
      result = getRandomBotName(botNamesArr);
    }
    return result;
  }

  // Add New Bot
  function handleSubmit(e: React.FormEvent, langArr: string[], lvl: string) {
    e.preventDefault();
    if (bots.length >= 4) {
      return;
    }
    const newBotName = getBotName(langArr);
    const newLink = getBotAvatar();

    const newBot: IPlayerSettings = {
      name: newBotName,
      isBot: true,
      link: newLink,
      levelBot: lvl,
    };
    setBots([...bots, newBot]);
  }
  function createPlayers(items: IPlayerSettings[]): IPlayer[] {
    // заполняем массив ботами
    const result = items.reduce((acc: IPlayer[], cur) => {
      const [n, isB, lnk, lvl] = [...Object.values(cur)];
      acc.push(createPlayer(n, isB, lnk, lvl));
      return acc;
    }, []);

    // доабавляеем главного игрока
    const [n, isB, lnk, lvl] = [...Object.values(mainPlayer)];
    result.unshift(createPlayer(n, isB, lnk, lvl));
    // log('Create players: ', result);
    return result;
  }

  return {
    // botLevel,
    // updateBotLevel,
    bots,
    setBots,
    mainPlayer,
    updateNameMainPlayer,
    updateAvatarMainPlayer,
    setGameLevel,
    deleteBot,
    modal,
    setModal,
    modalChangeAvatar,
    setModalChangeAvatar,
    modalChangeName,
    setModalChangeName,
    getRandomColor,
    isBotNameExist,
    isBotAvatarExist,
    getBotAvatar,
    getBotName,
    handleSubmit,
    createPlayers,
  };
}
