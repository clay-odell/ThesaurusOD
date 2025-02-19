import React, { useState, useEffect } from 'react';
import './App.css';
import ReferenceCard from './ReferenceCard';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: 500,
    height: 300,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: 500,
        height: 300,
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div
        className="flex items-center justify-center"
        style={{ width: windowSize.width, height: windowSize.height }}
      >
        <ReferenceCard />
        <h1 className="text-4xl">Window Size: {windowSize.width} x {windowSize.height}</h1>
      </div>
    </>
  );
}

export default App;
