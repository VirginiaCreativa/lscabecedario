import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Wrapper = styled.div`
  min-height: 80vh;
  padding: 0 40px;
`;

function Layout({ children }) {
  return (
    <Fragment>
      <Header />
      <Wrapper>
        <div className="row">
          <div className="col-1">navs</div>
          <div className="col-11">screen</div>
        </div>
      </Wrapper>
      <Footer />
    </Fragment>
  );
}

export default Layout;
