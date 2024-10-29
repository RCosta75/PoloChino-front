import React from "react";
import styles from "../styles/Cart.module.css";
import CartCard from "./CartCard";


import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../reducers/cart";

export default function CartContainer() {

  const dispatch = useDispatch()

  const carto = useSelector((state) => state.cart.value);

  const poloProduct = carto?.map((polo, i) => {
    return (
          <CartCard key={i} polo={polo} />
    );
  });


  return (
    <div className={styles.container}>
      <h3 className={styles.title}>ARTICLE DU PANIER <button className={styles.button} onClick={() => dispatch(clearCart())}>CLEAR CART</button></h3>
      <div>
        {poloProduct}
      </div>
    </div>
  );
}
