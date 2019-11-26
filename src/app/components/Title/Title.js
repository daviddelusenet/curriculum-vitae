import media from 'styled-media-query';
import PropTypes from 'prop-types';
import React from 'react';
import { SOURCE_SERIF_PRO } from '../../../utils/consts';
import styled from 'styled-components';
import underline from '../../styles/mixins/underline';

const StyledTitle = styled.h3`
    ${underline({ underlinePosition: '92%' })}
    margin: 0 0 16px;
    font-family: ${SOURCE_SERIF_PRO};
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
