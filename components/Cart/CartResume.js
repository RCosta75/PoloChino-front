import React from "react";
import { useSelector } from "react-redux";


export default function CartResume() {

    const cartValue = useSelector((state) => state.cart.value);
  
    const itemsInBasket = cartValue.reduce((total, product) => {
        return (total += product.price*product.quantity)
      }, 0)
      
    
return(
    <div className="w-1/2 h-screen  " >
    <h3 className="text-center text-xl py-20" >RESUME DE LA COMMANDE</h3>
        <div className="mx-20 mt-20
         text-xl">
            <div className="flex justify-between">
                <p>Valeur de la commande</p>
                <span>{itemsInBasket} €</span>
            </div>
            <div className="flex pt-10 justify-between">
                <p>Livraison</p>
                <p>Gratuit</p>
            </div>
            <div className="flex mt-20 justify-between">
                <p>TOTAL</p>
                <p>{itemsInBasket} €</p>
            </div>
        </div>
       
    </div>
  )
}