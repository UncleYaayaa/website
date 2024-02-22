import React, { useState } from "react";

function TaskPopUp({ socialMedia, onSave }) {
  // State to manage task details
  const [taskInput, setTaskInput] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");

  // Function to handle task submission
  const handleSubmit = () => {
    // Check if all fields are filled
    if (taskInput && taskDate && taskTime) {
      // Package task details into an object
      const taskDetails = {
        socialMedia: socialMedia,
        taskInput: taskInput,
        taskDate: taskDate,
        taskTime: taskTime,
      };

      // Pass the task details to the parent component (e.g., App)
      onSave(taskDetails);

      // Clear input fields after saving
      setTaskInput("");
      setTaskDate("");
      setTaskTime("");
    } else {
      // Display an error message or handle incomplete form
      console.log("Please fill in all fields");
    }
  };

  return (
    <div className="task-popup">
      <h3>Create Task for {socialMedia}</h3>
      {/* Task input field */}
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter task..."
      />
      {/* Date picker */}
      <input
        type="date"
        value={taskDate}
        onChange={(e) => setTaskDate(e.target.value)}
      />
      {/* Time picker */}
      <input
        type="time"
        value={taskTime}
        onChange={(e) => setTaskTime(e.target.value)}
      />
      {/* Submit button */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default TaskPopUp;
