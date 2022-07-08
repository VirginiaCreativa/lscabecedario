import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Navigation from './Navigation/Navigation';

const Wrapper = styled.div`
  padding: 0 60px 0 40px;
  .screen {
    .col-11 {
      min-height: 88vh;
      background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
      border-radius: 60px;
      padding: 80px 100px;
    }
  }
  .footer {
    position: absolute;
    width: 100vw;
    bottom: 0;
  }
`;

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Wrapper>
        <div className="row screen">
          <div className="col-1">
            <Navigation />
          </div>
          <div className="col-11">{children}</div>
        </div>
        <div className="row footer">
          <div className="col-1"></div>
          <div className="col-11">
            <Footer />
          </div>
        </div>
      </Wrapper>
    </Fragment>
  );
};

export default Layout;
