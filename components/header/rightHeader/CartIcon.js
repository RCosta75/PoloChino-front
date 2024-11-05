import React from "react";
import { Popover } from "antd";
import { useSelector } from "react-redux";
import { totalBasket, totalQuantityBasket } from "../../../reducers/cart";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PopOverBasket from "../PopOverBasket";
import { useRouter } from "next/router";

export default function CartIcon() {
  const router = useRouter();
  const cart = useSelector((state) => state.cart.value);
  const totalPrice = useSelector(totalBasket);
  const totalQuantity = useSelector(totalQuantityBasket);

  const poloProduct = cart?.map((polo, i) => {
    return <PopOverBasket key={i} polo={polo} />;
  });

  const popoverContent = (
    <div className="font-bold">
      {poloProduct}
      <p className="flex flex-row justify-between">
        <span> Quantité : {totalQuantity}</span>
        <span>Total: {totalPrice}</span>
      </p>
      <div className="flex justify-center">
        <button
          onClick={() => handleClick()}
          className="w-full rounded mt-4  bg-[#001021] p-2 text-sm text-stone-100 transition hover:scale-105"
        >
          Go To Cart
        </button>
      </div>
    </div>
  );

  const handleClick = () => {
    if (poloProduct.length > 0) {
      router.push("/basket");
    } else {
      router.push("/emptybasket");
    }
  };

  return (
    <div>
      <Popover placement="bottom" title="My Cart" content={popoverContent}>
        <div className="relative inline-block cursor-pointer">
          <FontAwesomeIcon
            icon={faCartShopping}
            onClick={() => handleClick()}
            size="lg"
          />
          <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-black bg-[#bfdbf7] border-1 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {totalQuantity}
          </div>
        </div>
      </Popover>
    </div>
  );
}
