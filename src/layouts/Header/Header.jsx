import React from 'react';
import styled from 'styled-components';
import Logo from '../../common/Logo/Logo';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  padding: 16px 60px 16px 40px;
  .row {
    width: 100vw;
  }
  .col-11 {
    display: flex;
    justify-content: center;
  }
  h1 {
    font-weight: 800;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <div className="row">
          <div className="col-1 d-flex justify-content-center">
            <Logo size="50px" />
          </div>
          <div className="col-11">
            <h1>Abecedario</h1>
          </div>
        </div>
      </HeaderStyle>
    </>
  );
};
export default Header;
