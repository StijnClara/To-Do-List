import React, { useState } from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { text: input, completed: false }]);
            setInput('');
        }
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <h1>To-Do List</h1>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Add a new task"
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                        <span onClick={() => toggleTodo(index)}>{todo.text}</span>
                        <button onClick={() => removeTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;