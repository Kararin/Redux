import React from 'react';
import Link from './Link.js';
import {connect} from 'react-redux';
import {setVisibilityFilter} from './actions.js';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    };
};

const FilterLink = connect(mapStateToProps,
        mapDispatchToProps
)(Link);

export default FilterLink;