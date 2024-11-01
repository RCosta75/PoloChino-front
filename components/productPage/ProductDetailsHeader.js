import React from "react";

export default function ProductDetailsHeader({
  name,
  price,
  marque,
  matiere,
  coupe,
  description,
}) {
  return (
    <div>
      <div>
        <h1 className="py-4 font-bold">{name}</h1>
        <h1 className="py-4">Price: {price} €</h1>
        <h1 className="py-4 font-bold">{marque}</h1>
      </div>
      <p>Matière : {matiere}</p>
      <p>Coupe : {coupe}</p>
      <p>Description :{description}</p>
    </div>
  );
}
