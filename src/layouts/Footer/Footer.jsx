import React from 'react';
import styled from 'styled-components';
import Variable from '../../styles/VariableStyled';

const FooterCSS = styled.footer`
  display: flex;
  justify-content: center;
  .box {
    display: flex;
    justify-content: center;
    align-content: center;
    border-radius: 100px;
    padding: 20px 0;
    width: 40%;
    background-color: #fff;
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

const Footer = () => {
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
          Señante: <span>@YuliSenante</span>
        </p>
      </div>
    </FooterCSS>
  );
};

export default Footer;
