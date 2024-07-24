import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const addTask = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setTasks([...tasks, input.trim()]);
      setInput(""); 
    }
  }

  const deleteTask = (index) => {
    const newTasks = tasks.slice();
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <form onSubmit={addTask}>
        <h1>Add To-Do List</h1>
        <input type="text" value={input} onChange={handleInput} /> &nbsp;
        <button type="submit">Add</button>
      </form>
      <div>
        <ol>
          {tasks.map((item, index) => (
            <li key={index}>
              {item} <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
