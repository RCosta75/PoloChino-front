import React from "react";
import { useDispatch } from "react-redux";
import { addQuantity, suppQuantity } from "../../reducers/cart";

export default function PopOverBasket ({ polo }) {
  const dispatch = useDispatch();

  return (
    <div className="mx-auto max-w-2xl px-4" >
      <div className="flex items-center py-6">
        <img className="h-28 w-28 object-cover rounded-md " src={polo.image} />
        <div className="ml-4 flex-auto" >
        <div className="flex justify-between">
            <h4>{polo.name}</h4>
            <span>{(polo.price*polo.quantity).toFixed(2)} €</span>
        </div>
          <p>{polo.size}</p>
          <p>{polo.color}</p>
       <div>
       <div>


{/* INCREASE & DECREASE BUTTON */}

  <div className="flex items-center   rounded border border-gray-200">
    <button type="button" onClick={() => dispatch(suppQuantity(polo))} className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
      -
    </button>

    <span className="w-16 border-transparent text-center" >{polo.quantity}</span>

    <button type="button" onClick={() => dispatch(addQuantity(polo))} className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
      +
    </button>
  </div>
</div>
       </div>
     
        </div>   
      </div>
   
    </div>
  
    
  );
}

