import React from "react"; 


export default function MaterialFilter({ selectedMaterial, handleMaterialChange }) { 
     //etat et fonction  que l'on donne a productContainer
    
return ( 
<div className="flex justify-end p-4">
     <label htmlFor="material" className="mr-2">Matière :</label> 
     <select id="material" value={selectedMaterial}
      onChange={(e) => handleMaterialChange(e.target.value)} 
      className="border px-2 py-1" >
            <option value="">Toutes les matières</option>
            <option value="Coton">Coton</option>
            <option value="Polyester">Polyester</option>
            <option value="Lin">Lin</option>
            <option value="Coton bio">Coton bio</option>
            <option value="Coton stretch">Coton stretch</option>
            <option value="Coton et polyester">Coton et polyester</option>
            </select> 
 </div> 
 ); }
