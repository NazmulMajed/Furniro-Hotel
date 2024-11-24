import React from "react";
import "./HotelRoom.css"; // Import the CSS file for styling

const HotelRoom = () => {
  return (
    <div className="hotel-room">
      {/* Main Header */}
      <div className="header-container">
        <h1>Browse The Range</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* Card Container */}
      <div className="card-container">
        <div className="card">
          <img
            className="card-image"
            src="./src/images/Mask Group.png"
            alt="Dining"
          />
          <p className="card-title">Dining</p>
        </div>
        <div className="card">
          <img
            className="card-image"
            src="./src/images/Image-living room.png"
            alt="Living"
          />
          <p className="card-title">Living</p>
        </div>
        <div className="card">
          <img
            className="card-image"
            src="./src/images/image 101.png"
            alt="Bedroom"
          />
          <p className="card-title">Bedroom</p>
        </div>
      </div>
    </div>
  );
};

export default HotelRoom;
