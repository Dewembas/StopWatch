import React from 'react';

import useTimer from "../hook/useTimer";
import { formatTime } from '../c/idex';



const Timer = () => {
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset, handleStop } = useTimer(0)

  return (
    <div className="app">
      <h3>React Stopwatch </h3>
      <div className='stopwatch-card'>
        <p>{formatTime(timer)}</p>
        <div className='buttons'>
          {
            !isActive  ?
              <button onClick={handleStart}>Start</button>
              : <button onClick={handleStop} >Stop</button>
          }
         {isPaused ? <button onClick={handlePause}>Wait</button> :
                  <button onClick={handleResume} disabled={!isActive}>Resume</button>}
          <button onClick={handleReset} disabled={!isActive}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Timer;