import React from "react";

export default function PictureProductPage({ image, description }) {
  return (
    <div className="flex w-1/2 pt-20 items-center justify-center gap-10  ">
      <div className="flex flex-col justify-center items-center">
        <img
          src={image}
          alt={description}
          className="w-24 py-5 rounded-xl object-contain"
        />
        <img
          src={image}
          alt={description}
          className="w-24 py-5 rounded-xl object-contain"
        />
        <img
          src={image}
          alt={description}
          className="w-24 py-5 rounded-xl object-contain"
        />
        <img
          src={image}
          alt={description}
          className="w-24 py-5 rounded-xl object-contain"
        />
      </div>
      <div className="flex ">
        <img src={image} alt={description} className="rounded-md h-[700px]" />
      </div>
    </div>
  );
}
