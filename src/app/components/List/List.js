import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import underline from '../../styles/mixins/underline';
import { BLACK } from '../../../utils/consts';

const StyledList = styled.ul`
  margin: 0 0 40px;
  line-height: 1.5;
  font-size: 24px;
  font-weight: 300;
  
  li {
    position: relative;
    padding: 0 0 0 24px;
    
    &:after,
    &:before {
      display: block;
      position: absolute;
      top: 18px;
      left: 0;
      width: 12px;
      height: 1px;
      content: '';
      background-color: ${BLACK};
    }
    
    &:after {
      transform: rotate(45deg);
    }
    
    &:before {
      transform: rotate(-45deg);
    }
  }
  
  a {
    &:hover {
      ${underline({ underlinePosition: '90%' })};
    }
  }
`;

const List = ({ listItems }) => (
  <StyledList>
    {listItems.map(listItem => (
      <li dangerouslySetInnerHTML={{ __html: listItem }} key={listItem} />
    ))}
  </StyledList>
);

List.propTypes = {
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
