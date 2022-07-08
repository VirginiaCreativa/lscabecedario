import React from 'react';
import styled from 'styled-components';

const FooterCSS = styled.footer`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 20px 0;
  p {
    display: flex;
    font-size: 0.75rem;
    margin: 0 10px;
  }
`;

const Footer = () => {
  return (
    <FooterCSS>
      <p>Found/Dev: @Virginia.Creativa</p>
      <p>Gráfico: @Arte.Dise34</p>
      <p>Modelo: @YuliModel</p>
    </FooterCSS>
  );
};

export default Footer;
