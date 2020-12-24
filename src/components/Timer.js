import React from 'react';

import useTimer from "../hook/useTimer";
import { formatTime } from '../c/idex';



const Timer = () => {
  const { timer, isActive, isPaused, start, pause, resume, reset, stop } = useTimer(0)

  return (
    <div className="app">
      <h3>Stopwatch </h3>
      <div className='stopwatch-card'>
        <p>{formatTime(timer)}</p>
        <div className='buttons'>
          {
            !isActive  ?
              <button onClick={start}>Start</button>
              : <button onClick={stop} >Stop</button>
          }
         {isPaused ? <button onClick={pause}>Wait</button> :
                  <button onClick={resume} disabled={!isActive}>Resume</button>}
          <button onClick={reset} disabled={!isActive}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Timer;