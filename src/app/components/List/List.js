import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import media from 'styled-media-query';
import underline from '../../styles/mixins/underline';
import { BLACK } from '../../../utils/consts';

const StyledList = styled.ul`
  margin: 0 0 24px;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 300;
  
  ${media.greaterThan('medium')`
    margin: 0 0 40px;
    font-size: 24px;
  `};

  li {
    position: relative;
    padding: 0 0 0 16px;
    
    ${media.greaterThan('medium')`
      padding: 0 0 0 24px;
    `};
    
    &:after,
    &:before {
      display: block;
      position: absolute;
      top: 12px;
      left: 0;
      background-color: ${BLACK};
      width: 8px;
      height: 1px;
      content: '';

      ${media.greaterThan('medium')`
        top: 18px;
        width: 12px;
      `};
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
        {listItems.map((listItem) => (
            <li dangerouslySetInnerHTML={{ __html: listItem }} key={listItem} />
        ))}
    </StyledList>
);

List.propTypes = {
    listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;
