/* eslint-disable no-unused-vars */
import React from 'react';
// eslint-disable-next-line react/prop-types
const Card = ({ image, title }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4"> {/* Added padding */}
      <img className="w-full" src={image} alt={title} />
      <div className="px-4 py-2"> {/* Adjusted padding */}
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
};

export default Card; 
