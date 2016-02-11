import React from 'react';

export default ({
    value,
    onIncrement,
    onDecrement
}) => {
    return
        <div>
            <h1>{value}</h1>
            <button onClick = {onIncrement}>+</button>
            <button onClick = {onDecrement}>-</button>
        </div>
};