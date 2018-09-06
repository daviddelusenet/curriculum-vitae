import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSubtitle = styled.h4`
  margin: 0 0 8px;
  line-height: 1.5;
  font-size: 16px;
  font-style: italic;
  font-weight: 300;

  span {
    display: block;
    font-style: normal;
    font-weight: 700;
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
