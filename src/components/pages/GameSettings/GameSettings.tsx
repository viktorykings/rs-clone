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

interface IGameSettings {
  setGame: (obj: IGame) => void;
}

export default function GameSettings({ setGame }: IGameSettings) {
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
      <h1>Настройки игры</h1>

      <div className="wrap-players">
        <div className="bot-settings">
          <h2>Плохие котейки</h2>
          <hr />
          <br />
          <div className="choose-level">
            <button
              className="btn"
              type="button"
              onClick={() => setModal(true)}
            >
              Выбрать уровень сложности
            </button>
          </div>
          <p className="game-level">{botLevel}</p>
          <form onSubmit={handleSubmit}>
            <div className="add-bot">
              <button type="submit" className="btn">
                Добавить котёночка
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
        </div>
        <div className="player-settings">
          {modalChangeName && (
            <ModalChangeName
              title="Change Name"
              updateName={updateNameMainPlayer}
              onChangeName={() => setModalChangeName(false)}
            />
          )}
          {modalChangeAvatar && (
            <ModalChangeAvatar
              curAvatar={mainPlayer.link}
              updateAvatar={updateAvatarMainPlayer}
              onChangeAvatar={() => setModalChangeAvatar(false)}
              title="Change Avatar"
            />
          )}
          <h2>Хороший котик</h2>
          <hr />
          <MainPlayer
            name={mainPlayer.name}
            isBot={false}
            level=""
            avatar={mainPlayer.link}
            openModalChangeName={() => setModalChangeName(true)}
            openModalChangeAvatar={() => setModalChangeAvatar(true)}
          />
        </div>
      </div>
      <hr />
      <div className="btn-group">
        <Link to="/desk">
          <button
            type="button"
            className="start-btn btn"
            onClick={() => {
              const Players = createPlayers(bots);
              setGame(createGame(Players));
            }}
          >
            Начать игру
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            className="btn"
            onClick={() => console.log('Cancel')}
          >
            Вернуться назад
          </button>
        </Link>
      </div>
    </div>
  );
}
