import React, { Component } from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types';

export class Todos extends Component {
    render() {
        // We passed all todos as props to this component.
        //  loop through each of the todos
        return this.props.todos.map(todo => (
            // pass each todo into the TodoItem component as a prop ("todo" prop)
            <h3>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    // markComplete prop is passed down futher as a prop to each todoitem
                    markComplete={this.props.markComplete}
                    // deleteThis prop is passed down futher as a prop to each todoitem
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
