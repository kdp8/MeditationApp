import React, { useState, useEffect } from 'react';

const MyTime = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours24 = now.getHours();
      const hours12 = hours24 % 12 || 12; // Convert to 12-hour format
      const amPm = hours24 >= 12 ? 'PM' : 'AM'; // Determine AM/PM
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const formattedTime = `${hours12}:${minutes}:${seconds} ${amPm}`;
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
