import React from 'react';
import styled from 'styled-components';

import Variable from '../../styles/VariableStyled';

const NavigationCSS = styled.nav`
  display: flex;
  align-items: center;
  min-height: 88vh;
  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
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

function Navigation() {
  return (
    <NavigationCSS>
      <ul>
        <li>
          <i className="bx bx-font" />
        </li>
        <li>
          <i className="bx bxs-keyboard" />
        </li>
        <li>
          <i className="bx bx-joystick" />
        </li>
        <li>
          <i className="bx bx-book-open" />
        </li>
      </ul>
    </NavigationCSS>
  );
}

export default Navigation;
