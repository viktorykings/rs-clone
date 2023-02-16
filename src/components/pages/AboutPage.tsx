import React from 'react';
import vika from '../../assets/team/vika.png';
import eugene from '../../assets/team/eugene.jpg';
import andrei from '../../assets/team/andrei.jpg';

export default function AboutPage(): JSX.Element {
  return (
    <>
      {/* <h2>
        Познакомьтесь с командой
        <br />
        Наши профессионалы
      </h2> */}
      <div className="wrap-team">
        <div className="team-desc">
          <h3>НАША КОМАНДА</h3>
        </div>
        <div className="team-list">
          <div className="row">
            <p className="right">
              {/* These are */}
              Эти
              <br />
              <span>
                {/* BAD */}
                Плохие
              </span>
            </p>
            <div
              className="row-item"
              style={{ backgroundImage: 'url(/cards/bang1.png)' }}
            />
            <div className="row-item item-container">
              <div
                className="front"
                style={{ backgroundImage: `url(${andrei})` }}
              >
                <p className="item-name white">Андрей</p>
              </div>
              <div className="back">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div
              className="row-item"
              style={{ backgroundImage: 'url(/cards/bang3.png)' }}
            />
          </div>
          <div className="row">
            <div
              className="row-item"
              style={{ backgroundImage: 'url(/cards/neutralize1.png)' }}
            />
            <div className="row-item item-container">
              <div
                className="front"
                style={{ backgroundImage: `url(${vika})` }}
              >
                <p className="item-name green">Вика</p>
              </div>
              <div className="back">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div
              className="row-item"
              style={{ backgroundImage: 'url(/cards/neutralize3.png)' }}
            />
            <p className="left">
              {/* These are */}
              Эти
              <br />
              <span>
                {/* GOOD */}
                Хорошие
              </span>
            </p>
          </div>
          <div className="row">
            <p className="right">
              {/* These Always */}
              Эти всегда
              <br />
              <span>
                {/* HELP */}
                Помогут
              </span>
            </p>
            <div
              className="row-item"
              style={{ backgroundImage: 'url(/cards/no1.png)' }}
            />
            <div className="row-item item-container">
              <div
                className="front"
                style={{ backgroundImage: `url(${eugene})` }}
              >
                <p className="item-name pink">Евгений</p>
              </div>
              <div className="back">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div
              className="row-item"
              style={{ backgroundImage: 'url(/cards/future1.png)' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
