import React, { useEffect, useState } from 'react';

const ProgressBar = ({ initialProgress }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(initialProgress);
    }, 500); // Delay the progress animation for 500 milliseconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [initialProgress]);

  return (
    // Progress bar
    <div className="relative w-90 h-1 bg-gray-100 rounded-lg mx-10">
      {/* Filling the progress bar based on the progress value */}
      <div
        className="absolute top-0 left-0 h-full bg-gray-500 rounded-lg"
        style={{ width: `${progress}%`, transition: 'width 1s ease-in-out' }} // Apply transition for smooth animation
      ></div>
    </div>
  );
};

export default ProgressBar;
