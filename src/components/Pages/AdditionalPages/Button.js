import React from 'react';

const ContinueButton = ({ activeContainer, handleContinue, className }) => {
  // Construct the default class names for the button
  const defaultClassName = `bg-black text-white text-center rounded-md w-40 h-10 ml-[45%] ${
    activeContainer ? '' : 'opacity-20 cursor-not-allowed'
  }`;

  // Merge default class names with additional class names passed via props
  const combinedClassName = `${defaultClassName} ${className}`;

  return (
    <button
      className={combinedClassName}
      disabled={!activeContainer}
      onClick={handleContinue}
    >
      Continue
    </button>
  );
};

export default ContinueButton;
