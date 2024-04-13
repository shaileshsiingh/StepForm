import React from 'react';

const Header = ({ h1, p, pClassName, hClassName, ClassName, Rate, Reviewer }) => {
  return (
    <div className={`${ClassName} items-center justify-start`}>
      {/* Header Title */}
      <h1 className={`text-xl md:text-2xl font-bold text-black-700 mt-3 ${hClassName}`}>{h1}</h1>
      
      {/* Rating Image (conditionally rendered) */}
      {Rate && <img src={Rate} width={150} className='sm:ml-20' alt="Rating" />}
      
      {/* Paragraph Text */}
      <p className={`text-sm mt-3 mb-5 text-black-600 ml-4 ${pClassName}`}>{p}</p>
      
      {/* Reviewer Text (italic) */}
      <p className="text-md italic mt-3 mb-5 text-black-600 sm:ml-20">{Reviewer}</p>
    </div>
  );
};

export default Header;
