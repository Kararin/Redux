import {createStore} from 'redux';
import Counter from './Counter.js';
import ReactDOM from 'react-dom';
import React from 'react';

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const render = (elementId) => {
    ReactDOM.render(
        <Counter
            value = {counterStore.getState()}
            onIncrement = {() => {
                counterStore.dispatch({
                    type: 'INCREMENT'
                });
            }}
            onDecrement = {() => {
                counterStore.dispatch({
                    type: 'DECREMENT'
                });
            }}
        />,
        document.getElementById(elementId));
};

const counterStore = createStore(counter);
counterStore.subscribe(render);

export {render};