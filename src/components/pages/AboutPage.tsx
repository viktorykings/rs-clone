import React from 'react';

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
          <h3>OUR TEAM</h3>
        </div>
        <div className="team-list">
          <div className="row">
            <p className="right">
              These are
              <br />
              <span>BAD</span>
            </p>
            <div
              className="row-item"
              style={{ backgroundImage: 'url(/cards/bang1.png)' }}
            />
            <div
              className="row-item"
              style={{ backgroundImage: 'url(/cards/bang2.png)' }}
            />
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
            <div
              className="row-item"
              style={{ backgroundImage: 'url(/cards/neutralize2.png)' }}
            />
            <div
              className="row-item"
              style={{ backgroundImage: 'url(/cards/neutralize3.png)' }}
            />
            <p className="left">
              These are
              <br />
              <span>GOOD</span>
            </p>
          </div>
          <div className="row">
            <p className="right">
              These Always
              <br />
              <span>HELP</span>
            </p>
            <div
              className="row-item"
              style={{ backgroundImage: 'url(/cards/no1.png)' }}
            />
            <div
              className="row-item"
              style={{ backgroundImage: 'url(/cards/attack1.png)' }}
            />
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
