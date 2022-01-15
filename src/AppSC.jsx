import styled, { createGlobalStyle } from "styled-components/macro";


export const AppParentContainer = styled.div`
  height: 100vh;
  min-width: 1150px;
  min-height: 800px;
  background: #000000;
  overflow: hidden;

`;


export const GlobalStyled =  createGlobalStyle`
* {
    font-family: "Roboto Mono", monospace;
    margin: 0;
    padding: 0;
  }
  
`;