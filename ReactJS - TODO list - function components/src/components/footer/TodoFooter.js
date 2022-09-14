import "./todoFooter.css";

function TodoFooter({ todos, onClearCompleted }) {
    const completedCount = todos.filter((todo) => todo.isCompleted).length
    return (
        <div className="footer">
            <span> {completedCount}/{todos.length} Completed </span>
            <button onClick={onClearCompleted} className="clear"> Clear Completed </button>
        </div>
    )
}

export default TodoFooter;