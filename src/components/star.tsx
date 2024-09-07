import React from 'react';

const Star = () => {
  const randomDuration = Math.floor(Math.random() * 10 + 10); // Random duration between 10-20s
  const randomDelay = Math.floor(Math.random() * 10); // Random delay between 0-10s

  return (
    <div
      className="animate-twinkle absolute h-[2px] w-[2px] rounded-full bg-white/50 shadow-lg shadow-white blur-[1px]"
      style={{
        animation: `move ${randomDuration}s infinite linear ${randomDelay}s, twinkle 20s infinite alternate`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
    ></div>
  );
};

export default Star;
