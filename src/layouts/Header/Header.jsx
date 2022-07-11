import React, { Fragment } from 'react';
import styled from 'styled-components';

import Logo from '../../common/Logo/Logo';

const HeaderStyle = styled.header`
  display: inline-grid;
  gap: 20px;
  grid-template-columns: 62px 1fr;
  justify-content: center;
  width: 100vw;
  padding: 16px 60px 16px 40px;
  justify-items: center;
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
