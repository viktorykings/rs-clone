import React, { useState } from 'react';
import Carousel from './carousel';
import audiourl from '../../../assets/sounds/button-click.mp3';

interface IModalChangeAvatar {
  title: string;
  curAvatar: string;
  onChangeAvatar: () => void;
  updateAvatar: (value: string) => void;
}
export default function ModalChangeAvatar({
  title,
  curAvatar,
  onChangeAvatar,
  updateAvatar,
}: IModalChangeAvatar) {
  const [urlAv, setUrAv] = useState(curAvatar);
  const updateUrlAv = (url: string) => {
    setUrAv(url);
  };

  const audio = new Audio(audiourl);
  const buttonClick = () => {
    audio.play();
  };
  return (
    <div className="wrap-modal">
      <div className="modal">
        <h1 className="modal-title">{title}</h1>
        <div className="modal-body">
          <div className="wrap-avatar">
            <div
              className="avatar"
              style={{
                backgroundImage: `url(${urlAv})`,
                backgroundSize: 'cover',
              }}
            />
            <div className="wrap-carousel">
              <Carousel curAvatar={curAvatar} updateUrlAv={updateUrlAv} />
            </div>
          </div>
          <div className="btn-group">
            <button
              type="button"
              className="btn"
              onClick={() => {
                buttonClick();
                updateAvatar(urlAv);
                onChangeAvatar();
              }}
            >
              Готово
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => {
                buttonClick();
                onChangeAvatar();
              }}
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
