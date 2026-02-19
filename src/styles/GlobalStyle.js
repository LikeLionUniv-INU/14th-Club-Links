import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent; 
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: #f2f4f6; 
    font-family: 'Pretendard', sans-serif;
    line-height: 1.4;
    word-break: keep-all; 
  }
`;
