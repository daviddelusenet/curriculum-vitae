import styled, { DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import underline from '../../styles/mixins/underline';

export const StyledParagraph = styled.p`
    margin: 0 0 24px;
    line-height: 1.5;
    font-size: 18px;
    font-weight: 300;

    a {
        color: ${({ theme }) => theme.primaryLinkColor};

        &:hover {
            ${({ theme }) =>
                underline({
                    backgroundColor: theme.primaryBackgroundColor,
                    color: theme.primaryLinkColor,
                    underlinePosition: '90%',
                })}

            ${media.greaterThan('medium')`
                ${({ theme }: { theme: DefaultTheme }) =>
                    underline({
                        backgroundColor: theme.primaryBackgroundColor,
                        color: theme.primaryLinkColor,
                    })}
            `}
        }
    }

    ${media.greaterThan('medium')`
        margin: 0 0 40px;
        font-size: 24px;
    `}
`;

export default StyledParagraph;
