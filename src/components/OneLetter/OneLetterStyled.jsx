
import styled from 'styled-components';
import Variable from '../../styles/VariableStyled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center ;
  justify-content: center;
`;

export const BoxLetter = styled.div`
  display: flex;
  justify-items: cente;
  align-items: center ;
  cursor: pointer;
  background-color: ${Variable.grey1};
  height: 50px;
  width: 50px;
`;
