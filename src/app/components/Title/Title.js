import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SOURCE_SERIF_PRO } from '../../../utils/consts';
import underline from '../../styles/mixins/underline';

const StyledTitle = styled.h3`
  ${underline({ underlinePosition: '92%' })};
  margin: 0 0 24px;
  font-family: ${SOURCE_SERIF_PRO};
  font-size: 40px;
  font-weight: bold;
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
