import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';

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

    // method to mark a todo-item as complete or in-complete
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

    // delete a to-do item
    deleteThis = id => {
        this.setState({
            // filter out the todo item where the todo.id === id passed in and return the rest of them
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
    };
    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <AddTodo />
                    <Todos
                        todos={this.state.todos}
                        markComplete={this.markComplete}
                        deleteThis={this.deleteThis}
                    />
                </div>
            </div>
        );
    }
}

export default App;
