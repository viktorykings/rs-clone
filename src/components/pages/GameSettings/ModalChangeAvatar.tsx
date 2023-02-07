import React from 'react';

interface IModalChangeAvatar {
  title: string;
}

export default function ModalChangeAvatar({ title }: IModalChangeAvatar) {
  return (
    <div className="wrap-modal">
      <div className="modal">
        <h1 className="modal-title">{title}</h1>
      </div>
    </div>
  );
}
