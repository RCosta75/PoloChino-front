import React from "react";


export default function CoupeFilter({ selectedCoupe, handleCoupeChange }) { 
     //etat et fonction  que l'on donne a productContainer
    
    return ( 
        <div className="flex justify-end p-4">
            <label htmlFor="coupe" className="mr-2">Coupe :</label>
            <select id="coupe" value={selectedCoupe}
            onChange={(e) => handleCoupeChange(e.target.value)} 
            className="border px-2 py-1" >
            <option value="">Toutes les coupes</option>
            <option value="Regular">Regular</option>
            <option value="Slim">Slim</option>
            <option value="Relaxed">Relaxed</option>
            <option value="Oversize">Oversize</option>
            </select>
        </div>
              );
             }