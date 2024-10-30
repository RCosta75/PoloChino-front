import React from "react";
import {  useSelector } from "react-redux";
import { totalBasket } from "../../reducers/cart";

export default function RightBasket() {

    const cartQuantity = useSelector(totalBasket);
  
return(
    <div className="w-1/2 h-screen  " >
    <h3 className="text-center text-xl py-20" >RESUME DE LA COMMANDE</h3>
        <div className="mx-20 mt-20
         text-xl">
            <div className="flex justify-between">
                <p>Valeur de la commande</p>
                <span>{cartQuantity} €</span>
            </div>
            <div className="flex pt-10 justify-between">
                <p>Livraison</p>
                <p>Gratuit</p>
            </div>
            <div className="flex mt-20 justify-between">
                <p>TOTAL</p>
                <p>{cartQuantity} €</p>
            </div>
        </div>
       
    </div>
  )
}