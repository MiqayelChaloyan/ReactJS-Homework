import React, { Component } from 'react';
import './addTodo.css';

class AddTodo extends Component {
    state = {
        defaultValue: "",
        value: this.props.addTodoValue
    }

    handleChange = (e) => {
        //Updating
        this.setState({
            value: e.target.value
        });
    }

    clearInput = () => {
        //Clear
        document.getElementById("todoValue").value = "";

        //Updating state
        this.setState({value:""});
    }

    addTodo = () => {
        this.props.fooAddTodo(this.state.value);
        this.clearInput();
    }

    render() {
        return (
            <div className="input-form">
                <input type="text" className="add-input"  placeholder="todo" onChange={this.handleChange} />
                <div className="input-append">
                    <button onClick={this.addTodo} className="btn-add" type="button">Add</button>
                </div>
            </div>
        );
    }
}

export default AddTodo;