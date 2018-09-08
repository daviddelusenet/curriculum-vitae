import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import underline from '../../styles/mixins/underline';

const StyledParagraph = styled.p`
  margin: 0 0 24px;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 300;
  
  ${media.greaterThan('medium')`
    margin: 0 0 40px;
    font-size: 24px;
  `};
  
  a {
    &:hover {
      ${underline()};
    }
  }
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
