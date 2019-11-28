import { ECSTASY } from '../../../utils/consts';
import media from 'styled-media-query';
import styled from 'styled-components';
import underline from '../../styles/mixins/underline';

/* eslint-disable indent */
export const StyledSubtitle = styled.h4`
    margin: 0 0 8px;
    line-height: 1.5;
    font-size: 12px;
    font-weight: 300;
    font-style: italic;

    span {
        display: block;
        font-weight: 700;
        font-style: normal;
    }

    a {
        color: ${ECSTASY};

        &:hover {
            ${underline({
                color: ECSTASY,
                underlinePosition: '92%',
            })}
        }
    }

    ${media.greaterThan('medium')`
        font-size: 16px;
    `}
`;
/* eslint-enable */

export default StyledSubtitle;
