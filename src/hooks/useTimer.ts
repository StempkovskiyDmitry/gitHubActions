import { useEffect, useRef, useState } from 'react';

import { useGetEventsQuery } from '#services/modules';

import { setListAction } from '#store/App';

import { useAppDispatch } from '.';

const TIMER_REFETCH_REQUEST = 30;

export const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const pausedRef = useRef(false);
  const intervalRef = useRef(0);
  const eventQuery = useGetEventsQuery();

  const dispatch = useAppDispatch();

  const _onUpdateEvent = async () => {
    try {
      const response = await eventQuery.refetch().unwrap();
      if (response) {
        dispatch(setListAction(response));
      }
    } catch (error) {}
  };

  const _onStart = () => {
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
    _onStart();
  };

  const onPause = () => (pausedRef.current = !pausedRef.current);

  useEffect(() => {
    _onUpdateEvent();
    _onStart();
  }, []);

  useEffect(() => {
    if (timer === TIMER_REFETCH_REQUEST) {
      _onUpdateEvent();
      onReset();
    }
  }, [timer]);

  return {
    onPause,
    onReset,
  };
};
