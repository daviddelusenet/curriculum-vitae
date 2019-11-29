import PropTypes from 'prop-types';
import React from 'react';
import { StyledSubtitle } from './Subtitle.sc';

const Subtitle = ({ children, date }) => (
    <StyledSubtitle>
        <span>
            {date}
        </span>
        {children}
    </StyledSubtitle>
);

Subtitle.propTypes = {
    children: PropTypes.node.isRequired,
    date: PropTypes.string.isRequired,
};

export default Subtitle;
