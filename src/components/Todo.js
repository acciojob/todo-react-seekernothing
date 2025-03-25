import React from "react";

const Todo = ({ todolist, deleteTodo }) => {
  return (
    <ul>
      {todolist.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
