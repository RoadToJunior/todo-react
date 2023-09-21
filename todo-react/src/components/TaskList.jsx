import * as React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const tasks = props.tasks.map((task) => <Task key={task.id} task={task} />);
  return (
    <>
      <div>
        <h1>Task List</h1>
        {tasks.id}
      </div>
      <div>
        <h2>Completed tasks (0)</h2>
      </div>
    </>
  );
};

export default TaskList;
