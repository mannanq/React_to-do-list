import React, { Component } from 'react';
import Todos from './components/Todos';

export class App extends Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Take out trash',
                isComplete: false
            },
            {
                id: 2,
                title: 'Clean dishes',
                isComplete: false
            },
            {
                id: 3,
                title: 'Maybe beg and try to get a bj form the wife',
                isComplete: false
            }
        ]
    };

    markComplete = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.isComplete = !todo.isComplete;
                }
                return todo;
            })
        });
    };
    render() {
        return (
            <div>
                <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                />
            </div>
        );
    }
}

export default App;
