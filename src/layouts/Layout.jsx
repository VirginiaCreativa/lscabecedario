import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';

const Wrapper = styled.div`
  min-height: 82vh;
  padding: 0 40px;
`;

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <Wrapper>
        <div className="row">
          <div className="col-2">navs</div>
          <div className="col-10">screen</div>
        </div>
      </Wrapper>
      <footer>
        <p>found/dev: @Virginia.Creativa</p>
        <p>gráfico seña: @Arte.Dise34</p>
        <p>modelo: @YuliModel</p>
      </footer>
    </Fragment>
  );
}

export default Layout;
