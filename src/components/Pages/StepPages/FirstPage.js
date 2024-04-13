import React, { useState, useEffect } from 'react';
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

const FirstPage = () => {
  const [activeContainer, setActiveContainer] = useState(null);
  const [stepCompleted, setStepCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // New state for loading animation

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
    setActiveContainer(containerId);
  };

  const handleContinue = () => {
    if (activeContainer) {
      setStepCompleted(true);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false); // Simulating the end of loading after 1 second
    }, 1000);

    return () => clearTimeout(timeout); // Clean up the timeout on unmount
  }, []); // Empty dependency array ensures this effect runs only once

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (stepCompleted) {
    return <FormTwo />;
  }

  return (
    <main>
      <div className="m-8 w-5/6 mx-auto">
        <ProgressBar initialProgress={10} />
        <Header
          h1="Which describes you best?"
          p="This will help us personalize your experience."
          pClassName={"text-center"} // class for the p text
          hClassName={"text-center"} // class for the h1 text
        />
      </div>

      <section className='lg:ml-[0%] md:ml-[-10%] sm:ml-[-20%] ml-[-40%]'>
        {steps.map((step) => (
          <StepContainer
            key={step.id}
            src={step.src}
            category={step.category}
            description={step.description}
            onClick={() => handleContainerClick(step.id)}
            isActive={activeContainer === step.id}
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

export default FirstPage;
