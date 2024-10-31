import React from 'react';
import { useDispatch } from 'react-redux';
import { addQuantity, removeCart, suppQuantity } from '../../reducers/cart';
import { useState } from 'react';
import { useRouter } from 'next/router';


export default function LeftBasketDetails({ polo }) {
  const dispatch = useDispatch();
  const router = useRouter()
  const [selectedSize, setSelectedSize] = useState('M'); //taille par default
  const [selectedColor, setSelectedColor] = useState('White');//couleur par default
  const handleSizeChange = (size) => {
     setSelectedSize(size.target.value); }
     // utilise target.value pour obtenir la valeur sélectionnée
     
    const handleColorChange = (color) => {
      setSelectedColor(color.target.value); }
  //utilise target.value pour obtenir la couleur sélectionnée

  const handleImageClick = () => {
    router.push({ pathname: '/productpage',
     query: { _id: polo._id,
     name: polo.name,
     description: polo.description,
     price: polo.price,
     image: polo.image,
     marque: polo.marque,
     coupe : polo.coupe,
     matiere : polo.matiere
          },});
          };


  return (
    <div className="mx-20 px-4 py-6 ">
      <div className="flex items-center text-xl ">
        <img className="h-96 w-96 object-cover rounded-md" src={polo.image} alt={polo.name} onClick={() => handleImageClick()} />
        <div className="ml-10 mt-10 flex-auto ">
          <div className="flex-col justify-between">
            <h1>{polo.marque}</h1>
            <h4>{polo.name}</h4>
            <span>{(polo.price * polo.quantity).toFixed(2)} €</span>
          </div>

          <span className="py-2">Size :   </span>
          {!polo.size ? (
              <select value={selectedSize} onChange={handleSizeChange}
               className="px-4 py-2 border border-gray-200"> {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(
                size => ( <option key={size} value={size}>{size}</option>))}
                 </select>) : <span>{polo.size}</span>}
        
            <p>Color :
              {/* select = Élément conteneur pour le menu déroulant. */}
              {!polo.color ? (
            <select value={selectedColor} onChange={handleColorChange} 
            className="px-4 py-2 border border-gray-200">
               {['Blanc', 'Bleu', 'Vert', 'Jaune', 'Rouge'].map(
                color => ( <option key={color} value={color}>{color}</option> 
                ))} 
                </select>): '   '+  polo.color}</p>




          <div className="py-10">
            <div className="flex items-center w-40 rounded border border-gray-200 mb-10">
              <button
                type="button"
                onClick={() => dispatch(suppQuantity(polo))}
                className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
              >
                -
              </button>
              <span className="w-16 border-transparent text-center">{polo.quantity}</span>
              <button
                type="button"
                onClick={() => dispatch(addQuantity(polo))}
                className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
              >
                +
              </button>
            </div>
          <button className=" block w-full rounded bg-gray-900 px-4 py-3 text-lg font-medium text-white transition hover:scale-105"  onClick={()=> dispatch(removeCart(polo))}>Remove Article</button>
          </div>
        </div>
      </div>
    </div>
  );
}
