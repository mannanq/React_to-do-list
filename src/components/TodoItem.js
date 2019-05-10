import React, { Component } from 'react';
import propTypes from 'prop-types';
export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.isComplete ? 'line-through' : 'none'
        };
    };

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <input
                    type="checkbox"
                    onChange={this.props.markComplete.bind(this, id)}
                />
                <p>
                    {title}
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

// validation
TodoItem.propTypes = {
    todo: propTypes.object.isRequired
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
