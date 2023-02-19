import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import langs from '../../const/localization';
import { Setter } from '../../interface/IGameProp';

// interface Main {
//   settings: ISettings,
// }

export default function Settings({ game, setGame }: Setter): JSX.Element {
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
    console.log(currLang, game.settings);
  };
  return (
    <div className="settings-page-bg">
      <div className="container">
        <Link to="/"><button type="button" className="back-btn">{'<-'}</button></Link>
        <div className="sound">
          <p>{langs[currLang].settings.sound}</p>
          <label className="switch" htmlFor="switch">
            <input type="checkbox" id="switch" />
            <span className="slider round" />
          </label>
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
