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
    <div className="font-bold flex">
      {poloProduct}
      <p className="flex gap-5">
        <span> Quantité : {totalQuantity}</span>
        <span>Total: {totalPrice}</span>
      </p>
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
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-black bg-[#bfdbf7] border-1 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {totalQuantity}
          </div>
        </div>
      </Popover>
    </div>
  );
}
