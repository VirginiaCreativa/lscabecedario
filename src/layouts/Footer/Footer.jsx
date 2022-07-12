import React from 'react';
import styled from 'styled-components';

import Variable from '../../styles/VariableStyled';

const FooterCSS = styled.footer`
  display: flex;
  justify-content: center;
  .box {
    display: flex;
    align-content: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 100px;
    padding: 20px;
    p {
      font-size: 0.75rem;
      margin: 0 10px;
      font-weight: 300;
      color: ${Variable.grey4};
      span {
        font-weight: 600;
        color: ${Variable.grey4};
      }
    }
  }
`;

function Footer() {
  return (
    <FooterCSS>
      <div className="box">
        <p>
          Found/Dev: <span>@Virginia.Creativa</span>
        </p>
        <p>
          Gráfico: <span>@Arte.Dise34</span>
        </p>
        <p>
          Señante: <span>@YuleSenante</span>
        </p>
      </div>
    </FooterCSS>
  );
}

export default Footer;
