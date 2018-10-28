import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// Consts
import { ALABASTER, BLACK, OPEN_SANS } from '../../utils/consts';

export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  
  html {
    background-color: ${ALABASTER};
    color: ${BLACK};
  }
  
  body {
    font-family: ${OPEN_SANS};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  a {
    text-decoration: none;
    color: ${BLACK};
  }
`;
