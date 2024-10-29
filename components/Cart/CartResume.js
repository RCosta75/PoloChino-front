import React from "react";
import styles from "../../styles/Cart.module.css";
import { useSelector } from "react-redux";



export default function CartResume() {

    const carto = useSelector((state) => state.cart.value);



return(
    <div className={styles.resume}>
    <h3 className={styles.title}>RESUME DE LA COMMANDE</h3>
        <div>
            <div className={styles.modalite}><span>Valeur de la commande</span><span>280</span></div>
            <div className={styles.modalite}><span>Livraison</span><span>Gratuit</span></div>
        </div>
        <div className={styles.modalite}><span>TOTAL</span><span>280 $</span></div>
    </div>
  )
}