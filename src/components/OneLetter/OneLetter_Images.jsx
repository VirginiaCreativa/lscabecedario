import React from 'react';
import { default as Senas_A} from '../../assets/images/Senas_A.svg';
import { default as Senas_B} from '../../assets/images/Senas_B.svg';
import { default as Senas_C} from '../../assets/images/Senas_C.svg';
import { default as Senas_D} from '../../assets/images/Senas_D.svg';
import { default as Senas_E} from '../../assets/images/Senas_E.svg';
import { default as Senas_F} from '../../assets/images/Senas_F.svg';
import { default as Senas_G} from '../../assets/images/Senas_G.svg';

const OneLetter_Images = ({ numkey, alt, src}) => {
  return (
    <>
      <img key={ numkey} alt={alt} src={src} height="450px"/>
    </>
  );
}

export default OneLetter_Images;
