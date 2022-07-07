import React from 'react';
import styled from 'styled-components';
import LogoSVG from '/src/assets/icons/icon32.png';

const HeaderStyle = styled.div`
  display: flex;
`;

const ImgStyle = styled.img`
  height: ${({ size }) => size || '40px'};
`;

const Logo = ({ size }) => {
  return (
    <>
      <HeaderStyle>
        <h1>LSC</h1>
        <ImgStyle src={LogoSVG} alt="Icono de Logo LSC Colombia" size={size} />
        <h2>Abecedario</h2>
      </HeaderStyle>
    </>
  );
};

export default Logo;
