import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../reducers/cart";
import LeftBasketDetails from "./LeftBasketDetails";

export default function LeftBasket() {
  const dispatch = useDispatch();

  const carto = useSelector((state) => state.cart.value);

  const poloProduct = carto?.map((polo, i) => {
    return <LeftBasketDetails key={i} polo={polo} />;
  });

  return (
    <div className="w-1/2 pt-10  ">
      <div className="flex border-b-2 ml-20  mt-20 pb-14 text-xl">
        <div className="flex items-center w-full ml-4 mr-28 justify-between">
          <h1> CART ARTICLES</h1>
          <button
            className=" block  rounded bg-gray-900 px-4 py-3 font-medium text-white transition hover:scale-105"
            onClick={() => dispatch(clearCart())}
          >
            CLEAR CART
          </button>
        </div>
      </div>
      <div>{poloProduct}</div>
    </div>
  );
}
