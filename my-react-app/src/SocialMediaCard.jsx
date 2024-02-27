import React from "react";
import "./SocialMediaCard.css"; // Import your CSS file

function SocialMediaCard({ name, onClick }) {
  // Function to handle when the card is clicked
  const handleClick = () => {
    // Pass the name of the social media card to the parent component
    onClick(name);
  };

  return (
    <div className="social-media-card" onClick={handleClick}>
      <img
        className="card-image"
        src="https://via.placeholder.com/200"
        alt="profile picture"
      ></img>
      <h2 className="card-title">Yaseen</h2>
      <p className="card-text">I create Websites and Play Games</p>
    </div>
  );
}

export default SocialMediaCard;
