import React,  { useEffect, useState, Fragment} from 'react';

import { Wrapper, BoxLetter} from './OneLetterStyled';


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
          <img src="" alt="A" />
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
