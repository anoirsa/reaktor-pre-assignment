import styled from "styled-components/macro";

export const ButtonContainer = styled.button`
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  transition: all 300ms ease-out;
  font-size: 0.8rem;
  padding: 10px 40px;
  color: ${({whiteBackground}) => whiteBackground ? 'white' : 'black'};
  background: ${({whiteBackground}) => whiteBackground ? 'black' : 'white'}; 
  &:hover {
    opacity: 0.8;
    transform: scale(1.2);
  }  
`;

