import React from "react";



export default function SortFilter({ sortOrder, handleSortChange }) {
    //etat et fonction  que l'on donne a product
    
    return ( <div className="flex justify-end p-4">
                <label htmlFor="sort" className="mr-14">Trier par :</label>
                <select id="sort" value={sortOrder} 
                onChange={(e) => handleSortChange(e.target.value)} 
                className="border px-2 py-1" >
                <option value="Prix">Prix</option>
                <option value="croissant">Prix - Croissant</option>
                <option value="decroissant">Prix - Décroissant</option>
                </select>
             </div> 
             ); }









