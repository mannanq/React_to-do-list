import React, { Component } from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types';

export class Todos extends Component {
    render() {
        return this.props.todos.map(todo => (
            <h3>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    markComplete={this.props.markComplete}
                    deleteThis={this.props.deleteThis}
                />
            </h3>
        ));
    }
}

// prop types
Todos.propTypes = {
    todos: propTypes.array.isRequired,
    markComplete: propTypes.func.isRequired,
    deleteThis: propTypes.func.isRequired
};

export default Todos;
