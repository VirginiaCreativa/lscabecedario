import React from 'react';
import styled from 'styled-components';
import Logo from '../../common/Logo/Logo';

const HeaderStyle = styled.header`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 15px;
`;

function Header() {
  return (
    <>
      <HeaderStyle>
        <Logo />
      </HeaderStyle>
    </>
  );
}

export default Header;
