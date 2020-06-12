import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';

export default createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    html {
        background-color: ${({ theme }) => theme.primaryBackgroundColor};
        color: ${({ theme }) => theme.primaryTextColor};
    }

    body {
        font-family: ${({ theme }) => theme.primaryFontFamily};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.primaryTextColor};
    }
`;
