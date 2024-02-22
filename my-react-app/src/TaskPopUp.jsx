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
}

export default TaskPopUp;
