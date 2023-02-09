import React from 'react';
// import Carousel from './carousel';
import av1big from '../../../assets/avatars/av1-big.jpg';

import Carousel from './carousel';

interface IModalChangeAvatar {
  title: string;
}
export default function ModalChangeAvatar({ title }: IModalChangeAvatar) {
  // const [urlAv, setUrAv] = useState(av1big);
  // const updateUrlAv = (url: string) => {
  //   setUrAv(url);
  // };
  return (
    <div className="wrap-modal">
      {/* <Carousel /> */}
      <div className="modal">
        <h1 className="modal-title">{title}</h1>
        <div className="modal-body">
          <div className="wrap-avatar">
            <div
              className="avatar"
              style={{
                backgroundImage: `url(${av1big})`,
                backgroundSize: 'cover',
              }}
            >
              avatar
            </div>
            <div className="wrap-carousel">
              <Carousel />
            </div>
          </div>
          <div className="btn-groupe">
            <button type="button" className="btn" onClick={() => {}}>
              Done
            </button>
            <button type="button" className="btn" onClick={() => {}}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
