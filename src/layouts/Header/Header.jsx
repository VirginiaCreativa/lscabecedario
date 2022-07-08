import React from 'react';
import styled from 'styled-components';
import Logo from '../../common/Logo/Logo';

const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  padding: 40px 0;
  .col-10 {
    display: flex;
    justify-content: center;
  }
`;

function Header() {
  return (
    <>
      <HeaderStyle>
        <div className="container-fluid">
          <div className="row">
            <div className="col-1 d-flex justify-content-center">
              <Logo size="50px" />
            </div>
            <div className="col-10">
              <h2>Abecedario</h2>
            </div>
          </div>
        </div>
      </HeaderStyle>
    </>
  );
}

export default Header;
