import { useState, useRef } from 'react';

const useTimer = (initialState = 0) => {
  const [timer, setTimer] = useState(initialState)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const countRef = useRef(null)

  const start = () => {
    setIsActive(true)
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const stop = () => {
    clearInterval(countRef.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
    
  }

  const pause = () => {
    clearInterval(countRef.current)
    setIsPaused(false)
  }

  const resume = () => {
    setIsPaused(false)
    setIsActive(true)
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const reset = () => {
    clearInterval(countRef.current)
    
    setTimer(0)
    setIsActive(true)
    setIsPaused(true)
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  return { timer, isActive, isPaused, start, pause, resume, reset, stop }
}

export default useTimer