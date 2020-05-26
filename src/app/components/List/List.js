import PropTypes from 'prop-types';
import React from 'react';
import { StyledList } from './List.sc';

const List = ({ children }) => <StyledList>{children}</StyledList>;

List.propTypes = {
    children: PropTypes.node.isRequired,
};

export default List;
