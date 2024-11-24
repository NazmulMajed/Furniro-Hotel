import React from "react";
import "./Portfolio.css"; // Import the CSS for styling

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="left-side">
        <h2>50+ Beautiful Rooms</h2>
        <p>
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you.
        </p>
        <button className="explore-button">Explore More</button>
      </div>

      <div className="right-side">
        <div className="image-gallery">
          <div className="card">
            <div className="room-info">
              <span className="room-number">Room 1</span>
              <span className="room-size">300 sq ft</span>
            </div>
            <img src="./images/image 101.png" alt="Room 1" />
          </div>

          <div className="card">
            <div className="room-info">
              <span className="room-number">Room 2</span>
              <span className="room-size">350 sq ft</span>
            </div>
            <img src="path/to/room2.jpg" alt="Room 2" />
          </div>

          <div className="card">
            <div className="room-info">
              <span className="room-number">Room 3</span>
              <span className="room-size">400 sq ft</span>
            </div>
            <img src="path/to/room3.jpg" alt="Room 3" />
          </div>

          {/* Add more room cards as necessary */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
