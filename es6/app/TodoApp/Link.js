import React from 'react';

export default ({active, children, onClick}) => {
    if(active) {
        return (<span>{children}</span>)
    } else {
        return (
            <a href='#'
               onClick = {onClick}
               >
                {children}
            </a>
        )
    }
};