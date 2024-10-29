import React from "react";
import Card from "./Card";
import { useEffect, useState,  } from "react";



export default function ProductContainer({ searchTerm }) {

  const [poloData, setPoloData] = useState([]);
  //Filtrez les articles en fonction du terme de recherche dans ProductContainer

  useEffect(() => {
    fetch("http://localhost:3000/polos/get")
      .then((response) => response.json())
      .then((data) => {
        setPoloData(data.polos);
        console.log(poloData);
      });
  }, []);

  const filteredPolos = poloData.filter((polo) =>
     polo.name && polo.name.toLowerCase().includes(searchTerm.toLowerCase()) );
  //Filtrage des articles en fonction 
  //du terme de recherche et affichage des résultats filtrés.
  // (polo.name && polo.name) pour vérifier l'existence du produit


  const poloProduct =  filteredPolos.map((polo, i) => {
    return (
      <div  >
          <Card key={i} polo={polo} />
      </div>
    );
  });

  return <div className=" pt-20 px-11 grid grid-cols-4 gap-8">{poloProduct}</div>;
}
