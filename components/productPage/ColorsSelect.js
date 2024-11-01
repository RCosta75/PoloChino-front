import React from "react";
import styles from "../../styles/ProductPage.module.css";

export default function ColorsSelect({ color, setColor }) {
  return (
    <div>
      <h4>Colors :</h4>
      <div className={styles.colors}>
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
    </div>
  );
}
