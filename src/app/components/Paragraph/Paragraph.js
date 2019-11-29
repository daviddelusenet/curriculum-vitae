import media from 'styled-media-query';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import underline from '../../styles/mixins/underline';

/* eslint-disable indent */
const StyledParagraph = styled.p`
    margin: 0 0 24px;
    line-height: 1.5;
    font-size: 16px;
    font-weight: 300;

    a {
        color: ${({ theme }) => theme.primaryLinkColor};

        &:hover {
            ${({ theme }) => underline({
                backgroundColor: theme.primaryBackgroundColor,
                color: theme.primaryLinkColor,
            })}
        }
    }

    ${media.greaterThan('medium')`
        margin: 0 0 40px;
        font-size: 24px;
    `}
`;
/* eslint-enable */

const Paragraph = ({ children }) => (
    <StyledParagraph>
        {children}
    </StyledParagraph>
);

Paragraph.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.string,
    ]).isRequired,
};

export default Paragraph;
