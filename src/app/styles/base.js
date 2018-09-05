import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

// Consts
import { ALABASTER, BLACK, OPEN_SANS } from '../../utils/consts';

export default () => injectGlobal`
  ${reset}

  * {
    box-sizing: border-box;
  }
  
  html {
    background-color: ${ALABASTER};
    color: ${BLACK};
  }
  
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: ${OPEN_SANS};
  }
  
  a {
    text-decoration: none;
    color: ${BLACK};

    &:hover {
      text-decoration: underline;
    }
  }
`;
