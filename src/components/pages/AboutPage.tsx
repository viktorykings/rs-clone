import React from 'react';
import { Link } from 'react-router-dom';
import vika from '../../assets/team/vika.png';
import eugene from '../../assets/team/eugene.jpg';
import andrei from '../../assets/team/andrei.jpg';
import langs from '../../const/localization';
import IGame from '../../interface/IGame';

interface About {
  game: IGame,
}

export default function AboutPage({ game }: About): JSX.Element {
  const currLang = game.settings.lang;
  const base = langs[currLang].aboutPage;
  return (
    <div className="wrap-team">
      <div className="team-desc">
        <h3>{base.ourTeam}</h3>
        <a href="https://rs.school/js/" className="logo">
          <img
            src="https://rs.school/images/rs_school_js.svg"
            width="80"
            alt="rs scholl"
          />
          -2023
        </a>
        <Link to="/">
          <button type="button" className="back-btn">
            {'<-'}
          </button>
        </Link>
      </div>
      <div className="team-list">
        <div className="row">
          <p className="right">
            {/* These are */}
            {base.about[0]}
            <br />
            <span>
              {/* BAD */}
              {base.about[1]}
            </span>
          </p>
          <div
            className="row-item"
            style={{ backgroundImage: 'url(/cards/ru//bang1.png)' }}
          />
          <div className="row-item item-container">
            <div
              className="front"
              style={{ backgroundImage: `url(${andrei})` }}
            >
              <p className="item-name white">{base.names[0]}</p>
            </div>
            <div className="back">
              <p>Back-End</p>
              <p>
                <a href="https://github.com/andkhiz">Github</a>
              </p>
            </div>
          </div>
          <div
            className="row-item"
            style={{ backgroundImage: 'url(/cards/ru/bang3.png)' }}
          />
        </div>
        <div className="row">
          <div className="row-item item-container">
            <div className="front" style={{ backgroundImage: `url(${vika})` }}>
              <p className="item-name green">{base.names[1]}</p>
            </div>
            <div className="back">
              <p>Team Lead</p>
              <p>Front-End</p>
              <p>
                <a href="https://github.com/viktorykings">Github</a>
              </p>
            </div>
          </div>
          <div
            className="row-item"
            style={{ backgroundImage: 'url(/cards/ru/defuse1.png)' }}
          />
          <div
            className="row-item"
            style={{ backgroundImage: 'url(/cards/ru/defuse3.png)' }}
          />
          <p className="left">
            {/* These are */}
            {base.about[0]}
            <br />
            <span>
              {/* GOOD */}
              {base.about[2]}
            </span>
          </p>
        </div>
        <div className="row">
          <p className="right">
            {/* These Always */}
            {base.about[3]}
            <br />
            <span>
              {/* HELP */}
              {base.about[4]}
            </span>
          </p>
          <div
            className="row-item"
            style={{ backgroundImage: 'url(/cards/ru/no1.png)' }}
          />
          <div className="row-item item-container">
            <div
              className="front"
              style={{ backgroundImage: `url(${eugene})` }}
            >
              <p className="item-name pink">{base.names[2]}</p>
            </div>
            <div className="back">
              <p>Front-End</p>
              <p>
                <a href="https://github.com/gangeya">Github</a>
              </p>
            </div>
          </div>
          <div
            className="row-item"
            style={{ backgroundImage: 'url(/cards/ru/future1.png)' }}
          />
        </div>
      </div>
    </div>
  );
}
