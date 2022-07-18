import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/one">
            <i className="bx bx-font" />
          </Link>
        </li>
        <li>
          <Link to="/all">
            <i className="bx bxs-keyboard" />
          </Link>
        </li>
        <li>
          <Link to="/games">
            <i className="bx bx-joystick" />
          </Link>
        </li>
        <li>
          <Link to="/cursos">
            <i className="bx bx-book-open" />
          </Link>
        </li>
      </ul>
    </NavigationCSS>
  );
}

export default Navigation;
