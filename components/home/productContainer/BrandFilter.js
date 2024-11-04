import React from "react";
import { useState, useEffect } from "react";


 export default function BrandFilter({ selectedBrand, handleBrandChange }) {
     //etat et fonction  que l'on donne a productContainer


     const [poloData, setPoloData] = useState([]);

     useEffect(() => {
        fetch("http://localhost:3000/polos/get")
          .then((response) => response.json())
          .then((data) => {
            setPoloData(data.polos);
          });
      }, []);

      const brandData = poloData.map((e, i) => e.marque)
      const brand = brandData.filter((e,i) => brandData.indexOf(e) === i)


     return ( 
     <div className="flex justify-end p-4">
        <label htmlFor="brand" className="mr-2"></label>
        <select id="brand" value={selectedBrand}
        onChange={(e) => handleBrandChange(e.target.value)}
        className="border px-1 py-1" >
        <option value="">Marque</option>
        {brand.map((e) => 
        <option value={e}>{e}</option>)}
        </select>
    </div>
          );
         }