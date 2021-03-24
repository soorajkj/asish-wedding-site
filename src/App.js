import React, { useState, useEffect } from "react";
import CountDown from "./Components/CountDown";
import Couple from "./Components/Couple";
import Event from "./Components/Event";
import Header from "./Components/Header";
import Landing from "./Components/Landing";
import WelcomeArea from "./Components/WelcomeArea";
import Gallery from "./Components/Gallery";

const App = () => {
  const [showTimer, setshowTimer] = useState(false);
  const [timeValue, setTimeValue] = useState("");
  useEffect(() => {
    var time = new Date();
    var date2 = new Date("May 03, 2021 10:30:00");
    var seconds = Math.abs(time - date2) / 1000;
    if (date2 < time) {
      setshowTimer(false);
      setTimeValue("");
      time = "";
    } else {
      setshowTimer(true);
      time.setSeconds(time.getSeconds() + seconds);
      setTimeValue(time);
    }
  }, []);
  const onExpire = () => {
    setshowTimer(false);
  };
  return (
    <div className="App">
      <Header />
      <Landing />
      {showTimer && (
        <CountDown expiryTimestamp={timeValue} expiryFunction={onExpire} />
      )}
      <Couple />
      <WelcomeArea />
      <Event />
      <Gallery />
    </div>
  );
};

export default App;
