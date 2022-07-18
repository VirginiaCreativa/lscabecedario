import React, { Fragment, useEffect, useState } from 'react';

import senasData from '../../data/senas';
import { BoxLetter, Wrapper } from './OneLetterStyled';
import Gif from './OneLetter_Gif';
import Ilust from './OneLetter_Ilust';

function OneLetter() {
  const [hasLetter, setHasletter] = useState('a');

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
      <div className="box">
        <div className="row">
          <div className="col d-flex align-items-center">
            {isLetter.map((data, index) => (
              <Gif
                key={index}
                alt={`Ilustración mano de ${data.title}`}
                src={data.gif}
              />
            ))}
          </div>
          <div className="col d-flex align-items-center justify-content-center">
            {isLetter.map((data, index) => (
              <Ilust
                key={index}
                alt={`Ilustración mano de ${data.title}`}
                src={data.images}
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
