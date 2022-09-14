import { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/app-header/TodoForm';
import TodoFooter from './components/footer/TodoFooter';
import TodoList from './components/list/TodoList';

function App() {

  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "JavaScript",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "C++",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "React JS",
      isCompleted: false
    }
  ]);


  return (
    <div className="App">
      <TodoForm onAdd={(text) => {
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isCompleted: false
          }
        ])
      }} />
      <TodoList
        todos={todos}
        onDelete={(todo) => {
          setTodos(todos.filter((e) => e.id !== todo.id))
        }}
        onChange={(newTodo) => {
          setTodos(todos.map((todo) => {
            if (todo.id === newTodo.id) {
              return newTodo
            }
            return todo
          }))
        }}
      />
      <TodoFooter
        todos={todos}
        onClearCompleted={() => {
          setTodos(todos.filter((todo) => !todo.isCompleted))
        }} />
    </div>
  );
}

export default App;
