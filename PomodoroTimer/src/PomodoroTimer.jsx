
import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isSession, setIsSession] = useState(true);

  useEffect(() => {
    let timer;
    if(!isRunning){
      timer = setInterval(() => {
        if(seconds === 0){
          if(minutes === 0){
            setIsSession((prev) => !prev);
            setMinutes(isSession ? 5 : 25);
            setSeconds(0);
          }else {
            setMinutes((prev) => prev - 1);
            setSeconds(59);
          }
        }else{
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    }
    return  () => clearInterval(timer)
  }, [isRunning, seconds, minutes, isSession]);

  const handleStartPause = () => {
    setIsRunning(prev => !prev)
  }

  const handleReset = () => {
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
    setIsSession(true);
  }
  return (
    <div>
      <h1>{isSession ? 'Work Session' : 'Break Session'}</h1>
      <div>
        <span>{String(minutes).padStart(2, '0')}</span>:
        <span>{String(seconds).padStart(2, '0')}</span>
      </div>
      <button onClick={handleStartPause}>
        {isRunning ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default PomodoroTimer;