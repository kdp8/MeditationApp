import React, { useState, useEffect } from 'react';

const MyTime = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const formattedTime = `${hours}:${minutes}:${seconds}`;
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1
        className="text-6xl text-white font-bold text-shadow px-3 text-center mb-3"
        style={{
          textShadow: '0 0 4px #000',
        }}
      >
        {currentTime}
      </h1>
    </div>
  );
};

export default MyTime;
