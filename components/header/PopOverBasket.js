import React from "react";
import { useDispatch } from "react-redux";
import { addQuantity, suppQuantity } from "../../reducers/cart";

export default function PopOverBasket({ polo }) {
  const dispatch = useDispatch();

  return (
    <div className="mx-auto max-w-2xl px-4 h-full ">
      <div className="flex items-center py-6">
        <img className="h-28 w-28 object-cover rounded-md " src={polo.image} />
        <div className="ml-4 flex-auto">
          <h1 className="mt-1.5 text-lg font-semibold text-gray-900">
            {polo.marque}
          </h1>
          <div className="flex justify-between">
            <h4>{polo.name}</h4>
          </div>
          {polo.size && <p>Size : {polo.size}</p>}
          <div className="flex justify-between">
          {polo.color && <p>Color : {polo.color}</p>}
          <p>{(polo.price * polo.quantity).toFixed(2)} €</p>
          </div>
          <div>
            <div>
              {/* INCREASE & DECREASE BUTTON */}

              <div className="flex items-center   rounded border border-gray-200">
                <button
                  type="button"
                  onClick={() => dispatch(suppQuantity(polo))}
                  className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                >
                  -
                </button>

                <span className="w-16 border-transparent text-center">
                  {polo.quantity}
                </span>

                <button
                  type="button"
                  onClick={() => dispatch(addQuantity(polo))}
                  className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                >
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
