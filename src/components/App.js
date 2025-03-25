// App.js
import React, { useState } from "react";
import "./../styles/App.css";
import Todo from "./Todo.js";

const App = () => {
  let [todolist, setTodolist] = useState([]);
  let [input, setInput] = useState("");

  const add = () => {
    if (input.trim() !== "") {
      setTodolist([...todolist, input]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTask = todolist.filter((_, i) => i !== index);
    setTodolist(updatedTask);
  };

  return (
    <div>
      {/* Do not remove the main div */}

      <input
        type="text"
        placeholder="Enter your task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={add}>Add</button>

      <Todo todolist={todolist} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
