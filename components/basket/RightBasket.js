import React from "react";
import {  useSelector } from "react-redux";
import { totalBasket } from "../../reducers/cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCcMastercard, faCcVisa, faCcAmex, faCcPaypal} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";


export default function RightBasket() {

    const cartQuantity = useSelector(totalBasket);
    const router = useRouter();
   
  
return(
    <div>
    {cartQuantity > 0 ? (  
    <div className="w-1/2 h-screen  " >
    <h3 className="text-center text-lg py-20" >RESUME DE LA COMMANDE</h3>
        <div className="mx-10 mt-5">
            <div className="flex justify-between">
                <p>Valeur de la commande</p>
                <span>{cartQuantity} €</span>
            </div>
            <div className="flex text-base pt-5 justify-between">
                <p>Livraison</p>
                <p>Gratuit</p>
            </div>
            <div className="flex text-lg mt-10 justify-between">
                <p>TOTAL</p>
                <p>{cartQuantity} €</p>
            </div>
            <button className="block w-full rounded bg-black px-4 py-3 mt-10 text-lg font-medium text-white transition hover:scale-105" onClick={ ()=>{router.push("/orderform")}} > Procéder au paiement </button>
            

            <div>
                <h3 className="mt-10">NOUS ACCEPTONS</h3>
                <div className="mt-4 space-x-8 flex">
                <FontAwesomeIcon icon={faCcMastercard} size="2x"/>
                <FontAwesomeIcon icon={faCcVisa} style={{color: "#74C0FC",}} size="2x" />
                <FontAwesomeIcon icon={faCcAmex} size="2x"/>
                <FontAwesomeIcon icon={faCcPaypal} size="2x"/>
                </div>
                <h3 className="mt-10">LIVRAISON GRATUITE POUR LES COMMANDE DE PLUS DE 100€</h3>
                
            </div>
        </div>
       
    </div>) : (<></>)}
    </div>

   )}