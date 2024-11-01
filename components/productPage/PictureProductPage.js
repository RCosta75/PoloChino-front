import React from 'react';

export default function PictureProductPage({ image, description }) {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <div className="flex flex-col">
 
          <img  src={image} alt={description} className="mb-4 aspect-square w-full h-80 object-cover" />
          <img src={image} alt={description} className="mb-4 aspect-square w-full h-80 object-cover" />
          <img src={image} alt={description} className="mb-4 aspect-square w-full h-80 object-cover" />
          <img src={image} alt={description} className="mb-4 aspect-square w-full h-80 object-cover" />

      </div>
      <div>
      <img src={image} alt={description} className=" w-full h-full object-cover" />
      </div>
    </div>
  );
}
