import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-height: 82vh;
`;

function Layout({ children }) {
  return (
    <div>
      <header>LSC Abecedario</header>
      <Wrapper>{children}</Wrapper>
      <footer>
        <p>found/dev: @Virginia.Creativa</p>
      </footer>
    </div>
  );
}

export default Layout;
