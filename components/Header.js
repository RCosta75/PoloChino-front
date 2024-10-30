import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faMagnifyingGlass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { logout } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Popover } from "antd";
import CartCard from "./Cart/CartCard";

function Header({ setSearchTerm, handleReset }) {
  //Passez le terme de recherche et la fonction de mise à jour de l'état de recherche au composant Header.
  //Passez handleReset en props.

  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user.value);
  const cart = useSelector((state) => state.cart.value);
  const [showLogout, setShowLogout] = useState(false); // On ne l'affiche pas initialement
  const [showSearch, setShowSearch] = useState(false); // On ne l'affiche pas initialement
  const [searchInput, setSearchInput] = useState("");

  

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
      setSearchInput('');
    }
  };



  const poloProduct = cart?.map((polo, i) => {
    return <CartCard key={i} polo={polo}/>;
  });

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

  const popoverContent = (
    <div className={styles.popoverContent}>{poloProduct}</div>
  );
  

  return (
    <header className={styles.header}>
      <div className={styles.left}>
       <img src="poloLogo.png" alt="logo" onClick={() => {router.push("/"); handleReset()}} />
       {/* Rediriger vers la page d'accueil (router.push("/")).
       Appeler la fonction handleReset pour réinitialiser les états. */}
        <span onClick={() => document.getElementById("products").scrollIntoView({ behavior: 'smooth' })}>Shop</span>
        <span>About</span>
      </div>
    
      <div className={styles.right}>
     
        {showSearch && (
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
            onKeyDown={handleKeyDown}
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        )}
       
        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.rightIcon } onClick={toggleSearch} />
        
       

        <Popover
          placement="bottom"
          title="My Cart"
          content={popoverContent}
        >
          <FontAwesomeIcon className={styles.rightIcon }
            icon={faCartShopping}
            onClick={() => router.push("/cart")}
          />
        </Popover>

        <FontAwesomeIcon icon={faUser} className={styles.rightIcon } onClick={handleUserClick} />
        
        {user.token && (
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => router.push("/likes")}
            style={{ color: "#000000", cursor: "pointer" }}
          />
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
