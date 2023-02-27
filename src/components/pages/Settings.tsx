import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import langs from '../../const/localization';
import { Setter } from '../../interface/IGameProp';
import boopSfx from '../../assets/sounds/sound.mp3';

// interface ISettings extends Setter {
//   // playAudio: boolean,
//   // setPlayAudio: React.Dispatch<React.SetStateAction<boolean>>;
// }

export default function Settings({
  game,
  setGame,
  // playAudio,
  // setPlayAudio,
}: Setter): JSX.Element {
  // const currLang = game.settings.lang;
  const [currLang, setCurrLang] = useState(game.settings.lang);
  const [play, { stop }] = useSound(boopSfx);
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
    console.log(currLang, game.settings);
  };
  const [playing, setPlaying] = useState(false);
  const toggleAudio = function (isPlay: boolean) {
    // eslint-disable-next-line no-param-reassign
    isPlay = !isPlay;
    setPlaying(isPlay);
    console.log(isPlay);
    return isPlay;
  };
  const handlePlay = (isPlay: boolean) => {
    toggleAudio(isPlay);
    if (toggleAudio(isPlay)) {
      console.log('playAud');
      return play();
    }
    return stop();
  };
  return (
    <div className="settings-page-bg">
      <div className="container">
        <Link to="/"><button type="button" className="back-btn">{'<-'}</button></Link>
        <div className="sound">
          <p>{langs[currLang].settings.sound}</p>
          <label className="switch" htmlFor="switch">
            <input
              type="checkbox"
              id="switch"
              checked={playing}
              onChange={() => handlePlay(playing)}
              // onChange={() => play()}
            />
            <span className="slider round" />
          </label>
          {/* <button onClick={() => play()} type="button">Boop!</button> */}
        </div>
        <div className="lang">
          <p>{langs[currLang].settings.language}</p>
          <select name="lang" id="lang" onChange={() => changeLang()}>
            <option value="ru" selected={currLang === 'ru'}>Русский</option>
            <option value="en" selected={currLang === 'en'}>English</option>
          </select>
        </div>
      </div>
    </div>
  );
}
