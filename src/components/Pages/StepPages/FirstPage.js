import React from 'react';
import ProgressBar from '../AdditionalPages/ProgressBar'; 
import Header from '../AdditionalPages/Header'; 
import StudentImage from '../../../images/student.png';
import ProfessionalImage from '../../../images/professional.png';
import ParentImage from '../../../images/parent.png';
import LearnerImage from '../../../images/learner.png';
import TeacherImage from '../../../images/teacher.png';
import OtherImage from '../../../images/other.png';
import StepContainer from '../AdditionalPages/step-container';
import FormTwo from './SecondPage';
import ContinueButton from '../AdditionalPages/Button';

const SecondPage = () => {
  // useState for handling click event on the options
  // Initially none of the options are selected
  const [activeContainer, setActiveContainer] = React.useState(null);

  // useState for handling step completed
  // Initially the step is not completed so the state is set to false
  const [stepCompleted, setStepCompleted] = React.useState(false);

  // Define step data for each container
  const steps = [
    {
      id: 'student',
      src: StudentImage,
      category: 'Student',
      description: 'or soon to be enrolled',
    },
    {
      id: 'professional',
      src: ProfessionalImage,
      category: 'Professional',
      description: 'pursuing a career',
    },
    {
      id: 'parent',
      src: ParentImage,
      category: 'Parent',
      description: 'of a school-age child',
    },
    {
      id: 'learner',
      src: LearnerImage,
      category: 'Lifelong learner',
      description: '',
    },
    {
      id: 'teacher',
      src: TeacherImage,
      category: 'Teacher',
      description: '',
    },
    {
      id: 'other',
      src: OtherImage,
      category: 'Other',
      description: '',
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
    return <FormTwo />;
  }

  return (
    <main>
      <div className="m-8 w-5/6 mx-auto">
        {/* Horizontally centers the container */}
        <ProgressBar initialProgress={10} />
        <Header
          h1="Which describes you best?"
          p="This will help us personalize your experience."
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

export default SecondPage;
