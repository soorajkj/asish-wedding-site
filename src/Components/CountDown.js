import React from "react";

const CountDown = () => {
  return (
    <section className="countdown">
      <div className="countdown-wrapper">
        <div className="countdown-textarea">
          <p>We Are Waiting For.....</p>
          <h2>The Big Day</h2>
        </div>
        <div className="countdown-timer">
          <div className="timer">
            <h1>23</h1>
            <p>DAYS</p>
          </div>
          <div className="timer">
            <h1>23</h1>
            <p>HOURS</p>
          </div>
          <div className="timer">
            <h1>23</h1>
            <p>MINUTES</p>
          </div>
          <div className="timer">
            <h1>23</h1>
            <p>SECONDS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
