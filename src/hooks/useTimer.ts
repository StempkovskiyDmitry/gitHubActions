import { useRef, useState } from 'react';

export const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const pausedRef = useRef(false);
  const intervalRef = useRef(0);

  const onStart = () => {
    if (intervalRef.current) {
      return;
    }
    intervalRef.current = +setInterval(() => {
      !pausedRef.current && setTimer(prev => prev + 1);
    }, 1000);
  };

  const onReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = 0;
    pausedRef.current = false;
    setTimer(0);
    onStart();
  };

  const onPause = () => (pausedRef.current = !pausedRef.current);

  return {
    timer,
    onStart,
    onPause,
    onReset,
  };
};
