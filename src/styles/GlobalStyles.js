import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    top:300px;
  }

  body {
    font-family: sans-serif;
    background: #E9967A;
    color: black;
  }
  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    font-weight: 777;
  }

`;
