import React, { useState, useEffect } from "react";

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalID;
    if(isRunning){
      intervalID = setInterval(() => {
        setElapsedTime(previousElapsedTime => (previousElapsedTime+1))
      }, 1000);
    }else{
      clearInterval(intervalID)
    }
    return () => clearInterval(intervalID);

  },[isRunning])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }
  const startStop = () => (
    setIsRunning(!isRunning)
  )

  const restart = () => {
    setIsRunning(false);
    setElapsedTime(0)
  }

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(elapsedTime)}</p>
      <button onClick={startStop}>{!isRunning? "Start" : "Stop"}</button>
      <button onClick={restart}>Reset</button>
    </div>
  );
}

// export default App;
