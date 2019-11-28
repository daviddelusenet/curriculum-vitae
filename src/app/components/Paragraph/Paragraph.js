import { ECSTASY } from '../../../utils/consts';
import media from 'styled-media-query';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import underline from '../../styles/mixins/underline';

const StyledParagraph = styled.p`
    margin: 0 0 24px;
    line-height: 1.5;
    font-size: 16px;
    font-weight: 300;

    a {
        color: ${ECSTASY};

        &:hover {
            ${underline({ color: ECSTASY })}
        }
    }

    ${media.greaterThan('medium')`
        margin: 0 0 40px;
        font-size: 24px;
    `}
`;

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
