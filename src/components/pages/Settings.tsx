import React from 'react';
import { Link } from 'react-router-dom';
import ISettings from '../../interface/ISettings';
import langs from '../../const/localization';

interface Main {
  settings: ISettings,
}

export default function Settings({ settings }: Main): JSX.Element {
  const currLang = settings.lang;
  return (
    <div className="settings-page-bg">
      <div className="container">
        <Link to="/"><button type="button" className="back-btn">x</button></Link>
        <div className="lang">
          <p>{langs[currLang].settings.language}</p>
          <select name="lang" id="lang">
            <option>Русский</option>
            <option>English</option>
          </select>
        </div>
      </div>
    </div>
  );
}
