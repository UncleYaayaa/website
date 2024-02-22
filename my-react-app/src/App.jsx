import Calendar from "./Calendar.jsx";
import SocialMediaCard from "./SocialMediaCard.jsx";
import TaskPopUp from "./TaskPopUp.jsx";

function App() {
  return (
    <div className="app">
      <Calendar />
      <SocialMediaCard name="Instagram" />
      <SocialMediaCard name="YouTube" />
      <SocialMediaCard name="Twitter" />
      {/* Add other social media cards */}
      <TaskPopUp socialMedia="Instagram" />
      <TaskPopUp socialMedia="YouTube" />
      <TaskPopUp socialMedia="Twitter" />
      {/* Add other task pop-ups */}
    </div>
  );
}

export default App;
