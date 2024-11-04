import React from "react";
import styles from "../../styles/ProductPage.module.css";
import { addToCart } from "../../reducers/cart";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import clsx from "clsx";


// meme principe que productPage, sans la description, les review ni les suggestions etc ...
export default function ModalProduct({ polo, setIsModalOpen, isModalOpen }) {
  const dispatch = useDispatch();
  const [buttonPressed, setButtonPressed] = useState(false);
  //Récupère les données du produit depuis query

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
      dispatch(addToCart({ ...polo, quantity: 1, size: taille, color: color }));
      setErrorColor(false);
      setErrorSize(false);
      setBothError(false);
      setIsModalOpen(false);
      setTaille("");
      setColor("");
    }
  };
  return (
    <div className="flex justify-center items-center bg-slate-50 h-full">
      <div className="flex w-1/2">
        <img className="max-h-96" src={polo.image} alt={polo.description} />
      </div>

      <div className="flex flex-col w-1/2 h-full justify-center ml-6 gap-5">
        <h1 className="font-semibold text-5xl">{polo.name}</h1>
        <h1 className="font-semibold text-3xl">{polo.marque}</h1>  
        <h1 className="font-semibold text-2xl">Price: {polo.price}€</h1>

        {bothError ? (
          <p className="text-red-600">Choose a color & a size please !</p>
        ) : (
          <></>
        )}
        {errorColor ? (
          <p className="text-red-600">Choose a color please !</p>
        ) : (
          <></>
        )}
        <div className=" flex justify-between">
          <h4 className="font-semibold text-xl">Colors :</h4>
          <button
            onClick={() => setColor("Red")}
            className={
              color !== "Red"
                ? styles.colorrectanglerouge
                : styles.colorrectanglerougefocus
            }
          ></button>
          <button
            onClick={() => setColor("Green")}
            className={
              color !== "Green"
                ? styles.colorrectanglevert
                : styles.colorrectanglevertfocus
            }
          ></button>
          <button
            onClick={() => setColor("Yellow")}
            className={
              color !== "Yellow"
                ? styles.colorrectanglejaune
                : styles.colorrectanglejaunefocus
            }
          ></button>
          <button
            onClick={() => setColor("Blue")}
            className={
              color !== "Blue"
                ? styles.colorrectanglebleu
                : styles.colorrectanglebleufocus
            }
          ></button>
          <button
            onClick={() => setColor("Brown")}
            className={
              color !== "Brown"
                ? styles.colorrectanglemarron
                : styles.colorrectanglemarronfocus
            }
          ></button>
        </div>
        <div>
          {errorSize ? (
            <p className="text-red-600">Choose a size please !</p>
          ) : (
            <></>
          )}
          <div className={styles.sizes}>
            <h4 className="font-semibold text-xl pr-2">Sizes :</h4>
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
        <div className="justify-center flex">
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
      </div>
    </div>
  );
}
