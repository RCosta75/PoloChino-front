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
  const username = useSelector(state => state.user.value.username);
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
    if (username) {
      setShowLogout(!showLogout); // Afficher/masquer le bouton de déconnexion si connecté
    } else {
      redirectToLogin(); // Rediriger vers la page de connexion si non connecté
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <img src='polo-logo.png' alt='logo' />
        <span>Shop</span>
        <span>About</span>
      </div>
      <div className={styles.right}>
        {showSearch && <input type="text" placeholder="Search" className={styles.searchInput} />}
        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={toggleSearch} />
        <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faUser} onClick={handleUserClick} />
          {username && <span>{username}</span>}
          {showLogout && (
            <button onClick={handleLogout}>Logout</button>
          )}
       
      </div>
    </header>
  );
}

export default Header;