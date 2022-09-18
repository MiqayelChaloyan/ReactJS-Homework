import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/todoItems';
import { selectTodoName, setTodoName } from '../../redux/todoName';
import { setTodoColor, selectTodoColor } from '../../redux/todoColor';
import './header.css'

export default function Header() {

	const dispatch = useDispatch();
	const text = useSelector(selectTodoName);
	const color = useSelector(selectTodoColor);


	return (
		<div>
			<input className='select-color' placeholder='Select color..' type='text' onChange={(event) => dispatch(setTodoColor(event.target.value))} value={color} />
			<div className='add-form'>
				<input className='add-todo' placeholder='...' onChange={(e) => dispatch(setTodoName(e.target.value))} value={text} />
				<button className='add-btn' onClick={
					() => {
						dispatch(addTodo(text));
						dispatch(setTodoName(""));
					}
				}>Add</button>
			</div>
		</div>
	)
}


