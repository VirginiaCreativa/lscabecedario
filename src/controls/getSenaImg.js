import Senas_A from '../assets/images/Senas_A.svg';
import Senas_B from '../assets/images/Senas_B.svg';
import Senas_C from '../assets/images/Senas_C.svg';
import Senas_D from '../assets/images/Senas_D.svg';
import Senas_E from '../assets/images/Senas_E.svg';
import Senas_F from '../assets/images/Senas_F.svg';
import Senas_G from '../assets/images/Senas_G.svg';

const arryImgs = [
  Senas_A,
  Senas_B,
  Senas_C,
  Senas_D,
  Senas_E,
  Senas_F,
  Senas_G,
];

const getSenaImg = (id) => {
  const avalidadpGif = arryImgs.filter((item, index) => index === id);
  return avalidadpGif.toString();
};

export default getSenaImg;
