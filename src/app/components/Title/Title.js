import media from 'styled-media-query';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import underline from '../../styles/mixins/underline';

const StyledTitle = styled.h3`
    ${({ theme }) => underline({
        backgroundColor: theme.primaryBackgroundColor,
        color: theme.primaryTextColor,
        underlinePosition: '92%',
    })}
    margin: 0 0 16px;
    font-family: ${({ theme }) => theme.secondaryFontFamily};
    font-size: 28px;
    font-weight: 700;

    ${media.greaterThan('medium')`
        font-size: 40px;
    `}
`;

const Title = ({ children }) => (
    <StyledTitle>
        {children}
    </StyledTitle>
);

Title.propTypes = {
    children: PropTypes.string.isRequired,
};

export default Title;
