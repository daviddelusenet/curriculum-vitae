import PropTypes from 'prop-types';
import React from 'react';
import { StyledListItem } from './ListItem.sc';

const ListItem = ({ children }) => (
    <StyledListItem>
        {children}
    </StyledListItem>
);

ListItem.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ListItem;
