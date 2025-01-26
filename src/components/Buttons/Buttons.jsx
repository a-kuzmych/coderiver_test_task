import React from "react";
import "./Buttons.scss";

const Buttons = () => {
  return (
    <section className="button">
      <button className="button__first">
        STREAM NOW
        <img
          className="button__icon"
          src="/src/assets/img/overview/play.svg"
          alt="icon"
        />
      </button>
      <button className="button__second">ALL EPISODES</button>
    </section>
  );
};

export default Buttons;