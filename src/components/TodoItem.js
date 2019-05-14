import React, { Component } from 'react';
import propTypes from 'prop-types';
export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            // this style checks if a todo is completed or not, then applies respective styling
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        };
    };

    render() {
        // A todo is passed as a prop into this component. Use ES6 destructuring to extract id and title of the todo

        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input
                    type="checkbox"
                    // add onChange event to get complete/incomplete functionality. "this" points to this particular todo item!

                    onChange={this.props.markComplete.bind(this, id)}
                />
                {/* the title of a todo gets put into a p tag */}
                <p>
                    {title}
                    {/* add a delete button. "this" points to this particular todo item! */}
                    <button
                        onClick={this.props.deleteThis.bind(this, id)}
                        style={btnStyle}
                    >
                        X
                    </button>
                </p>
            </div>
        );
    }
}

// prop types
TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    markComplete: propTypes.func.isRequired,
    deleteThis: propTypes.func.isRequired
};

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};
export default TodoItem;
