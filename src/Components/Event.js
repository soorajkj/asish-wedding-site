import React from "react";
import Ceremony from "./Ceremony";

const Event = () => {
  return (
    <section className="section-ceremony">
      <h2 className="ceremony-heading">When & Where</h2>
      <div className="ceremony-wrapper">
        <Ceremony customClass="ceremony" />
        <Ceremony customClass="flip-ceremony" />
        <Ceremony customClass="ceremony" />
      </div>
    </section>
  );
};

export default Event;
