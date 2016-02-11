import Todo from './Todo.js';
import React from 'react';

export default ({
    todos,
    onTodoClick
}) => (
    <ul>
        {todos.map (todo =>
            <Todo
                key = {todo.id}
                {...todo}
                onClick = {() => onTodoClick(todo.id)}
            />
        )}
    </ul>
)
