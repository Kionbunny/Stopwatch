import "./styles.css";
import { useState } from "react";

export default function App() {
  const [time, setTime] = useState(60);
  const [intervalTracker, setIntervalTracker] = useState(null);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const startTimer = () => {
    if (intervalTracker) {
      clearInterval(intervalTracker); // Clear the existing interval if it's running
      /// when we click on the start button a new interval is created using setinterval func
      // These intervals are independent and will keep incrementing the time.
      // If the previous interval is not cleared before starting a new one, multiple intervals will run simultaneously,
    } /// if we wont clearInterval then the timer will be running continously
    const intervalId = setInterval(() => {
      /// the setinterval func returns id for the each interval
      setTime((t) => t + 1); /// a setter function to update the state
    }, 1000);
    setIntervalTracker(intervalId); /// this stores the id of the interval created by the setInterval func
  };

  const resetTimer = () => {
    /// reset button is clicked this event occurs
    clearInterval(intervalTracker); // Clear the interval
    setTime(0); // Reset time to 0
    setIntervalTracker(null); // Reset interval tracker
  };

  return (
    <>
      <h1>Stopwatch</h1>
      <p>Time : {formatTime(time)}</p>
      <button onClick={startTimer}>Start</button>
      {/*the startTimer func is being passed as a ref to be executed when the button is clickedHere, 
      the startTimer function is not called immediately; 
      it is passed as a reference to be called later when the button is clicked. */}
      <button onClick={resetTimer}>Reset</button>
    </>
  );
}
