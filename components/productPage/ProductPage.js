import React from "react";
import styles from "../../styles/ProductPage.module.css";
import { addToCart } from "../../reducers/cart";
import { useDispatch } from "react-redux";
import Suggestions from "./Suggestions";
import { useRouter } from "next/router";
import { useState } from "react";
import Footer from "../Footer";

export default function ProductPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { _id, name, description, price, image, marque, coupe, matiere } = router.query;
  //Récupère les données du produit depuis query

  const product = { _id, name, description, price, image, marque, coupe, matiere };

  const [taille, setTaille] = useState("");
  const [color, setColor] = useState("");

  const handleCart = () => {
    dispatch(addToCart({ ...product, quantity: 1, size: taille, color : color }));
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
            <h4>Colors :</h4>
            <div className={styles.colors}>
              <button onClick={() => setColor("Red")} className={styles.colorrectanglebleu}></button>
              <button onClick={() => setColor("Green")} className={styles.colorrectanglevert}></button>
              <button onClick={() => setColor("Yellow")} className={styles.colorrectanglejaune}></button>
              <button onClick={() => setColor("White")} className={styles.colorrectangleblanc}></button>
              <button onClick={() => setColor("Black")} className={styles.colorrectanglenoir}></button>
            </div>
          </div>
          <div>
            <h4>Size :</h4>
            <div className={styles.sizes}>
              <button
                className={styles.sizescontainer}
                onClick={() => setTaille("S")}
              >
                S
              </button>
              <button
                className={styles.sizescontainer}
                onClick={() => setTaille("M")}
              >
                M
              </button>
              <button
                className={styles.sizescontainer}
                onClick={() => setTaille("L")}
              >
                L
              </button>
              <button
                className={styles.sizescontainer}
                onClick={() => setTaille("XL")}
              >
                XL
              </button>
            </div>
          </div>
          <button className={styles.btn} onClick={() => handleCart()}>
            Add to Cart
          </button>
        </div>
      </div>

      <div className="flex justify-between overflow-x-hidden w-full py-20">
      <div className="flex w-full overflow-scroll [&>div]:flex-shrink-0 bg-stone-100">
        <Suggestions/>
      </div>
      </div>
      <Footer/>
    </div>
  );
}
