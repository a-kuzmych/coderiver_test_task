import React from "react";
import "./StarRating.scss";

const StarRating = ({ rating, maxStars }) => {
  const activeStars = Math.round(rating);
  const emptyStars = maxStars - activeStars;

  return (
    <ul className="stars">
      {Array(activeStars)
        .fill(null)
        .map((_, index) => (
          <li key={`active-${index}`} className="stars__star stars__star--active"></li>
        ))}
      {Array(emptyStars)
        .fill(null)
        .map((_, index) => (
          <li key={`empty-${index}`} className="stars__star"></li>
        ))}
    </ul>
  );
};

export default StarRating;
