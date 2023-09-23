import * as React from "react";

const Task = (props) => {
  const { text, date } = props.task;
  return (
    <div>
      <p>
        <strong>{text}</strong> - do <span>{date} </span>
        <button>done</button>
        <button>X</button>
      </p>
    </div>
  );
};

export default Task;
