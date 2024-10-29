import React from 'react';
import styles from '../styles/ProductPage.module.css'
import { addToCart } from "../reducers/cart";
import {useDispatch } from "react-redux";
import Suggestions from './Suggestions';
import { useRouter } from "next/router";





export default function ProductPage() {
    // Récupère les données du produit via des props.
    const dispatch = useDispatch()
    const router = useRouter(); 
    const { id, name, description, price, image } = router.query;
    //Récupère les données du produit depuis query

    const product = { id, name, description, price, image };
    

    const handleCart = () => {
        dispatch(addToCart({...product, quantity : 1}))
      }
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
        </div>
         <p>{product.description}</p> 

         <div>
         <h4>Couleurs disponible</h4>
         <div className={styles.colors}> 
            <div className={styles.colorrectanglebleu}></div> 
         <div className={styles.colorrectanglevert}></div>
          <div className={styles.colorrectanglejaune}></div> 
          </div>
         </div>
         <div>
            <h4>Size</h4>
            <div className={styles.sizes}>
                 <div className={styles.sizescontainer}>S</div>
                 <div className={styles.sizescontainer}>M</div>
                 <div className={styles.sizescontainer}>L</div>
                 <div className={styles.sizescontainer}>XL</div>
            </div>
            
         </div>
          <button className={styles.btn} onClick={() => handleCart()} >Add to Cart</button> 
          </div>
        </div>

         <Suggestions/>
         </div>
          );};


          

 
       
    