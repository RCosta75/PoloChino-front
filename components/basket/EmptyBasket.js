import React from "react";
import {useSelector } from "react-redux";

import { useRouter } from "next/router";


export default function LeftBasket() {
 
const router = useRouter();


  return (
    <div className="w-1/2">
    <div className="flex items-center justify-between mx-36 py-20 text-xl">
      
        <p>Vous n'avez aucun article</p>
        <button onClick={ ()=>{router.push("/")}}> Faut shop   </button>

    </div>
   
      
      
    </div>
  );
}









