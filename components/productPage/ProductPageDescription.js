import { useEffect, useState } from "react";

import { addToCart } from "../../reducers/cart";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import ColorsSelect from "./ColorsSelect";
import ProductDetailsHeader from "./ProductDetailsHeader";
import SizeSelect from "./SizeSelect";

export default function ProductPageDescription({ product }) {

  const [buttonPressed, setButtonPressed] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    if (buttonPressed) {
      setTimeout(() => {
        setButtonPressed(false);
      }, 100);
    }
  }, [buttonPressed]);

  const [taille, setTaille] = useState("");
  const [color, setColor] = useState("");

  const [errorColor, setErrorColor] = useState(false);
  const [errorSize, setErrorSize] = useState(false);
  const [bothError, setBothError] = useState(false);


  // permet de gerer que l'user a bien choisi une taille et une couleur avant d'envoyer le polo dans le panier
  const handleCart = () => {
    if (taille.length < 1 && color.length < 1) {
      setBothError(true)
    } else if (taille.length < 1) {
      setErrorSize(true);
      setErrorColor(false);
      setBothError(false)
    } else if (color.length < 1) {
      setErrorColor(true);
      setErrorSize(false);
      setBothError(false)
    } else {
      dispatch(addToCart({ ...product, quantity: 1, size: taille, color: color }));
      setErrorColor(false);
      setErrorSize(false);
      setBothError(false);
      setTaille("");
      setColor("");
    }
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
      <ProductDetailsHeader product={product} />
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
