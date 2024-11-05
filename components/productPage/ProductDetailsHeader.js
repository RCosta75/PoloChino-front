import React from "react";

export default function ProductDetailsHeader({ product }) {
  return (
    <div className="w-full">
      <div>
        <h1 className="py-1 font-bold text-3xl">{product.name}</h1>
        <h1 className="py-2 font-bold text-2xl">Price: {product.price} €</h1>
        <h1 className="py-2 font-bold text-xl">{product.marque}</h1>
      </div>
      <p className="font-bold">Matière : <span className="font-light">{product.matiere}</span></p>
      <p className="font-bold">Coupe : <span className="font-light">{product.coupe}</span></p>
      <p className="font-bold">Description : <span className="font-light">{product.description}</span></p>
    </div>
  );
}
