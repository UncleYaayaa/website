import React from "react";

function SocialMediaCard({ name, onClick }) {
  // Function to handle when the card is clicked
  const handleClick = () => {
    // Pass the name of the social media card to the parent component
    onClick(name);
  };

  return (
    <div className="social-media-card" onClick={handleClick}>
      <h3>{name}</h3>
      {/* You can add more content or styling for the social media card */}
    </div>
  );
}

export default SocialMediaCard;
