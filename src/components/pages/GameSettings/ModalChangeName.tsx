import React, { useState } from 'react';

interface IModalChangeName {
  title: string;
  updateName: (value: string) => void;
  onChangeName: () => void;
  localLang: string[];
}

export default function ModalChangeName({
  title,
  updateName,
  onChangeName,
  localLang,
}: IModalChangeName) {
  const [username, setUsername] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      const el = document.querySelector(
        '.modal-body-input',
      ) as HTMLInputElement;
      el.placeholder = 'Enter something...';
      return;
    }
    updateName(username);
    onChangeName();
  };
  return (
    <div className="wrap-modal">
      <div className="modal">
        <h1 className="modal-title">{title}</h1>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <label className="modal-body-label" htmlFor="myinput">
              {localLang[1]}
              <br />
              <input
                className="modal-body-input"
                type="text"
                name="myinput"
                value={username}
                onChange={(e) => {
                  setUsername(e.currentTarget.value);
                }}
              />
            </label>
            <br />
            <input className="modal-body-btn submit" type="submit" value="OK" />
            <input
              className="modal-body-btn cancel"
              type="button"
              value={`${localLang[2]}`}
              onClick={() => onChangeName()}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
