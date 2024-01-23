import React, { useState } from "react";

const UseStateArray = () => {
  let [tasks, setTasks] = useState([
    { id: 1, task: "Exercise", isComplete: true },
    { id: 2, task: "Painting", isComplete: true },
    { id: 3, task: "Walking", isComplete: false },
  ]);

  const addTask = () => {
    const newTask = { id: 4, task: "Running", isComplete: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleDelete = (id) => {
    console.log(id);
    setTasks(tasks.filter((task)=> id  !== task.id));
  };

  return (
    <div>
      <h1>Displaying Tasks:-</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span className="pr">
              {task.id}-{task.task}
            </span>
            <button className="delete" onClick={addTask}>
              Add
            </button>
            <button
              className="delete"
              onClick={() => {
                handleDelete(task.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseStateArray;
