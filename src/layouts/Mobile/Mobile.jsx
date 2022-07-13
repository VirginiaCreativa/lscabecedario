import React from 'react';
import styled from 'styled-components';

import Logo from '../../common/Logo/Logo';
import Variable from '../../styles/VariableStyled';

const MobileStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  .LogoBottom {
    margin-bottom: 20px;
  }
  .Wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    border-radius: 60px;
    background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
    padding: 60px;
    height: 88vh;
    width: 90vw;
    i {
      font-size: 4rem;
      color: ${Variable.blue3};
    }
  }
`;

function Mobile() {
  return (
    <MobileStyled>
      <Logo classes="LogoBottom" />
      <div className="Wrapper">
        <i className="bx bx-laptop" />
        <p>Usado en PC</p>
      </div>
    </MobileStyled>
  );
}

export default Mobile;
