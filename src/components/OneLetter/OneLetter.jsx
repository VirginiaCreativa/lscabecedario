import React, { Fragment, useEffect, useState } from 'react';

import getSenaGif from '../../controls/getSenaGif';
import getSenaImg from '../../controls/getSenaImg';
import senasData from '../../data/senas';
import { BoxLetter, Wrapper } from './OneLetterStyled';

function OneLetter() {
  const [hasLetter, setHasletter] = useState('a');
  const [takeImg, setTakeImg] = useState('');

  useEffect(() => {
    window.addEventListener('keyup', (ev) => {
      if (ev.key || ev.keyCode !== undefined) {
        setHasletter(ev.key);
      }
    });
  }, []);

  const isLetter = senasData.filter(
    (data) => data.key === hasLetter.toUpperCase(),
  );

  return (
    <Wrapper className="d-flex align-items-center justify-content-center">
      <h3 className="pb-5">
        Escribe la tecla cualquiera con tu dedo, aprenderlo LSC
      </h3>
      <div className="box pb-5">
        <div className="row">
          <div className="col d-flex align-items-center">
            {isLetter.map((data, index) => (
              <img
                key={index}
                alt={`Ilustración mano de ${data.title}`}
                src={getSenaGif(data.id)}
                className="img-fluid"
              />
            ))}
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            {isLetter.map((data, index) => (
              <img
                key={index}
                alt={`Ilustración mano de ${data.title}`}
                src={getSenaImg(data.id)}
                className="img-fluid"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="box d-flex align-items-center justify-content-center">
        <BoxLetter>
          <p>{hasLetter.toUpperCase()}</p>
          <img src="" alt="" />
        </BoxLetter>
      </div>
    </Wrapper>
  );
}

export default OneLetter;
