import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: tomato;
  font-weight: bold;
  font-size: 24px;
  color: white;
  &:hover {
    background-color: red;
    cursor: pointer;
  }
`;
