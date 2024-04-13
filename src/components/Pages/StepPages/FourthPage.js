import React from 'react';
import ProgressBar from '../AdditionalPages/ProgressBar'; // Importing progress bar component
import Header from '../AdditionalPages/Header'; // Importing header component
import ArithmeticImage from '../../../images/math1.png';
import AlgebraicImage from '../../../images/math2.png';
import QuadraticImage from '../../../images/math3.png';
import CalculusImage from '../../../images/math4.png';
import FormFive from './SixthPage';
import ContinueButton from '../AdditionalPages/Button';
import PreviousButton from '../AdditionalPages/PreviousButton';

const FifthPage = () => {
  // useState for handling click event on the options
  // Initially none of the options are selected
  const [activeContainer, setActiveContainer] = React.useState(null);

  // useState for handling step completed
  // Initially the step is not completed so the state is set to false
  const [stepCompleted, setStepCompleted] = React.useState(false);

  // Define step data for each container
  const steps = [
    {
      id: 'math1',
      src: ArithmeticImage,
      category: 'Arithmetic',
      width: 'w-[55%]',
      description: 'Introductory',
    },
    {
      id: 'math2',
      src: AlgebraicImage,
      width: 'w-[55%]',
      category: 'Basic Algebra',
      description: 'Foundational',
    },
    {
      id: 'math3',
      src: QuadraticImage,
      width: 'w-[90%]',
      category: 'Intermediate Algebra',
      description: 'Intermediate',
    },
    {
      id: 'math4',
      src: CalculusImage,
      width: 'w-[55%]',
      category: 'Calculus',
      description: 'Advanced',
    },
  ];

  const handleContainerClick = (containerId) => {
    setActiveContainer(containerId); // Set the clicked option as the active one
  };

  const handleContinue = () => {
    if (activeContainer) {
      setStepCompleted(true); // Mark the step as completed
    }
  };

  if (stepCompleted) {
    // Render the next component when the step is completed
    return <FormFive />;
  }

  return (
    <main>
      <div className="m-8 w-5/6 mx-auto">
        {/* Horizontally centers the container */}
        <PreviousButton />
        <ProgressBar initialProgress={60} />
        <Header
          h1="What is your math comfort level?"
          p="Choose the highest level you feel confident in - you can always adjust later."
          pClassName={"text-center"} // class for the p text
          hClassName={"text-center"} // class for the h1 text
        />
      </div>

      {/* Using different margin left styles for different screen sizes to achieve responsive design. */}
      <section className='flex flex-wrap justify-center items-center h-full'>
        {steps.map((step) => (
          // For each option in this step, display the options
          <form
            key={step.id}
            // For screen size greater than 640px the margin-bottom is 20, while for other screen size it is 5.
            // For screen size greater than 640px the width/height is 52, while for other screen size it is 48.
            className={`
              mr-4 sm:mb-20 mb-5 cursor-pointer border border-gray-300 rounded-lg 
              sm:w-52 sm:h-52 w-48 h-48 flex flex-col justify-center items-center 
              ${activeContainer === step.id ? 'border-yellow-500 shadow-md' : ''}`}
            onClick={() => handleContainerClick(step.id)} // If the option is clicked, a yellow border with shadow appears
          >
            {/* Image Section */}
            <div className={`${step.width} h-15 overflow-hidden flex items-center justify-center`}>
              <img src={step.src} className="h-full w-full pt-10" alt={step.category} />
            </div>

            {/* Content Section */}
            <div className="flex-grow flex flex-col justify-center items-center p-4 text-center">
              <h2 className="font-semibold text-sm md:text-lg">{step.category}</h2>
              <p className="mt-2 text-md md:text-xl text-gray-500">{step.description}</p>
            </div>
          </form>
        ))}
      </section>

      <ContinueButton
        activeContainer={activeContainer}
        handleContinue={handleContinue}
      />
    </main>
  );
};

export default FifthPage;
