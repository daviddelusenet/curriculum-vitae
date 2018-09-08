// This mixin is based on https://eager.io/blog/smarter-link-underlines/
import { css } from 'styled-components';
import { ALABASTER, BLACK } from '../../../utils/consts';

export const textShadowToCropUnderline = ({ backgroundColor = ALABASTER } = {}) => (css`
  text-shadow: 0 .03em ${backgroundColor},
    0 -.03em ${backgroundColor},
    .03em 0 ${backgroundColor},
    -.03em 0 ${backgroundColor},
    .06em 0 ${backgroundColor},
    -.06em 0 ${backgroundColor},
    .09em 0 ${backgroundColor},
    -.09em 0 ${backgroundColor},
    .12em 0 ${backgroundColor},
    -.12em 0 ${backgroundColor},
    .15em 0 ${backgroundColor},
    -.15em 0 ${backgroundColor},
    .18em 0 ${backgroundColor},
    -.18em 0 ${backgroundColor};
`);

export const animateUnderline = () => (css`
  background-size: .05em 1px, .05em 1px, 100% 1px;
`);

export default ({
  animate = false,
  backgroundColor = ALABASTER,
  color = BLACK,
  underlinePosition = '88%',
} = {}) => (css`
  ${textShadowToCropUnderline({ backgroundColor })};
  background-image: linear-gradient(${backgroundColor}, ${backgroundColor}),
    linear-gradient(${backgroundColor}, ${backgroundColor}),
    linear-gradient(${color}, ${color});
  background-position: 0 90%, 100% 90%, 0 ${underlinePosition};
  background-repeat: no-repeat, no-repeat, no-repeat;
  
  ${animate ? (css`
    transition: background .7s cubic-bezier(.250, .460, .450, .940);
    background-size: .05em 1px, .05em 1px, 0 1px;
  `) : (css`
    background-size: .05em 1px, .05em 1px, 100% 1px;
  `)};
`);
