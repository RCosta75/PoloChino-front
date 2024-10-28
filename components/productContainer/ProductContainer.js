import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";



export default function ProductContainer() {

  const [poloData, setPoloData] = useState();

  // met les POLO en bdd dans le useState(poloData)
  useEffect(() => {
    fetch("http://localhost:3000/polos/get")
      .then((response) => response.json())
      .then((data) => {
        setPoloData(data.polos);
        console.log(poloData);
      });
  }, []);


  // map a travers useState() pour afficher les Card de polo
  const poloProduct = poloData?.map((polo, i) => {
    return (
      <div >
          <Card key={i} polo={polo} />
      </div>
    );
  });

  return <div className=" pt-20 px-11 grid grid-cols-4 gap-8">{poloProduct}</div>;
}
