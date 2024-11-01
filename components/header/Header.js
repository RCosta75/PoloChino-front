import styles from "../../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faMagnifyingGlass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { logout } from "../../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Popover } from "antd";
import PopOverBasket from "./PopOverBasket";
import { totalBasket, totalQuantityBasket } from "../../reducers/cart";



function Header({ setSearchTerm, handleReset }) {
  //Passez le terme de recherche au composant Header.
  //Passez la fonction handleReset  a header
  
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user.value);
  const cart = useSelector((state) => state.cart.value);
  const [showLogout, setShowLogout] = useState(false); // On ne l'affiche pas initialement
  const [showSearch, setShowSearch] = useState(false); // On ne l'affiche pas initialement
  const [searchInput, setSearchInput] = useState("");

  const totalPrice = useSelector(totalBasket);
  const totalQuantity = useSelector(totalQuantityBasket)
  
  

  const poloProduct = cart?.map((polo, i) => {
    return <PopOverBasket key={i} polo={polo}/>;
  });

  const popoverContent = (
    <div className={styles.popoverContent}>{poloProduct} <p className={styles.total}> <span> Quantité : {totalQuantity}</span><span>Total: {totalPrice}</span></p>  </div>
  );

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };



  //lorsque cette fonction est appelée, elle prend la valeur de searchInput qui représente  
  //ce que l'utilisateur a tapé dans la barre de recherche
  // et met à jour searchTerm avec cette valeur.

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
      setSearchInput('');
    }
  };




  const handleLogout = () => {
    dispatch(logout());
    setShowLogout(false);
    router.push("/")
  };

  const redirectToLogin = () => {
    router.push("/login"); // Rediriger vers la page de connexion
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch); // Afficher/masquer l'input au clic
  };

  const handleUserClick = () => {
    if (user.username) {
      setShowLogout(!showLogout); // Afficher/masquer le bouton de déconnexion si connecté
    } else {
      redirectToLogin(); // Rediriger vers la page de connexion si non connecté
    }
  };



  const res = () => {
    setSearchInput('');
    handleReset();
   router.push("/");
     }

  return (
    <header className={styles.header}>
      <div className={styles.left}>
       <img src="poloLogo.png" alt="logo" onClick={res} sizes="2xl"/>
       {/* Rediriger vers la page d'accueil (router.push("/")).
       Appeler la fonction handleReset pour réinitialiser les états. */}
         {router.pathname === "/" && (
        <span onClick={() => document.getElementById("products").scrollIntoView({ behavior: 'smooth' })}>Shop</span>)}
        <span>About</span>
      </div>
    
      <div className={styles.right}>
        {/* si l'on est pas dans la page home l'icone et l'input ne s'affichent pas */}
      {router.pathname === "/" && (
         <> {showSearch && ( 
         <input type="text" placeholder="Search"
          className={styles.searchInput}
           onKeyDown={handleKeyDown} 
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} /> )}
           <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.rightIcon } onClick={toggleSearch} size="lg"/>
            </> )}
       
            <Popover
  placement="bottom"
  title="My Cart"
  content={popoverContent}
>
  <div className="relative inline-block">
    <FontAwesomeIcon
      icon={faCartShopping}
      onClick={() => router.push("/basket")}
      size="lg"
    />
    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-black bg-[#bfdbf7] border-1 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
      {poloProduct.length}
    </div>
  </div>
</Popover>
        

        <FontAwesomeIcon icon={faUser} className={styles.rightIcon } onClick={handleUserClick} size="lg"/>
        
        {user.token && (
    <div className="relative inline-block">
            <FontAwesomeIcon
              icon={faHeart}
              onClick={() => router.push("/likes")}
              style={{ color: "#000000", cursor: "pointer" }}
            />
      </div>
          
        )}

        {showLogout && (
          <div className={styles.btn}>
            <button className={styles.log} onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

