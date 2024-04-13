import React, { useState } from 'react';
import Header from '../AdditionalPages/Header';
import LearningPath from '../../../images/path.png';

const SixthPage = () => {
  const [activeContainer, setActiveContainer] = useState(null);

  const handleContainerClick = (containerId) => {
    if (activeContainer === containerId) {
      setActiveContainer(null);
    } else {
      setActiveContainer(containerId);
    }
  };

  return (
    <div className="justify-center items-center w-10/12 mx-auto">
      {/* Aligning the header component to center of the webpage */}
      <div className='sm:w-10/12 w-full mx-auto mt-40 text-center mb-12'>
        <Header
          h1="Learning paths based on your responses"
          p="Choose one to get started. You can switch anytime."
        />
      </div>

      {/* For large screens the display is flex while for others it is block */}
      <div className='lg:flex block w-10/12 mx-auto gap-3 relative'>
        {/* Learning path container component */}
        <div
          className={`
            lg:w-[47%] cursor-pointer md:w-[70%] sm:w-[90%] lg:mb-[0%] mb-[5%] 
            w-full flex border border-gray-300 rounded-md p-6 
            ${activeContainer === 'foundationalMath' ? 'border-yellow-500 shadow-md' : ''}`}
          onClick={() => handleContainerClick('foundationalMath')}
        >
          {/* Path details inside the container */}
          <div className='flex flex-col'>
            <p className='text-md font-semibold'>
              <span className='font-bold mr-1'>Foundational Math</span>
              Build your foundational skills in algebra, geometry, and probability.
            </p>
          </div>
          <img src={LearningPath} className='w-[35%] ml-5' alt="Learning Path" />
        </div>

        {/* Most popular tag */}
        <div className='w-32 rounded-2xl text-xs py-2 bg-yellow-500 absolute lg:top-1/5 lg:left-1/4 sm:ml-[37%] md:mt-[-31%] sm:mt-[-38%] mt-[-54%] ml-[50%] lg:ml-[0%] lg:mt-[0%] transform -translate-x-1/2 -translate-y-1/2 text-center text-black-500 font-bold'>
          MOST POPULAR
        </div>

        {/* Learning path container component */}
        <div
          className={`
            lg:w-[47%] cursor-pointer md:w-[70%] sm:w-[90%] lg:mb-[0%] mb-[5%] 
            w-full flex border border-gray-300 rounded-md p-6 
            ${activeContainer === 'mathematicalThinking' ? 'border-yellow-500 shadow-md' : ''}`}
          onClick={() => handleContainerClick('mathematicalThinking')}
        >
          {/* Path details inside the container */}
          <div className='flex flex-col'>
            <p className='text-md font-semibold'>
              <span className='font-bold mr-1'>Mathematical Thinking</span>
              Build your foundational skills in algebra, geometry, and probability.
            </p>
          </div>
          <img src={LearningPath} className='w-[35%] ml-5' alt="Learning Path" />
        </div>
      </div>
    </div>
  );
};

export default SixthPage;
