import React, { useState } from 'react';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: 'Which describes you best?',
      options: [
        { id: 0, label: 'Student or soon to be enrolled', icon: '👨‍🎓' },
        { id: 1, label: 'Professional pursuing a career', icon: '👩‍💼' },
        { id: 2, label: 'Parent of a school-age child', icon: '👦' },
        { id: 3, label: 'Lifelong learner', icon: '👴' },
        { id: 4, label: 'Teacher', icon: '👩‍🏫' },
        { id: 5, label: 'Other', icon: '👱‍♂️' },
      ],
    },
  ];

  const handleOptionClick = (optionId) => {
    // Handle option selection and navigate to the next step
    console.log(`Selected option with ID ${optionId}`);
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="bg-gray-200 h-2 rounded-full mb-4">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>
    
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl md:text-2xl lg:text-2xl font-semibold bg-whitesmoke text-center py-2 mb-4">
          {steps[currentStep].title}
        </h1>
        <p className="text-center text-sm md:text-base mb-4">This will help us personalize your experience</p>

        <div className="flex flex-col">
          {steps[currentStep].options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className="flex items-center cursor-pointer border border-gray-300 rounded-md p-2 hover:bg-gray-100 mb-2"
            >
              <span className="mr-2">{option.icon}</span>
              <span>{option.label}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
