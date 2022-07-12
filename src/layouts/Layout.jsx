import React, { Fragment } from 'react';
import styled from 'styled-components';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navigation from './Navigation/Navigation';

const Wrapper = styled.div`
  display: inline-grid;
  width: 100vw;
  padding: 0 40px;
  grid-template-columns: 62px 1fr;
  .Screen {
    position: relative;
    background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
    border-radius: 60px;
    min-height: 88vh;
    padding: 80px 100px;
  }
`;

const FooterStyled = styled.div`
  display: block;
  position: absolute;
  bottom: -25px;
  margin: 0 25%;
`;

function Layout({ children }) {
  return (
    <>
      <Header />
      <Wrapper>
        <div className="Nav">
          <Navigation />
        </div>
        <div className="Screen">
          {children}
          <FooterStyled>
            <Footer />
          </FooterStyled>
        </div>
      </Wrapper>
    </>
  );
}

export default Layout;
