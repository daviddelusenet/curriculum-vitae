import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SOURCE_SERIF_PRO } from '../../../utils/consts';
import underline from '../../styles/mixins/underline';

const StyledTitle = styled.h3`
  margin: 0 0 16px;
  font-family: ${SOURCE_SERIF_PRO};
  font-size: 40px;
  font-weight: bold;
  ${underline({ underlinePosition: '92%' })};
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
