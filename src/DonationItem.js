import React, { useState, useEffect } from 'react';

const TimeElapsed = ({ donationDate }) => {
  const [elapsedTime, setElapsedTime] = useState('');

  useEffect(() => {
    const calculateTimesElapsed = () => {
      const now = new Date();
      const donationTime = new Date(donationDate);
      const difference = now - donationTime;

      const seconds = Math.floor(difference / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (seconds < 60) {
        setElapsedTime(`${seconds} ${seconds === 1 ? 'second' : 'seconds'}`);
      } else if (minutes < 60) {
        setElapsedTime(`${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`);
      } else if (hours < 24) {
        setElapsedTime(`${hours} ${hours === 1 ? 'hour' : 'hours'}`);
      } else {
        setElapsedTime(`${days} ${days === 1 ? 'day' : 'days'}`);
      }
    };

    const intervalId = setInterval(() => {
      calculateTimesElapsed();
    }, 1000);

    calculateTimesElapsed(); // עדכון ראשוני
    return () => clearInterval(intervalId);
  }, [donationDate]);

  return <span>{elapsedTime} ago</span>;
};

export default TimeElapsed;




