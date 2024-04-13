import React from 'react';

export default function StepContainer({ src, category, description, onClick, isActive }) {
  const handleContainerClick = () => {
    onClick(); // Notify the parent component that this step container is clicked
  };

  return (
    <form
    //Different max-width style is used for different screen break points to achieve responsive design
      className={`
        ml-[30%] mb-4 cursor-pointer border border-gray-300 rounded-lg 
        lg:max-w-[40%] md:max-w-[60%] sm:max-w-full 
        ${isActive ? 'border-yellow-500 shadow-md' : ''}`}
      onClick={handleContainerClick} //If the option is clicked, a yellow border with shadow appears
    >
      <div  className="flex items-center px-5 py-1 ">
        <img src={src} width={40} alt={category} />
        <h2 className="font-semibold mr-1 mt-2 ml-8 text-sm md:text-lg">{category}</h2>
        <p className="mt-2 text-sm md:text-lg">{description}</p>
      </div>

    </form>
  );
}
