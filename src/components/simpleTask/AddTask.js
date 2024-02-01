import { toHaveAttribute } from "@testing-library/jest-dom/matchers";
import React, { useState } from "react";

const AddTask = ({tasks, setTasks}) => {
  const [taskValue, setTaskValue] = useState("");
  const [progress, setProgress] = useState(false);
  const handleAddTask = (event) => {
    setTaskValue(event.target.value);
  };

  const handleReset = () => {
   
    setTaskValue("");
    setProgress(false);
  };


  const handleSubmit=(event) => {
    event.preventDefault();
    const task = {
      id:Math.floor(Math.random() * 10000),
      task:taskValue,
      isComplete: Boolean(progress)
    }
    console.log(task)
    setTasks([...tasks, task])
    handleReset();
  };

  return (
    <section>
      AddTask
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task Name:</label>
        <input
          type="text"
          onChange={handleAddTask}
          id="task"
          name="task"
          placeholder="Task Name"
          value={taskValue}
        />
        <select onChange={(event) => setProgress(event.target.value)} value={progress}> 
          <option value={false}>Pending</option>
          
          <option value={true}>Completed</option>
        </select>
        {/*   <input type="text" onChange={(e)=>   setTaskValue(event.target.value)} id="task" name='task' placeholder='Task Name'/> */}
        <button type="submit">Add Task</button>
        <button onClick={handleReset}>Reset</button>
      </form>
      <p>{taskValue}</p>
    </section>
  );
};

export default AddTask;
