import React,  { useEffect, useState, Fragment} from 'react';

import { Wrapper, BoxLetter } from './OneLetterStyled';
import { senasData } from '../../data/senas';
import Images from './OneLetter_Images';


const OneLetter = () => {
  const [hasLetter, setHasletter] = useState('a');

  useEffect(() => {
    window.addEventListener("keyup", (ev) => {
      if (ev.key || ev.keyCode !== undefined) {
        setHasletter(ev.key)
      }
    })
  }, []);

  const isLetter = (senasData.filter(data => data.key == hasLetter.toUpperCase()))

  return (
    <Fragment>
      <Wrapper>
        <div className="box">
          {
            isLetter.map((data, index) =>  (
              <Images key={index} alt={data.title} svg={data.images} />
             ))
          }
        </div>
        <div className="box">
          <BoxLetter>
            <p>{hasLetter.toUpperCase()}</p>
            <img src="" alt="" />
          </BoxLetter>
        </div>
      </Wrapper>
    </Fragment>
  );
}

export default OneLetter;
