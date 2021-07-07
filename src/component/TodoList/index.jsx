import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
}

function TodoList(props) {
    const { onTodoClick, todos } = props;
    const handleOnClick = (item) => {
        if (onTodoClick) {
            onTodoClick(item);
        }
    }
    return (
        <ul className="todo-list">
            {todos.map(item => (
                <li key={item.id} onClick={() => handleOnClick(item)}>{item.title}</li>
            ))}

        </ul>
    );
}

export default TodoList;