import React, { useState } from 'react';
import av1big from '../../../assets/avatars/av1-big.jpg';
import av2big from '../../../assets/avatars/av2-big.jpg';
import av3big from '../../../assets/avatars/av3-big.jpg';
import av4big from '../../../assets/avatars/av4-big.jpg';
import av5big from '../../../assets/avatars/av5-big.jpg';
import av6big from '../../../assets/avatars/av6-big.jpg';
import av7big from '../../../assets/avatars/av7-big.jpg';
import av8big from '../../../assets/avatars/av8-big.jpg';

const { log } = console;
export default function Carousel() {
  const data = [
    { big: av1big, small: av1big },
    { big: av2big, small: av2big },
    { big: av3big, small: av3big },
    { big: av4big, small: av4big },
    { big: av5big, small: av5big },
    { big: av6big, small: av6big },
    { big: av7big, small: av7big },
    { big: av8big, small: av8big },
  ];

  const [currentIndex, setIndex] = useState(0);
  const length = 3;

  const handlePrevious = () => {
    const newIndex = currentIndex - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };
  function toggleClass(target: EventTarget) {
    log(target);
    const levelItems = document.querySelectorAll('.item-img');
    levelItems.forEach((item) => item.classList.remove('active'));
    (target as HTMLElement).classList.toggle('active');
  }

  return (
    <>
      <div className="controls">
        <button type="button" onClick={handlePrevious}>
          Previous
        </button>
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </div>
      <div className="wrap-avatar-list">
        <div className="avatar-list">
          {data.map((item) => (
            <div
              className="avatar-list-item"
              style={{ transform: `translate(-${currentIndex * 100}%)` }}
              key={item.big}
            >
              <div
                className="item-img"
                style={{
                  backgroundImage: `url(${item.big})`,
                  backgroundSize: 'cover',
                }}
                onClick={(e) => toggleClass(e.target)}
                onKeyPress={(e) => toggleClass(e.target)}
                role="presentation"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
