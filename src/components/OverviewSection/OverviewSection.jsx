import React from "react";
import "./OverviewSection.scss";
import StarRating from "../StarRating/StarRating";

const OverviewSection = () => {
  return (
    <section className="overview">
      <div className="overview__genres">
        <span>Drama</span>
        <svg
          width="4"
          height="33"
          viewBox="0 0 4 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 0V33" stroke="white" strokeWidth="3" />
        </svg>

        <span>Thriller</span>
        <svg
          width="4"
          height="33"
          viewBox="0 0 4 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 0V33" stroke="white" strokeWidth="3" />
        </svg>

        <span>Supernatural</span>
      </div>
      <h2 className="overview__title">Stranger Things</h2>
      <div className="overview__details">
        <span>2019</span>
        <svg
          width="4"
          height="20"
          viewBox="0 0 4 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 0V20" stroke="white" strokeWidth="3" />
        </svg>

        <span>
          DIRECTOR: <span className="overview__details-info">Shawn Levy</span>
        </span>
        <svg
          width="4"
          height="20"
          viewBox="0 0 4 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 0V20" stroke="white" strokeWidth="3" />
        </svg>

        <span>
          Seasons:{" "}
          <span className="overview__details-info">3 (5 Episodes)</span>
        </span>
      </div>
      <p className="overview__description">
        In 1980s Indiana, a group of young friends witness supernatural forces
        and secret government exploits. As they search for answers, the children
        unravel a series of extraordinary mysteries.
      </p>
      <StarRating rating={3} maxStars={5} />
    </section>
  );
};

export default OverviewSection;
