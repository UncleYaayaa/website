import Calendar from "./Calendar.jsx";
import SocialMediaCard from "./SocialMediaCard.jsx";
import TaskPopup from "./TaskPopUp.jsx";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="app">
      <div className="social-media-panel">
        <SocialMediaCard socialMedia="Facebook" addTask={addTask} />
        <SocialMediaCard socialMedia="Twitter" addTask={addTask} />
        <SocialMediaCard socialMedia="YouTube" addTask={addTask} />
        {/* Add other social media cards */}
      </div>
      <div className="calendar-panel">
        <Calendar />
      </div>
      <TaskPopup tasks={tasks} />
    </div>
  );
}

export default App;
