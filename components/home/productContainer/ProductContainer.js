import React from "react";
import Card from "./Card";
import { useEffect, useState,  } from "react";



export default function ProductContainer({ searchTerm }) {

  const [poloData, setPoloData] = useState([]);
  //Filtrez les articles en fonction du terme de recherche dans ProductContainer
  const [sortOrder, setSortOrder] = useState("croissant"); // Ajout de l'état pour l'ordre de tri

  useEffect(() => {
    fetch("http://localhost:3000/polos/get")
      .then((response) => response.json())
      .then((data) => {
        setPoloData(data.polos);
        console.log(poloData);
      });
  }, []);

  const handleSortChange = (order) => {
     setSortOrder(order); //Met à jour l'état de l'ordre de tri lorsqu'on sélectionne une nouvelle option.
    };

    const sortedPolos = [...poloData].sort((a, b) => {
       if (sortOrder === "croissant") {
         return a.price - b.price; 
        } else if (sortOrder === "decroissant") {
           return b.price - a.price; 
          }  
          else { 
            return 0; 
          } 
          //Il sert  de valeur par défaut si aucune des conditions précédentes
          // n'est remplie, évitant ainsi des erreurs potentielles.
        });
        //Trier les produits en fonction de sortOrder avant de les filtrer par searchTerm(input de la recherche)



  const filteredPolos = sortedPolos.filter((polo) =>
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

  return (<div> 
    <div className="flex justify-end p-4">
    {/* //lier une étiquette descriptive à un élément de formulaire(select'sort') */}
       <label htmlFor="sort" className="mr-2">Trier </label>
       <select id="sort" value={sortOrder} onChange={(e) => handleSortChange(e.target.value)}
       //onChange déclenche la fonction handleSortChange lorsque l'utilisateur
       // sélectionne une nouvelle option e.target.value contient la nouvelle valeur sélectionnée.
        className="border px-2 py-1" > 
        <option value="croissant">Croissant</option>
       <option value="decroissant">Décroissant</option> 
       </select>
        </div>
        {/* Menu déroulant pour sélectionner l'ordre de tri (croissant ou décroissant). */}
  <div className=" pt-20 px-11 grid grid-cols-4 gap-8">{poloProduct}</div>
  </div>
  );
}
