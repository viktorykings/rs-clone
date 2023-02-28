import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import langs from '../../const/localization';
import { Setter } from '../../interface/IGameProp';

export default function Settings({
  game,
  setGame,
  // playAudio,
  // setPlayAudio,
}: Setter): JSX.Element {
  // const currLang = game.settings.lang;
  const [currLang, setCurrLang] = useState(game.settings.lang);
  const changeLang = () => {
    if (currLang === 'en') {
      // eslint-disable-next-line no-param-reassign
      game.settings.lang = 'ru';
      setCurrLang('ru');
      setGame(game);
    }
    if (currLang === 'ru') {
      // eslint-disable-next-line no-param-reassign
      game.settings.lang = 'en';
      setCurrLang('en');
      setGame(game);
    }
  };
  const base = langs[currLang].settings;

  const aud = '/sound.mp3';
  const audio = new Audio();
  audio.src = aud;
  audio.volume = 0.65;
  audio.loop = true;

  return (
    <div className="settings-page-bg">
      <div className="container">
        <Link to="/"><button type="button" className="back-btn">{'<-'}</button></Link>
        <div className="sound">
          <p>{langs[currLang].settings.sound}</p>
          <button type="button" onClick={() => audio.play()}>{base.buttons[0]}</button>
          <button type="button" onClick={() => audio.pause()}>{base.buttons[1]}</button>
          {/* <label className="switch" htmlFor="switch">
            <input
              type="checkbox"
              id="switch"
              checked={playing}
              onChange={() => handlePlay(playing)}
              // onChange={() => play()}
            />
            <span className="slider round" />
          </label> */}
          {/* <button onClick={() => audio.play()} type="button">Boop!</button> */}
        </div>
        <div className="lang">
          <p>{langs[currLang].settings.language}</p>
          <select name="lang" id="lang" onChange={() => changeLang()} value={currLang}>
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </div>
  );
}
