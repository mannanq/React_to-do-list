import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';
import './App.css';

export class App extends Component {
    state = {
        todos: []
    };

    componentDidMount() {
        axios
            .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => {
                this.setState({ todos: res.data });
            });
    }

    // method to mark a todo-item as complete or in-complete
    markComplete = id => {
        console.log(id);
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    // delete a to-do item
    deleteThis = id => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res =>
                this.setState({
                    // filter out the todo item where the todo.id === id passed in and return the rest of them
                    todos: [...this.state.todos.filter(todo => todo.id !== id)]
                })
            );
    };

    // Add a Todo

    addTodo = title => {
        axios
            .post('https://jsonplaceholder.typicode.com/todos', {
                title,
                completed: false
            })
            .then(res =>
                this.setState({ todos: [...this.state.todos, res.data] })
            );
    };
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route
                            exact
                            path="/"
                            render={props => (
                                <React.Fragment>
                                    <AddTodo addTodo={this.addTodo} />
                                    <Todos
                                        todos={this.state.todos}
                                        markComplete={this.markComplete}
                                        deleteThis={this.deleteThis}
                                    />
                                </React.Fragment>
                            )}
                        />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
