import './App.css';

import React, { Component } from 'react'
import Todo from './components/header/Todo';
import AddTodo from './components/addTodo/AddTodo';
class App extends Component {

  state = {
    addTodoValue: "",
    todos: [
      {
        id: Math.random(),
        value: "JavaScript",
        isCompleted: false
      },
      {
        id: Math.random(),
        value: "React JS",
        isCompleted: false
      },
      {
        id: Math.random(),
        value: "Node JS",
        isCompleted: false
      }
    ]
  }


 
  // Delete
  handleDelete = todo => {
    const todos = this.state.todos.filter((t) => {
      return t.id !== todo
    });
    this.setState({ todos });
  }

  handleDone = todo => {
    const todos = [...this.state.todos];
    todos.map((t) => {
      if (t.id === todo.id) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    this.setState({ todos });
  }

  // add new todo
  addNewTodo = value => {
    if (value) {
      const todos = [...this.state.todos];
      todos.push(
        {
          id: Math.random(),
          value: value,
          isCompleted: false
        }
      );
      this.setState({ addTodoValue: "", todos })
    } else {
      console.log("Please Add Todo Text");
    }
  }

  render() {
    return (
      <div className='header'>
        <table className="table">
          <tbody>
            <tr>
              <td>
                <AddTodo fooAddTodo={this.addNewTodo} addTodoValue={this.state.addTodoValue} />
              </td>
            </tr>
            {this.state.todos.map((todo, index) => (
              <tr key={todo.id} className="todo-list">
                <Todo index={index + 1} todo={todo} fooDelete={this.handleDelete} fooDoneDone={this.handleDone} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
