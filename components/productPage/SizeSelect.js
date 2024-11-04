import React, { useState } from "react";
import styles from "../../styles/ProductPage.module.css";

export default function SizeSelect() {
  const [taille, setTaille] = useState("");

  return (
    <div>
      <h4>Size :</h4>
      <div className={styles.sizes}>
        <button
          className={
            taille === "S" ? styles.sizescontainerfocus : styles.sizescontainer
          }
          onClick={() => setTaille("S")}
        >
          S
        </button>
        <button
          className={
            taille === "M" ? styles.sizescontainerfocus : styles.sizescontainer
          }
          onClick={() => setTaille("M")}
        >
          M
        </button>
        <button
          className={
            taille === "L" ? styles.sizescontainerfocus : styles.sizescontainer
          }
          onClick={() => setTaille("L")}
        >
          L
        </button>
        <button
          className={
            taille === "XL" ? styles.sizescontainerfocus : styles.sizescontainer
          }
          onClick={() => setTaille("XL")}
        >
          XL
        </button>
      </div>
    </div>
  );
}
