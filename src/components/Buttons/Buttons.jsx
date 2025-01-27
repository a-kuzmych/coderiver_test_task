import React from "react";
import "./Buttons.scss";

const Buttons = () => {
  return (
    <section className="button">
      <button className="button__first">
        STREAM NOW
        <span className="button__icon"></span>
      </button>
      <button className="button__second">ALL EPISODES</button>
    </section>
  );
};

export default Buttons;
