import React, { useState } from "react";

const AddTask = () => {
  const [taskValue, setTaskValue] = useState("");

  const handleAddTask = (event) => {
    setTaskValue(event.target.value);
  };
  return (
    <section>
      AddTask
      <form>
        <label htmlFor="task">Task Name:</label>
        <input
          type="text"
          onChange={handleAddTask}
          id="task"
          name="task"
          placeholder="Task Name"
        />
        {/*   <input type="text" onChange={(e)=>   setTaskValue(event.target.value)} id="task" name='task' placeholder='Task Name'/> */}
        <button type="submit">Add Task</button>
      </form>
    </section>
  );
};

export default AddTask;
