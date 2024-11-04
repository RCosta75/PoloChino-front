import React from "react";
import styles from "../../styles/ProductPage.module.css";
import { addToCart } from "../../reducers/cart";
import { useDispatch } from "react-redux";
import Suggestions from "./Suggestions";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Footer from "../Footer";
import clsx from "clsx";

export default function ProductPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [buttonPressed, setButtonPressed] = useState(false);
  const { _id, name, description, price, image, marque, coupe, matiere } = router.query;
  //Récupère les données du produit depuis query


  const product = { _id, name, description, price, image, marque, coupe, matiere };

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
  return (
    <div className={styles.all}>
      <div className={styles.product}>
        <div className={styles.left}>
          <div className={styles.imagecolumn}>
            <img src={product.image} alt={product.description} />
            <img src={product.image} alt={product.description} />
            <img src={product.image} alt={product.description} />
            <img src={product.image} alt={product.description} />
          </div>
          <div className={styles.imageprinc}>
            <img src={product.image} alt={product.description} />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.entete}>
            <h1>{product.name}</h1>
            <h1>Price: ${product.price}</h1>
            <h1>{product.marque}</h1>
          </div>
          <p>Matière : {product.matiere}</p>
          <p>Coupe : {product.coupe}</p>
          <p>{product.description}</p>

          <div>
          {bothError ? (
          <span className="text-red-600 text-lg">Choose a color & a size please !</span>
        ) : (
          <></>
        )}
          {errorColor ? (
          <span className="text-red-600 text-lg">Choose a color please !</span>
        ) : (
          <></>
        )}
            <h4>Colors :</h4>
            <div className={styles.colors}>
              <button onClick={() => setColor("Red")} className={color !== "Red" ? styles.colorrectanglerouge : styles.colorrectanglerougefocus}></button>
              <button onClick={() => setColor("Green")} className={color !== "Green" ? styles.colorrectanglevert : styles.colorrectanglevertfocus}></button>
              <button onClick={() => setColor("Yellow")} className={color !== "Yellow" ? styles.colorrectanglejaune : styles.colorrectanglejaunefocus }></button>
              <button onClick={() => setColor("Blue")} className={color !== "Blue" ? styles.colorrectanglebleu : styles.colorrectanglebleufocus}></button>
              <button onClick={() => setColor("Brown")} className={color !== "Brown" ? styles.colorrectanglemarron : styles.colorrectanglemarronfocus}></button>
            </div>
          </div>
          <div>
          {errorSize ? (
            <span className="text-red-600 text-lg">Choose a size please !</span>
          ) : (
            <></>
          )}
            <h4>Size :</h4>
            <div className={styles.sizes}>
              <button
                className={ taille === "S" ? styles.sizescontainerfocus : styles.sizescontainer}
                onClick={() => setTaille("S")}
              >
                S
              </button>
              <button
                className={taille === "M" ? styles.sizescontainerfocus : styles.sizescontainer}
                onClick={() => setTaille("M")}
              >
                M
              </button>
              <button
                className={taille === "L" ? styles.sizescontainerfocus : styles.sizescontainer}
                onClick={() => setTaille("L")}
              >
                L
              </button>
              <button
                className={taille === "XL" ? styles.sizescontainerfocus : styles.sizescontainer}
                onClick={() => setTaille("XL")}
              >
                XL
              </button>
            </div>
          </div>
          <button className={clsx(
            buttonPressed
              ? "bg-[#010203] text-[#bfdbf7]"
              : "bg-[#bfdbf7] text-[#010203]",
            " font-semibold rounded-md py-2 px-4 w-3/4 "
          )}
          onClick={() => {handleCart(); setButtonPressed(true)}}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="flex justify-between overflow-x-hidden w-full py-20">
      <div className="flex w-full overflow-scroll no-scrollbar [&>div]:flex-shrink-0 bg-stone-100">
        <Suggestions />
      </div>
      </div>
      <Footer/>
    </div>
  );
}
