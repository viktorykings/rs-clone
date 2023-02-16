import React from 'react';
import { Link } from 'react-router-dom';
import Bot from './Bot';
import MainPlayer from './MainPlayer';
import ModalBot from './ModalBot';
import ModalChangeName from './ModalChangeName';
import ModalChangeAvatar from './ModalChangeAvatar';
import useSettings from './useSettings';
import IGame from '../../../interface/IGame';
import createGame from '../../../controller/createGame';
import langs from '../../../const/localization';

export interface IGameSettings {
  game: IGame,
  setGame: (obj: IGame) => void;
}

export default function GameSettings({ game, setGame }: IGameSettings) {
  const {
    botLevel,
    updateBotLevel,
    bots,
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
    handleSubmit,
    createPlayers,
  } = useSettings();

  const currLang = game.settings.lang;
  const base = langs[currLang].gameSettings;

  return (
    <div className="settings">
      {modal && (
        <ModalBot
          title={base.modal.level[3]}
          level={botLevel}
          updateLevel={updateBotLevel}
          setGameLevel={setGameLevel}
          onSetLevel={() => setModal(false)}
          localLang={base.modal.level}
        />
      )}
      {/* <h1>Game Settings</h1> */}

      <div className="wrap-players">
        <div className="bot-settings">
          <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e, base.botNames)}>
            {/* <h2>Bad Kittings</h2> */}
            <p className="game-level">{botLevel}</p>
            <div className="add-bot">
              <button type="submit" className="btn">
                {base.buttons[0]}
              </button>
            </div>
          </form>
          <ul className="list">
            {bots.length
              ? bots.map((player) => {
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
                    localLang={base.bot}
                  />
                );
              })
              : <div className="bot-place">?</div>}
          </ul>
          <div className="choose-level">
            <button type="button" onClick={() => setModal(true)}>
              {base.level[0]}
            </button>
          </div>
        </div>
        <div className="player-settings">
          {modalChangeName && (
            <ModalChangeName
              title={base.modal.name[0]}
              updateName={updateNameMainPlayer}
              onChangeName={() => setModalChangeName(false)}
              localLang={base.modal.name}
            />
          )}
          {modalChangeAvatar && (
            <ModalChangeAvatar
              curAvatar={mainPlayer.link}
              updateAvatar={updateAvatarMainPlayer}
              onChangeAvatar={() => setModalChangeAvatar(false)}
              title={base.modal.avatar[0]}
              localLang={base.modal.avatar}
            />
          )}
          <MainPlayer
            name={mainPlayer.name}
            isBot={false}
            level=""
            avatar={mainPlayer.link}
            openModalChangeName={() => setModalChangeName(true)}
            openModalChangeAvatar={() => setModalChangeAvatar(true)}
            localLang={base.player}
          />
        </div>
      </div>
      <Link to="/desk">
        <button
          type="button"
          className="start-btn btn"
          onClick={() => {
            const Players = createPlayers(bots);
            setGame(createGame(currLang, Players));
          }}
        >
          {base.buttons[1]}
        </button>
      </Link>
      <Link to="/">
        <button
          type="button"
          className="btn"
          onClick={() => console.log('Cancel')}
        >
          {base.buttons[2]}
        </button>
      </Link>
    </div>
  );
}
