// TaskPopup.js
import React from "react";

function TaskPopup({ tasks }) {
  return (
    <div className="task-popup">
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>{task.socialMedia}: </strong>
            {task.task} - {task.date} - {task.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskPopup;
