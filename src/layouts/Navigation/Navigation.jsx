import React from 'react';
import styled from 'styled-components';
import Variable from '../../styles/VariableStyled';

const NavigationCSS = styled.nav`
  display: flex;
  align-items: center;
  min-height: 88vh;
  ul {
    list-style: none;
    li {
      margin-bottom: 10px;
      cursor: pointer;
      &:hover {
        i {
          color: ${Variable.blue1};
        }
      }
      i {
        font-size: 24px;
        color: ${Variable.grey4};
      }
    }
  }
`;

const Navigation = () => {
  return (
    <>
      <NavigationCSS>
        <ul>
          <li>
            <i class="bx bx-font"></i>
          </li>
          <li>
            <i class="bx bxs-keyboard"></i>
          </li>
          <li>
            <i class="bx bx-joystick"></i>
          </li>
          <li>
            <i class="bx bx-book-open"></i>
          </li>
        </ul>
      </NavigationCSS>
    </>
  );
};

export default Navigation;
