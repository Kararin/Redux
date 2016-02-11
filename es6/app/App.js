// import {render} from './counterApp.js';
import {createStore} from 'redux';
import {todoApp} from './TodoApp/counter.js';
import ReactDOM from 'react-dom';
import React from 'react';
import tests from './TodoApp/tests.js';
import VisibleTodoList from './TodoApp/VisibleTodoList.js';
import AddTodo from './TodoApp/AddTodo.js';
import Footer from './TodoApp/Footer.js';
import {Provider} from 'react-redux';

const TodoApp = () => (
    <div>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
)

const render = () => {
    ReactDOM.render(
        <Provider store = {createStore(todoApp)}>
            <TodoApp/>
        </Provider>,
        document.getElementById('content')
    );
};

document.addEventListener('DOMContentLoaded', () => {
    render();
});