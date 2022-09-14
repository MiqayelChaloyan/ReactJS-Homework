import "./todoItem.css";

function TodoItem({ todo, onChange, onDelete }) {
    return (
        <div className="item">
            <label className="form">
                <input className="chek" type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    })
                }} />
                <div className="text">{todo.text}</div>
                <button onClick={() => {
                    onDelete(todo)
                }} className="delete">X</button>
            </label>
        </div>
    )
}


export default TodoItem;