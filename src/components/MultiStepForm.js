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
    <div className="max-w-md mx-auto">
      <div className="bg-gray-200 h-2 rounded-full mb-4">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        />
      </div>
    
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-lg font-semibold mb-4 bg-whitesmoke text-center py-2">
          {steps[currentStep].title}
        </h1>
        <p className="text-center">This will help us personalize your experience</p>
    <br></br>
        <div className="grid grid-cols-3 gap-4 ">
          {steps[currentStep].options.map((option) => (
            <ol
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className="flex items-center justify-center cursor-pointer "
              style={{ marginBottom: '1rem', width: '400px', height: '40px', border:'3px solid whitesmoke', cursor:'pointer', display:'flex',alignItems:'center'}}
            >
<div >
              <span >{option.icon}</span>
              <span>{option.label}</span>
              </div>
            </ol>
            
          ))}
          <button className='text-lg font-semibold mb-4 bg-whitesmoke text-center py-2'>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
