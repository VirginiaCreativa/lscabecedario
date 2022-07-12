import React, { Fragment } from 'react';
import styled from 'styled-components';

import Logo from '../../common/Logo/Logo';

const HeaderStyle = styled.header`
  display: inline-grid;
  grid-template-columns: 62px 1fr;
  justify-content: center;
  justify-items: center;
  gap: 20px;
  width: 100vw;
  padding: 16px 60px 16px 40px;
  .row {
    width: 100vw;
  }
  .col {
  }
  h1 {
    font-weight: 800;
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <div>
        <Logo size="50px" />
      </div>
      <div>
        <h1>Abecedario</h1>
      </div>
    </HeaderStyle>
  );
}
export default Header;
