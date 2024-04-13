import React from 'react';
import ProgressBar from '../AdditionalPages/ProgressBar'; //Importing progress bar component
import Header from '../AdditionalPages/Header'; //Importing header component
import LearningImage from '../../../images/learning_skills.png';
import ExploringImage from '../../../images/exploring_topics.png';
import RefreshingImage from '../../../images/refreshing_foundation.png';
import ExercisingImage from '../../../images/exercising_brain.png';
import ElseImage from '../../../images/something_else.png';
import StepContainer from '../AdditionalPages/step-container';
import FormThree from './ThirdPage';
import ContinueButton from '../AdditionalPages/Button';
import PreviousButton from '../AdditionalPages/PreviousButton';

const ThirdPage = () => {
  // useState for handling click event on the options
  // Initially none of the options are selected
  const [activeContainer, setActiveContainer] = React.useState(null);

  // useState for handling step completed
  // Initially the step is not completed so the state is set to false
  const [stepCompleted, setStepCompleted] = React.useState(false);

  // Define step data for each container
  const steps = [
    {
      id: 'learning',
      src: LearningImage,
      category: '',
      description: 'Learning specific skills to advance my career',
    },
    {
      id: 'exploring',
      src: ExploringImage,
      category: '',
      description: "Exploring new topics I'm interested in",
    },
    {
      id: 'refreshing',
      src: RefreshingImage,
      category: '',
      description: 'Refreshing my math foundation',
    },
    {
      id: 'exercising',
      src: ExercisingImage,
      category: '',
      description: 'Exercising my brain to stay sharp',
    },
    {
      id: 'else',
      src: ElseImage,
      category: '',
      description: 'Something else',
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
    return <FormThree />;
  }

  return (
    <main>
      <div className="m-8 w-5/6 mx-auto">
        {/* Horizontally centers the container */}
        <PreviousButton />
        <ProgressBar initialProgress={25} />
        <Header
          h1="Which are you most interested in?"
          p="Choose just one. This will help us get you started (but won't limit your experience)."
          pClassName={"text-center"} // class for the p text
          hClassName={"text-center"} // class for the h1 text
        />
      </div>

      {/* Using different margin left styles for different screen sizes to achieve responsive design. */}
      <section className='lg:ml-[0%] md:ml-[-10%] sm:ml-[-20%] ml-[-40%]'>
        {steps.map((step) => (
          // For each option in this step, display the options
          <StepContainer
            key={step.id}
            src={step.src}
            category={step.category}
            description={step.description}
            onClick={() => handleContainerClick(step.id)} // Handles clicking the option
            isActive={activeContainer === step.id} // Checks if the option is clicked and sets it to active
          />
        ))}
      </section>

      <ContinueButton
        activeContainer={activeContainer}
        handleContinue={handleContinue}
      />
    </main>
  );
};

export default ThirdPage;
