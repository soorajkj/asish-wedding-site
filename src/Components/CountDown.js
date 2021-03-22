import React from "react";
import CounterTime from "./CounterTime";

const CountDown = () => {
  return (
    <section className="countdown">
      <div className="countdown-wrapper">
        <div className="countdown-textarea">
          <p>We Are Waiting For.....</p>
          <h2>The Big Day</h2>
        </div>
        <div className="countdown-timer">
          <CounterTime />
          <CounterTime />
          <CounterTime />
          <CounterTime />
        </div>
      </div>
    </section>
  );
};

export default CountDown;
