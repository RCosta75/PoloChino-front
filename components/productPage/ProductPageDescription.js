import { useEffect, useState } from "react";

import { addToCart } from "../../reducers/cart";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import ColorsSelect from "./ColorsSelect";
import ProductDetailsHeader from "./ProductDetailsHeader";
import SizeSelect from "./SizeSelect";

export default function ProductPageDescription({
  name,
  price,
  marque,
  matiere,
  coupe,
  description,
}) {
  const [color, setColor] = useState("");
  const [buttonPressed, setButtonPressed] = useState(false);
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(
      addToCart({ ...product, quantity: 1, size: taille, color: color })
    );
  };

  useEffect(() => {
    if (buttonPressed) {
      setTimeout(() => {
        setButtonPressed(false);
      }, 300);
    }
  }, [buttonPressed]);

  return (
    <div className="w-1/3 pl-20 gap-10 text-xl  flex flex-col justify-center  ">
      <ProductDetailsHeader
        name={name}
        price={price}
        marque={marque}
        matiere={matiere}
        coupe={coupe}
        description={description}
      />
      <ColorsSelect color={color} setColor={setColor} />

      <SizeSelect />
      <button
        className={clsx(
          buttonPressed
            ? "bg-[#010203] text-[#bfdbf7]"
            : "bg-[#bfdbf7] text-[#010203]",
          " font-semibold rounded-md py-2 px-4 w-3/4 "
        )}
        onClick={() => {
          handleCart();
          setButtonPressed(true);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
