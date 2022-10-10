import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    font-family: sans-serif;
  }

  body{
    height: 100vh;
    background-image: url('../../assets/ricknmortyback.jpg');
    background-size: cover;
  }
`
