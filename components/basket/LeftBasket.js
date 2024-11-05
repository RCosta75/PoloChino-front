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
    <div className="w-1/2 pt-10">
      <div className="flex items-center justify-between mx-36 py-20 text-xl">
        <h1> CART ARTICLES</h1>
        <button
          className=" block  rounded bg-gray-900 px-4 py-3 font-medium text-white transition hover:scale-105"
          onClick={() => dispatch(clearCart())}
        >
          CLEAR CART
        </button>
      </div>
      <div>{poloProduct}</div>
    </div>
  );
}
