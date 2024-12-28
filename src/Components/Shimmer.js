import React from "react";
import "../App.css";

const Shimmer = ({ cardCount = 10 }) => {
  return (
    <div>
      <div className="shimmer-filter-btn"></div>
      <div className="shimmer-card-container">
        {Array.from({ length: cardCount }).map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-res-logo"></div>
            <div className="shimmer-res-info"></div>
            <div className="shimmer-res-name"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
