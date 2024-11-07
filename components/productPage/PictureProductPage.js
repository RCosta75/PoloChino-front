import React from "react";
import { useSelector } from "react-redux";

export default function PictureProductPage({ image, description }) {
  const color = useSelector((state) => state.cart.color);

  let source = image;

  if (image === 'TestPolo (1).jpg'){
    switch (color) {
      case "Red":
        source = "/Polo Bordeau.png";
        break;
      case "Green":
        source = "/Polo Kaki.png";
        break;
      case "Yellow":
        source = "/Polo Jaune.png";
        break;
      case "Brown":
        source = "/Polo Marron.png";
        break;
      case "Blue":
        source = "/Polo Bleu.png";
        break;
      default:
        source = "TestPolo (1).jpg";
        break;
    }
  }


  return (
    <div className="flex w-1/2 pt-20 items-center justify-center gap-10  ">
      <div className="flex flex-col justify-center items-center h-4">
        <img
          src={source}
          alt={description}
          className="w-24 py-4 rounded-xl object-contain"
        />
        <img
          src={source}
          alt={description}
          className="w-24 py-4 rounded-xl object-contain"
        />
        <img
          src={source}
          alt={description}
          className="w-24 py-4 rounded-xl object-contain"
        />
      </div>
      <div className="flex ">
        <img src={source} alt={description} className="rounded-md h-[500px]" />
      </div>
    </div>
  );
}
