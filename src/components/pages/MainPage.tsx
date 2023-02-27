import React from 'react';
import { Link } from 'react-router-dom';
import langs from '../../const/localization';
// import IGame from '../../interface/IGame';
import ISettings from '../../interface/ISettings';

interface Main {
  settings: ISettings;
}

export default function MainPage({ settings }: Main): JSX.Element {
  const currLang = settings.lang;
  console.log(currLang);
  return (
    <div className="main-page-bg">
      <div className="container">
        <Link to="gamesettings">
          <button type="button">{langs[currLang].main.start}</button>
        </Link>
        <Link to="settings">
          <button type="button">{langs[currLang].main.settings}</button>
        </Link>
        <Link to="rules">
          <button type="button">{langs[currLang].main.rules}</button>
        </Link>
        <Link to="about">
          <button type="button">{langs[currLang].main.about}</button>
        </Link>
      </div>
    </div>
  );
}
