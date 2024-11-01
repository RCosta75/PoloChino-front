import React from "react";


 export default function BrandFilter({ selectedBrand, handleBrandChange }) {
     //etat et fonction  que l'on donne a productContainer
     return ( 
     <div className="flex justify-end p-4">
        <label htmlFor="brand" className="mr-2">Marque :</label>
        <select id="brand" value={selectedBrand}
        onChange={(e) => handleBrandChange(e.target.value)}
        className="border px-2 py-1" >
        <option value="">Toutes les marques</option>
        <option value="Lacoste">Lacoste</option>
        <option value="Ralph Lauren">Ralph Lauren</option>
        <option value="Adidas">Adidas</option>
        <option value="Nike">Nike</option>
        <option value="Hugo Boss">Hugo Boss</option> 
        <option value="Tommy Hilfiger">Tommy Hilfiger</option>
        <option value="Levi's">Levi's</option>
        <option value="Fred Perry">Fred Perry</option>
        <option value="Uniqlo">Uniqlo</option>
        <option value="H&M">H&M</option>
        <option value="Champion">Champion</option>
        <option value="Tommy Jeans">Tommy Jeans</option>
        <option value="Calvin Klein">Calvin Klein</option>
        <option value="Supreme">Supreme</option>
        <option value="Ted Baker">Ted Baker</option> 
        <option value="J.Crew">J.Crew</option>
        <option value="Under Armour">Under Armour</option>
        <option value="Massimo Dutti">Massimo Dutti</option>
        <option value="Puma">Puma</option>
        <option value="Dolce & Gabbana">Dolce & Gabbana</option>
        </select>
    </div>
          );
         }