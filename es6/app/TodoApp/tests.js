import expect from 'expect';
import deepFreeze from 'deep-freeze';
import {todos} from './counter.js';

const testAddToDo = () => {
    const stateBefore = [],
        action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'},
        stateAfter = [{
            id: 0,
            text: 'Learn Redux',
            completed: false
        }];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);
};

const testToggleToDo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }, {
            id: 1,
            text: 'Go shopping',
            completed: false
        }
    ],
    action = {
        type: 'TOGGLE_TODO',
        id: 1
    },
    stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }, {
            id: 1,
            text: 'Go shopping',
            completed: true
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter);
};

export default () => {
    testAddToDo();
    testToggleToDo();
    console.log('All tests passed');
};