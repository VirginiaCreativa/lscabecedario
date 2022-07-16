import React,  { useEffect, useState, Fragment} from 'react';

import { Wrapper, BoxLetter } from './OneLetterStyled';
import { senasData } from '../../data/senas';


const OneLetter = () => {
  const [isLetter, setIsletter] = useState('');
  const [hasLetter, setHasletter] = useState('a');

  useEffect(() => {
    window.addEventListener("keyup", (ev) => {
      if (ev.key || ev.keyCode !== undefined) {
        setHasletter(ev.key)
        console.log(hasLetter);
      }
    })
  }, []);

  return (
    <Fragment>
      <Wrapper>
        <div className="box">
          {
            senasData.filter(data => data.key == {hasLetter}).map((filter, index) =>  (
              <p key={index}>{filter.images}</p>
             ))
          }
        </div>
        <div className="box">
          <BoxLetter>
            <p>{hasLetter.toUpperCase()}</p>
          </BoxLetter>
        </div>
      </Wrapper>
    </Fragment>
  );
}

export default OneLetter;
