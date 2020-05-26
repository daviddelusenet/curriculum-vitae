import media from 'styled-media-query';
import styled from 'styled-components';
import underline from '../../styles/mixins/underline';

/* eslint-disable indent */
export const StyledSubtitle = styled.h4`
    margin: 0 0 4px;
    line-height: 1.5;
    font-size: 14px;
    font-weight: 300;
    font-style: italic;

    span {
        display: block;
        font-weight: 700;
        font-style: normal;
    }

    a {
        color: ${({ theme }) => theme.primaryLinkColor};

        &:hover {
            ${({ theme }) =>
                underline({
                    backgroundColor: theme.primaryBackgroundColor,
                    color: theme.primaryLinkColor,
                    underlinePosition: '92%',
                })}
        }
    }

    ${media.greaterThan('medium')`
        margin: 0 0 8px;
        font-size: 18px;
    `}
`;
/* eslint-enable */

export default StyledSubtitle;
