import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  const handleDelete = (taskId) => {
    //  remove the task with the given taskId
  };

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default TaskList;
