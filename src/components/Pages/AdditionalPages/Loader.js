// Import necessary components
import React, { useState, useEffect, useRef } from 'react'; 
import '../../../App.css'; 
import LearningRecommendations from '../StepPages/SixthPage'; 

// Define the YellowCircleLoader functional component
const YellowCircleLoader = ({ size = 100 }) => {
  // Define state to track animation completion
  const [animationComplete, setAnimationComplete] = useState(false);
  // Create a ref to reference the SVG circle element
  const circleRef = useRef(null);

  // Use effect hook to handle animation logic on component mount
  useEffect(() => {
    // Function to run animation logic after component mount
    const circleElement = circleRef.current; // Get reference to the SVG circle element

    if (circleElement) {
      // If circle element is available
      const totalLength = circleElement.getTotalLength(); // Get the total length of the circle path
      circleElement.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Apply transition for animation
      circleElement.style.strokeDasharray = totalLength; // Set stroke dash array to the total length
      circleElement.style.strokeDashoffset = totalLength * (1 - 0.2); // Start with 20% of the circle filled

      // Start the animation after a short delay to ensure initial styles are applied
      setTimeout(() => {
        circleElement.style.transition = 'stroke-dashoffset 5s ease-in-out'; // Apply animation transition
        circleElement.style.strokeDashoffset = 0; // Fill the circle gradually

        // Set animation complete state after 5 seconds
        setTimeout(() => {
          setAnimationComplete(true); // Set animation complete to true
        }, 5000);
      }, 100);

    }
    
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Render the YellowCircleLoader component
  return (
    <div className='justify-center items-center h-full w-full mt-40'>
      {/* Conditionally render LearningRecommendations after animationComplete is true */}
      {animationComplete ? (
        <LearningRecommendations /> // Render LearningRecommendations component after animation completion
      ) : (
        <>
          {/* SVG Circle Loader */}
          <svg
            className="yellow-circle-loader mx-[45%]"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            width={size}
            height={size}
          >
            {/* Circle element within the SVG */}
            <circle
              ref={circleRef}
              cx="50"
              cy="50"
              r="40"
              fill="none"
              strokeWidth="12"
              stroke="#fcba48"
              transform="rotate(-90, 50, 50)"
            />
          </svg>
          {/* Header Text */}
          <h1 className='sm:text-2xl text-xl text-center md:text-3xl font-bold text-black-700 mt-3 sm:mx-[18%] mx-[5%]'>Finding learning path recommendations for you based on your responses</h1>
        </>
      )}
    </div>
  );
};

// Export the YellowCircleLoader component as default
export default YellowCircleLoader;
