import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';

const StyledSubtitle = styled.h4`
  margin: 0 0 8px;
  line-height: 1.5;
  font-size: 12px;
  font-weight: 300;
  font-style: italic;
  
  ${media.greaterThan('medium')`
    font-size: 16px;
  `};

  span {
    display: block;
    font-weight: 700;
    font-style: normal;
  }
`;

const Subtitle = ({ children, date }) => (
    <StyledSubtitle>
        <span>
            {date}
        </span>
        {children}
    </StyledSubtitle>
);

Subtitle.propTypes = {
    children: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
};

export default Subtitle;
