import React from "react";

export default function ProductDetailsHeader({ product }) {
  return (
    <div>
      <div>
        <h1 className="py-4 font-bold">{product.name}</h1>
        <h1 className="py-4">Price: {product.price} €</h1>
        <h1 className="py-4 font-bold">{product.marque}</h1>
      </div>
      <p>Matière : {product.matiere}</p>
      <p>Coupe : {product.coupe}</p>
      <p>Description :{product.description}</p>
    </div>
  );
}
