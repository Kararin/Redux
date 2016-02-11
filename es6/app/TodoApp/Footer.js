import React from 'react';
import FilterLink from './FilterLink.js';

const Footer = () => (
    <p>
        Show:
        {' '}
            <FilterLink filter = 'SHOW_ALL'>
                All
            </FilterLink>
        {' '}
            <FilterLink filter = 'SHOW_ACTIVE'>
                Active
            </FilterLink>
        {' '}
            <FilterLink filter = 'SHOW_COMPLETED' >
                Comleted
            </FilterLink>
    </p>
);

export default Footer;