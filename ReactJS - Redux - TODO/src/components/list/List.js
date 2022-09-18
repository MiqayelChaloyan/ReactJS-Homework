import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectTodoItems } from '../../redux/todoItems';
import Todo from '../todo/Todo';
import './list.css'

export default function List() {
	const todoList = useSelector(selectTodoItems);
	const [filter, setFilter] = useState(todoList)

	useEffect(() => {
		setFilter(todoList);
	}, [todoList]);

	function filterTodo(isCompleted) {
		if (isCompleted === 'all') {
			setFilter(todoList);
		} else {
			let newTodo = todoList.filter(elem => elem.isCompleted === isCompleted);
			setFilter(newTodo);
		}
	}

	return (
		<> {
			filter.length > 0 ?
				<div>
					<button className='btn-filter' onClick={() => filterTodo('all')}>All</button>
					<button className='btn-filter' onClick={() => filterTodo(false)}>Active</button>
					<button className='btn-filter' onClick={() => filterTodo(true)}>Completed</button>
				</div> : null
		}

			<div className='todo-item'>
				{filter.map(item => <Todo key={item.id} item={item} />)}
			</div>
		</>
	)
}
