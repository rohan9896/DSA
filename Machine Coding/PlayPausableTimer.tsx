import { useEffect, useState } from "react";
import "./styles.css";

let timerId = null;

export default function App() {
  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      timerId = setTimeout(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearTimeout(timerId);
  }, [time, isRunning]);

  const handlePause = () => {
    setIsRunning(false);
    clearTimeout(timerId);
  };

  const handleStart = () => {
    setIsRunning(true);
    setTime((prev) => prev + 1);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="App">
      <button onClick={() => handlePause()}>Pause</button>
      <button onClick={() => handleStart()}>Start</button>
      <button onClick={() => handleReset()}>Reset</button>
      <h1>{time} seconds</h1>
    </div>
  );
}
