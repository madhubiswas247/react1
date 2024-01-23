import React, { useState } from "react";
import Header from "./Header";
import TaskCard from "./TaskCard";
import BoxCard from "./BoxCard";

const TaskList = () => {
  const headerLink = "Home";
  let [tasks, setTasks] = useState([
    { id: 1, task: "Exercise", isComplete: true },
    { id: 2, task: "Painting", isComplete: true },
    { id: 3, task: "Walking", isComplete: false },
  ]);
  let [show, setShow] = useState(false);

  const addTask = () => {
    const newTask = { id: 4, task: "Running", isComplete: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleDelete = (id) => {
    console.log(id);
    setTasks(tasks.filter((task) => id !== task.id));
  };

  return (
    <div>
      <Header headerMenu={headerLink} />
      <h1>Displaying Tasks:-</h1>
      <button onClick={() => setShow(!show)}>Show Tasks</button>
      <ul>
        {show &&
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              handleDelete={handleDelete}
              addTask={addTask}
            />
          ))}
      </ul>
      <BoxCard result="success" buttonName="Show Success">
        <p className="title">Hello Success</p>
        <p className="description">This is the description of success</p>
      </BoxCard>

      <BoxCard result="warning" buttonName="Show Warning">
        <p className="title">Hello Warning</p>
        <p className="description">This is the description of warning</p>
      </BoxCard>
    </div>
  );
};

export default TaskList;