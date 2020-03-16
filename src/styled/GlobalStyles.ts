import 'styled-components';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,600,600i|Source+Serif+Pro:400,600&display=swap');

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    overflow-y: scroll;
  }

  body {
    margin: 0;
    padding: 0;

    font-family: "Source Sans Pro", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.3;

    color: ${props => props.theme.colors.primaryTextColor};
    background-color: ${props => props.theme.colors.bgColor};
  }

  span, a, label {
    font-size: 1.6rem;
  }
  
  p {
    margin: 0;
    font-size: 1.6rem;
  }
  
  h1 {
    margin: 0;
    font-size: 3.2rem;
    font-weight: 600;
  }
  
  small {
    font-size: 1.2rem;
  }
  
  h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: 600;
  }
`;

export default GlobalStyles;