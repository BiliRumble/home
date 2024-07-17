import { useEffect, useState } from 'react';

export default function useGTM(offset: number) {
  const [time, setTime] = useState<string>(getGTMTime(offset));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getGTMTime(offset));
    }, 1000);

    return () => clearInterval(interval);
  }, [offset]);

  return time;
}

// Return "hh:mm"
export function getGTMTime(offset: number) {
    const date = new Date();
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const newDate = new Date(utc + 3600000 * offset);
    return newDate.toTimeString().slice(0, 5);
  }