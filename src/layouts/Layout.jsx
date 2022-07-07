import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';

const Wrapper = styled.div`
  min-height: 82vh;
`;

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <Wrapper>{children}</Wrapper>
      <footer>
        <p>found/dev: @Virginia.Creativa</p>
        <p>gráfico seña: @Arte.Dise34</p>
        <p>modelo: @YuliModel</p>
      </footer>
    </Fragment>
  );
}

export default Layout;
