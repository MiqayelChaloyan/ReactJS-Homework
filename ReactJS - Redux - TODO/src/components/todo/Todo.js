import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, toggleTodo } from '../../redux/todoItems'
import { selectTodoColor } from '../../redux/todoColor'

import './todo.css'



function Todo({ item }) {

	const dispatch = useDispatch()
	const color = useSelector(selectTodoColor)

	return (
		<>
			<div className='todo-table'>
				<input type="checkbox"
					checked={item.isCompleted}
					onChange={() => dispatch(toggleTodo(item.id))}
				/>
				<div style={{ color: `${color}` }}>{item.title}</div>
				<button className='delete-btn' style={color !== '' ? { color: `${color}` } : { color: `white` }}
					onClick={
						() => dispatch(deleteTodo(item.id))
					}>X</button>
			</div>
		</>
	)
}

export default Todo;
