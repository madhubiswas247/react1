import React from "react";

const TaskCard = ({ task, handleDelete, addTask }) => {
  //let task = props.task;
  return (
    <li className={task.isComplete ? "complete" : "incomplete"}>
      <span className="pr">
        {task.id}-{task.task}
      </span>
      {/* <button className="add" onClick={addTask}>
        Add
      </button> */}
      <button
        className="delete"
        onClick={() => {
          handleDelete(task.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskCard;
