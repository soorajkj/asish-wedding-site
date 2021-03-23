import React from "react";
// import CounterTime from "./CounterTime";
import { useTimer } from "react-timer-hook";

const CountDown = ({ expiryTimestamp, expiryFunction }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: expiryFunction,
  });
  return (
    <section className="countdown">
      <div className="countdown-wrapper">
        <div className="countdown-textarea">
          <p>We Are Waiting For.....</p>
          <h2>The Big Day</h2>
        </div>
        <div className="countdown-timer">
          <div className="timer">
            <h1>{days.toString().padStart(2, 0)}</h1>
            <p>DAYS</p>
          </div>
          <div className="timer">
            <h1>{hours.toString().padStart(2, 0)}</h1>
            <p>HOURS</p>
          </div>
          <div className="timer">
            <h1>{minutes.toString().padStart(2, 0)}</h1>
            <p>MINUTES</p>
          </div>
          <div className="timer">
            <h1>{seconds.toString().padStart(2, 0)}</h1>
            <p>SECONDS</p>
          </div>
          {/* <CounterTime />
          <CounterTime />
          <CounterTime />
          <CounterTime /> */}
        </div>
      </div>
    </section>
  );
};

export default CountDown;
