/* eslint-disable import/no-named-default */
import React from 'react';

import { default as Senas_A } from '../../assets/gif/Senas_A.gif';
import { default as Senas_B } from '../../assets/gif/Senas_B.gif';
import { default as Senas_C } from '../../assets/gif/Senas_C.gif';
import { default as Senas_D } from '../../assets/gif/Senas_D.gif';
import { default as Senas_E } from '../../assets/gif/Senas_E.gif';
import { default as Senas_F } from '../../assets/gif/Senas_F.gif';
import { default as Senas_G } from '../../assets/gif/Senas_G.gif';

function OneLetter_Gif({ numkey, alt, src }) {
  return <img key={numkey} alt={alt} src={src} height="400px" />;
}

export default OneLetter_Gif;
