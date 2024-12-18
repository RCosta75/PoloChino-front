import React from "react";
import styles from "../../styles/ProductPage.module.css";
import { useEffect, useState } from "react";
import { addToCart, chooseColor } from "../../reducers/cart";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export default function SizeColorSelect({ product }) {
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
      setBothError(true);
    } else if (taille.length < 1) {
      setErrorSize(true);
      setErrorColor(false);
      setBothError(false);
    } else if (color.length < 1) {
      setErrorColor(true);
      setErrorSize(false);
      setBothError(false);
    } else {
      toast.success("Added to cart");
      dispatch(
        addToCart({ ...product, quantity: 1, size: taille, color: color })
      );
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
    <div>
      {bothError ? (
        <span className="text-red-600 text-lg">
          Choose a color & a size please !
        </span>
      ) : (
        <div className="h-6"></div>
      )}
      {errorColor ? (
        <span className="text-red-600 text-lg">Choose a color please !</span>
      ) : (
        <div className="h-6"></div>
      )}
      <h4>Colors :</h4>
      <div className={styles.colors}>
        <button
          onClick={() => {setColor("Red"), dispatch(chooseColor("Red"))}}
          className={
            color !== "Red"
              ? styles.colorrectanglerouge
              : styles.colorrectanglerougefocus
          }
        ></button>
        <button
          onClick={() => {setColor("Green"), dispatch(chooseColor("Green"))}}
          className={
            color !== "Green"
              ? styles.colorrectanglevert
              : styles.colorrectanglevertfocus
          }
        ></button>
        <button
          onClick={() => {setColor("Yellow"), dispatch(chooseColor("Yellow"))}}
          className={
            color !== "Yellow"
              ? styles.colorrectanglejaune
              : styles.colorrectanglejaunefocus
          }
        ></button>
        <button
          onClick={() => {setColor("Blue"), dispatch(chooseColor("Blue"))}}
          className={
            color !== "Blue"
              ? styles.colorrectanglebleu
              : styles.colorrectanglebleufocus
          }
        ></button>
        <button
          onClick={() => {setColor("Brown"), dispatch(chooseColor("Brown"))}}
          className={
            color !== "Brown"
              ? styles.colorrectanglemarron
              : styles.colorrectanglemarronfocus
          }
        ></button>
                <button
          onClick={() => {setColor("White") , dispatch(chooseColor("White"))}}
          className={
            color !== "White"
              ? styles.colorrectangleblanc
              : styles.colorrectangleblancfocus
          }
        ></button>
      </div>

      <div>
        {errorSize ? (
          <span className="text-red-600 text-lg">Choose a size please !</span>
        ) : (
          <div className="h-6"></div>
        )}
        <h4>Size :</h4>
        <div className={styles.sizes}>
          <button
            className={
              taille === "S"
                ? styles.sizescontainerfocus
                : styles.sizescontainer
            }
            onClick={() => setTaille("S")}
          >
            S
          </button>
          <button
            className={
              taille === "M"
                ? styles.sizescontainerfocus
                : styles.sizescontainer
            }
            onClick={() => setTaille("M")}
          >
            M
          </button>
          <button
            className={
              taille === "L"
                ? styles.sizescontainerfocus
                : styles.sizescontainer
            }
            onClick={() => setTaille("L")}
          >
            L
          </button>
          <button
            className={
              taille === "XL"
                ? styles.sizescontainerfocus
                : styles.sizescontainer
            }
            onClick={() => setTaille("XL")}
          >
            XL
          </button>
        </div>
      </div>
      <button
        className={clsx(
          !buttonPressed
            ? "bg-[#010203] text-stone-100"
            : "bg-[#bfdbf7] text-[#010203]",
          " rounded-md py-2 px-4 w-96 mt-5 "
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
