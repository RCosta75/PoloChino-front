import React from "react";
import { useRouter } from "next/router";

export default function EmptyBasket() {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center py-20">
      <p className="text-gray-600 text-2xl mb-4">Votre panier est vide</p>
      <button 
        onClick={() => {router.push("/")}} 
        className="bg-gray-950 hover:py-1px-2 text-white font-bold py-3 px-6 rounded text-lg"
      >
        Poursuivre vos achats
      </button>
    </div>
  );
}
