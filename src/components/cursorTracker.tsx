'use client';

import { useEffect, useState } from 'react';

const CursorTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        left: `${position.x - 450}px`,
        top: `${position.y - 450}px`,
      }}
      className={`transparent pointer-events-none fixed -z-10 h-[900px] w-[900px] rounded-full bg-gradient-radial from-[#415c833a] via-[#1a29424d] to-transparent opacity-50 blur-md`}
    ></div>
  );
};

export default CursorTracker;
