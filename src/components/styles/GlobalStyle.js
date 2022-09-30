import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    font-family: sans-serif;
  }

  html{
    height: 100vh;
    background-image: url('../../assets/ricknmortyb.jpg');
    background-size: cover;
  }
`
