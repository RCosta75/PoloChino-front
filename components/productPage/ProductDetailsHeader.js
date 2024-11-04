import React from "react";

export default function ProductDetailsHeader({ product }) {
  return (
    <div>
      <div>
        <h1 className="py-4 font-bold text-5xl">{product.name}</h1>
        <h1 className="py-4 text-3xl">Price: {product.price} €</h1>
        <h1 className="py-4 font-bold text-2xl">{product.marque}</h1>
      </div>
      <p>Matière : {product.matiere}</p>
      <p>Coupe : {product.coupe}</p>
      <p>Description :{product.description}</p>
    </div>
  );
}
