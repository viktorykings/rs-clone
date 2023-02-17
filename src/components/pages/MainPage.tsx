import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage(): JSX.Element {
  return (
    <div className="main-page-bg">
      <div className="container">
        <Link to="gamesettings">
          <button type="button">Начать</button>
        </Link>
        <Link to="settings">
          <button type="button">Настройки</button>
        </Link>
        <Link to="rules">
          <button type="button">Правила</button>
        </Link>
        <Link to="about">
          <button type="button">О нас</button>
        </Link>
      </div>
    </div>
  );
}
