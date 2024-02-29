import React, { useState } from "react";
import "./SocialMediaCard.css";

function SocialMediaCard({ socialMedia, addTask }) {
  const [taskInput, setTaskInput] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");

  const handleTaskSubmit = () => {
    if (taskInput && taskDate && taskTime) {
      const newTask = {
        socialMedia,
        task: taskInput,
        date: taskDate,
        time: taskTime,
      };
      addTask(newTask);
      setTaskInput("");
      setTaskDate("");
      setTaskTime("");
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="social-media-card">
      <h3>{socialMedia}</h3>
      <input
        type="text"
        placeholder="Task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <input
        type="date"
        value={taskDate}
        onChange={(e) => setTaskDate(e.target.value)}
      />
      <input
        type="time"
        value={taskTime}
        onChange={(e) => setTaskTime(e.target.value)}
      />
      <button onClick={handleTaskSubmit}>Add Task</button>
    </div>
  );
}

export default SocialMediaCard;
