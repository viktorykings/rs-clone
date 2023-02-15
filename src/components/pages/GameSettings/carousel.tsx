import React, { useState } from 'react';
import ICarouselSettings from '../../../interface/ICarouselSettings';

import av1big from '../../../assets/avatars/av1-big.jpg';
import av2big from '../../../assets/avatars/av2-big.jpg';
import av3big from '../../../assets/avatars/av3-big.jpg';
import av4big from '../../../assets/avatars/av4-big.jpg';
import av5big from '../../../assets/avatars/av5-big.jpg';
import av6big from '../../../assets/avatars/av6-big.jpg';
import av7big from '../../../assets/avatars/av7-big.jpg';
import av8big from '../../../assets/avatars/av8-big.jpg';
import av9big from '../../../assets/avatars/av9-big.jpg';
import audiourl from '../../../assets/sounds/button-click.mp3';

export default function Carousel({
  curAvatar,
  updateUrlAv,
}: ICarouselSettings) {
  const audio = new Audio(audiourl);
  const buttonClick = () => {
    audio.play();
  };
  const data = [
    { big: av1big, small: av1big },
    { big: av2big, small: av2big },
    { big: av3big, small: av3big },
    { big: av4big, small: av4big },
    { big: av5big, small: av5big },
    { big: av6big, small: av6big },
    { big: av7big, small: av7big },
    { big: av8big, small: av8big },
    { big: av9big, small: av9big },
  ];

  const [currentIndex, setIndex] = useState(0);
  const length = 4;

  const handlePrevious = () => {
    const newIndex = currentIndex - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  function toggleClass(target: EventTarget) {
    const levelItems = document.querySelectorAll('.item-img');
    levelItems.forEach((item) => item.classList.remove('active'));
    (target as HTMLElement).classList.toggle('active');
  }

  function selectAvatar(target: EventTarget) {
    toggleClass(target);
    const targetUrl = (target as HTMLElement).style.backgroundImage
      .slice(4, -1)
      .replace(/"/g, '');
    updateUrlAv(targetUrl);
  }

  return (
    <>
      <div className="btn-group">
        <button
          className="btn"
          type="button"
          onClick={() => {
            handlePrevious();
            buttonClick();
          }}
        >
          Назад
        </button>
        <button
          className="btn"
          type="button"
          onClick={() => {
            handleNext();
            buttonClick();
          }}
        >
          Вперёд
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
                className={
                  curAvatar === item.big ? 'item-img active' : 'item-img'
                }
                style={{
                  backgroundImage: `url(${item.big})`,
                  backgroundSize: 'cover',
                }}
                onClick={(e) => selectAvatar(e.target)}
                onKeyPress={(e) => selectAvatar(e.target)}
                role="presentation"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
