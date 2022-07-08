import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Wrapper = styled.div`
  padding: 0 60px 0 40px;
  .col-11 {
    min-height: 85vh;
    background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
    border-radius: 60px;
    padding: 80px 100px;
  }
`;

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Wrapper>
        <div className="row">
          <div className="col-1">navs</div>
          <div className="col-11">{children}</div>
        </div>
      </Wrapper>
      <Footer />
    </Fragment>
  );
};

export default Layout;
