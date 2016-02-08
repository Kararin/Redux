// import {render} from './counterApp.js';
import expect from 'expect';
import deepFreeze from 'deep-freeze';
import {createStore, combineReducers} from 'redux';

const todo = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }

            return Object.assign({}, state, {completed: !state.completed});
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO': {
            return [
                ...state,
                todo(undefined, action)
            ];
        }
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch(action.type) {
        case 'GET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

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

testAddToDo();
testToggleToDo();
console.log('All tests passed');

const store = createStore(todoApp);

console.log('Initial state');
console.log(store.getState());
console.log('--------------');