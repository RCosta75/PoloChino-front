import React from "react"; 
import { useState, useEffect } from "react";


export default function MaterialFilter({ selectedMaterial, handleMaterialChange }) { 
     //etat et fonction  que l'on donne a productContainer
    
     const [poloData, setPoloData] = useState([]);

     useEffect(() => {
          fetch("http://localhost:3000/polos/get")
            .then((response) => response.json())
            .then((data) => {
              setPoloData(data.polos);
            });
        }, []);

     const materialData = poloData.map((e) => e.matiere)
     const material = materialData.filter((e,i) => materialData.indexOf(e) === i)

return ( 
<div className="flex justify-end p-4">
     <label htmlFor="material" className="mr-2"></label> 
     <select id="material" value={selectedMaterial}
      onChange={(e) => handleMaterialChange(e.target.value)} 
      className="border px-2 py-1" >
            <option value="">Matière</option>
            {material.map((e) => 
            <option value={e}>{e}</option>)}
            </select> 
 </div> 
 ); }
