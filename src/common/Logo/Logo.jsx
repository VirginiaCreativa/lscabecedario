import React from 'react';
import styled from 'styled-components';
import LogoSVG from '/src/assets/logo/Logo.svg';

const LogoStyled = styled.div``;

const ImgStyle = styled.img`
  height: ${({ size }) => size || '40px'};
`;

const Logo = ({ size }) => {
  return (
    <>
      <LogoStyled>
        <ImgStyle src={LogoSVG} alt="Icono de Logo LSC Colombia" size={size} />
      </LogoStyled>
    </>
  );
};

export default Logo;
