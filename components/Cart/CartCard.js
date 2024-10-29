import React from "react";
import styles from "../../styles/Cart.module.css";

import { useDispatch } from "react-redux";
import { addQuantity, suppQuantity, removeCart } from "../../reducers/cart";

export default function CartCard({ polo }) {
  const dispatch = useDispatch();

  return (
    <div className={styles.cardcontainer}>
      <img className={styles.cardimg} src={polo.image} />
      <div className={styles.card}>
        <h4>{polo.name}</h4>
        <span>{polo.price}</span>
        <span>Taille : 52</span>
        <span>{polo.color}</span>
        <div className={styles.quant}>
          <span>Quantité</span>
          <button onClick={() => dispatch(suppQuantity(polo._id))}>-</button>
          <span>{polo.quantity}</span>
          <button onClick={() => dispatch(addQuantity(polo._id))}>+</button>
        </div>
      </div>
      <div className={styles.droite}>
        <button onClick={() => dispatch(removeCart(polo._id))}>X</button>
        <p>{polo.price * polo.quantity}</p>
      </div>
    </div>
  );
}
