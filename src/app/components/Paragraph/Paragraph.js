import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  margin: 0 0 40px;
  line-height: 1.5;
  font-size: 24px;
`;

const Paragraph = ({ children }) => (
  <StyledParagraph>
    {children}
  </StyledParagraph>
);

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Paragraph;
