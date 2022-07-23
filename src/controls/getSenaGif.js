import Senas_A from '../assets/gif/Senas_A.gif';
import Senas_B from '../assets/gif/Senas_B.gif';
import Senas_C from '../assets/gif/Senas_C.gif';
import Senas_D from '../assets/gif/Senas_D.gif';
import Senas_E from '../assets/gif/Senas_E.gif';
import Senas_F from '../assets/gif/Senas_F.gif';
import Senas_G from '../assets/gif/Senas_G.gif';

const arryGif = [Senas_A, Senas_B, Senas_C, Senas_D, Senas_E, Senas_F, Senas_G];

const getSenaGif = (id) => {
  const avalidadpGif = arryGif.filter((item, index) => index === id);
  return avalidadpGif.toString();
};

export default getSenaGif;
