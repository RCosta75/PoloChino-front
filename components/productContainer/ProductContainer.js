import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";

/*
const poloInfo = [
  {
    id: 1,
    image: "/TestPolo (1).jpg",
    description: "Cotton Polo Shirt with Collar and Pocket",
    price: 24.99,
  },
  {
    id: 2,
    image: "/TestPolo (2).jpg",
    description: "Pima Cotton Polo Shirt with V-Neck and Sleeves",
    price: 29.99,
  },
  {
    id: 3,
    image: "/TestPolo (3).jpg",
    description: "Performance Polo Shirt with Moisture Wicking Fabric",
    price: 34.99,
  },
  {
    id: 4,
    image: "/TestPolo (4).jpg",
    description: "Premium Polo Shirt with Stretch Fabric and Pocket",
    price: 39.99,
  },
  {
    id: 5,
    image: "/TestPolo (5).jpg",
    description: "Premium Polo Shirt with Stretch Fabric and Pocket",
    price: 39.99,
  },

  {
    id: 6,
    image: "/TestPolo (6).jpg",
    description: "Premium Polo Shirt with Stretch Fabric and Pocket",
    price: 39.99,
  },

  {
    id: 7,
    image: "/TestPolo (7).jpg",
    description: "Premium Polo Shirt with Stretch Fabric and Pocket",
    price: 39.99,
  },
];
*/

export default function ProductContainer() {

  const [poloData, setPoloData] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/polos/get")
      .then((response) => response.json())
      .then((data) => {
        setPoloData(data.polos);
        console.log(poloData);
      });
  }, []);

  const poloProduct = poloData?.map((polo, i) => {
    return (
      <div className="w-full h-full">
        <div className=" pt-20 px-11 grid grid-cols-4 gap-8">
          <Card key={i} data={polo} />
        </div>
      </div>
    );
  });

  return <>{poloProduct}</>;
}
