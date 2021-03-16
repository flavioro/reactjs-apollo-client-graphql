import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(237,224,255,1) 3%, rgba(192,192,192,1) 45%, rgba(204,132,0,1) 100%);
  }

  body, input, button {
    font: 14px 'Alegreya', 'Helvetica', 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`
