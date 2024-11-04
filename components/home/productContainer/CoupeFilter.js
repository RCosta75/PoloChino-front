import React from "react";
import { useState, useEffect } from "react";

export default function CoupeFilter({ selectedCoupe, handleCoupeChange }) { 
     //etat et fonction  que l'on donne a productContainer
    
     const [poloData, setPoloData] = useState([]);

     useEffect(() => {
        fetch("http://localhost:3000/polos/get")
          .then((response) => response.json())
          .then((data) => {
            setPoloData(data.polos);
          });
      }, []);

      const coupeData = poloData.map((e, i) => e.marque)
      const coupe = coupeData.filter((e,i) => coupeData.indexOf(e) === i)


    return ( 
        <div className="flex justify-end p-4">
            <label htmlFor="coupe" className="mr-2"></label>
            <select id="coupe" value={selectedCoupe}
            onChange={(e) => handleCoupeChange(e.target.value)} 
            className="border px-2 py-1" >
            <option value="">Coupes</option>
            {coupe.map((e) => 
        <option value={e}>{e}</option>)}
            </select>
        </div>
              );
             }