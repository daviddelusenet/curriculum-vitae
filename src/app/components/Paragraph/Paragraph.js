import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import underline from '../../styles/mixins/underline';

const StyledParagraph = styled.p`
  margin: 0 0 40px;
  line-height: 1.5;
  font-size: 24px;
  font-weight: 300;
  
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
