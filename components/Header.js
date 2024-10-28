import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { logout } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(state => state.user.value);
  const [showLogout, setShowLogout] = useState(false); // On ne l'affiche pas initialement
  const [showSearch, setShowSearch] = useState(false); // On ne l'affiche pas initialement

  const handleLogout = () => {
    dispatch(logout());
    setShowLogout(false);
  };

  const redirectToLogin = () => {
    router.push('/login'); // Rediriger vers la page de connexion
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
 
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src='pol-ho-high-resolution-logo-transparent(2).png' alt='logo' />
        <span>Shop</span>
        <span>About</span>
      </div>
      <div className={styles.right}>
        {showSearch && <input type="text" placeholder="Search" className={styles.searchInput} />}
        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={toggleSearch} />
        <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faUser} onClick={handleUserClick} />
         
          
          {showLogout && (
           <div className={styles.btn}>
             <button className={styles.log} onClick={handleLogout}>Logout</button>
             </div>
          )}
       
      </div>
    </header>
  );
}

export default Header;