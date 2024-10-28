import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";



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
          <Card key={i} polo={polo} />
        </div>
      </div>
    );
  });

  return <>{poloProduct}</>;
}
