import React from "react";
import Task from "./Task";

function TaskList({tasks, onRemoveTask}) {

  const taskComp = tasks.map(task => {
    return <Task key={task.text} category={task.category} text={task.text} onRemoveTask={onRemoveTask}/>
  })
  return (
    <div className="tasks">
      {taskComp}
    </div>
  );
}

export default TaskList;
