import React from 'react';
import styled from 'styled-components';

const MobileStyled = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  .Wrapper {
    display: flex;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
    border-radius: 60px;
    background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
    padding: 60px;
    height: 94vh;
    width: 90vw;
  }
`;

function Mobile() {
  return (
    <MobileStyled>
      <div className="Wrapper">
        <h1>Mobile</h1>
      </div>
    </MobileStyled>
  );
}

export default Mobile;
