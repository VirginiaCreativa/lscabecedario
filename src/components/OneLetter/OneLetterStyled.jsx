
import styled from 'styled-components';
import Variable from '../../styles/VariableStyled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center ;
  justify-content: center;
  .box {
    &:first-child {
      margin-bottom: 40px;
    }
  }
`;

export const BoxLetter = styled.div`
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center ;
  cursor: pointer;
  border-radius:  6px;
	text-decoration: none;
	text-align: center;
	width: 64px;
	height: 61px;
	background: #222;
	-moz-border-radius: 4px;
	border-radius: 4px;
	border-top: 1px solid #222;
	box-shadow:
		inset 0 0 25px #333,
		0 1px 0 #000,
		0 2px 0 #222,
		0 2px 3px #333;
	text-shadow: 0px -1px 0px #000;
  p {
    color: #aaa;
    font-size: 2rem;
    margin-bottom: 0;
  }
`;
