import React, { Component } from 'react';
import './todo.css';
class Todo extends Component {

    render() {
        return (
            <React.Fragment >
                <td  className="text-center">
                    {this.props.index}
                </td>
                <td  className="checkbox">
                    <input className='checkbox-input' type="checkbox" defaultChecked={this.props.todo.isCompleted}  onChange={() => this.props.fooDoneDone(this.props.todo)} />
                </td>
                <td>
                    {
                        this.renderTodo()
                    }
                </td>
                <td  className="button-del">
                    <button onClick={() => this.props.fooDelete(this.props.todo.id)} className="btn-delete">Delete</button>
                </td>
            </React.Fragment>
        );
    }

    renderTodo(){
        if(this.props.todo.isDone)
        return <s>{this.props.todo.value}</s>;
        else
        return this.props.todo.value;
    }

}

export default Todo;