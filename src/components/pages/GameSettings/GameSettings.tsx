import React from 'react';
import Bot from './Bot';
import MainPlayer from './MainPlayer';
import ModalBot from './ModalBot';
import ModalChangeName from './ModalChangeName';
import ModalChangeAvatar from './ModalChangeAvatar';
import useSettings from './useSettings';

export default function GameSettings() {
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
      <button
        type="button"
        className="start-btn btn"
        onClick={() => createPlayers(bots)}
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
