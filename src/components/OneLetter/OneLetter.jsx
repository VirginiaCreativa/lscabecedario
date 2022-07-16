import React,  { useEffect, useState, Fragment} from 'react';

import { Wrapper, BoxLetter } from './OneLetterStyled';
import { senasData } from '../../data/senas';


const OneLetter = () => {
  const [isLetter, setIsletter] = useState('a');

  useEffect(() => {
    window.addEventListener("keyup", (ev) => {
      if (ev.key || ev.keyCode !== undefined) {
        setIsletter(ev.key)
        console.log(ev.key);
      }
    })
  }, []);

  return (
    <Fragment>
      <Wrapper>
        <div className="box">
          {
            senasData.map((data, index) => (
              <p key={index}> {data.key}</p>
            ))
          }
        </div>
        <div className="box">
          <BoxLetter>
            <p>{isLetter.toUpperCase()}</p>
          </BoxLetter>
        </div>
      </Wrapper>
    </Fragment>
  );
}

export default OneLetter;
