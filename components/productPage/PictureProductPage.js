import React from "react";
import { useSelector } from "react-redux";


export default function PictureProductPage({ image, description }) {

  const color = useSelector((state) => state.cart.color);

  const source = () => {
    if(image === "TestPolo (1).jpg"){
      switch (color) {
        case 'Red' :
          image 
      }
    }
  }

  return (
    <div className="flex w-1/2 pt-20 items-center justify-center gap-10  ">
      <div className="flex flex-col justify-center items-center h-4">
        <img
          src={image}
          alt={description}
          className="w-24 py-4 rounded-xl object-contain"
        />
        <img
          src={image}
          alt={description}
          className="w-24 py-4 rounded-xl object-contain"
        />
        <img
          src={image}
          alt={description}
          className="w-24 py-4 rounded-xl object-contain"
        />

      </div>
      <div className="flex ">
        <img src={image} alt={description} className="rounded-md h-[500px]" />
      </div>
    </div>
  );
}
