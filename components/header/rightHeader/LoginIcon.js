import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../styles/Header.module.css";
import { logout } from "../../../reducers/user";

export default function LoginIcon() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user.value);

  const [showLogout, setShowLogout] = useState(false); // On ne l'affiche pas initialement

  //lorsque cette fonction est appelée, elle prend la valeur de searchInput qui représente
  //ce que l'utilisateur a tapé dans la barre de recherche
  // et met à jour searchTerm avec cette valeur.

  const handleLogout = () => {
    dispatch(logout());
    setShowLogout(false);
    router.push("/");
  };

  const redirectToLogin = () => {
    router.push("/login"); // Rediriger vers la page de connexion
  };

  const handleUserClick = () => {
    if (user.username) {
      setShowLogout(!showLogout); // Afficher/masquer le bouton de déconnexion si connecté
    } else {
      redirectToLogin(); // Rediriger vers la page de connexion si non connecté
    }
  };

  return (
    <div className="flex">
      <div className="cursor-pointer"><FontAwesomeIcon icon={faUser} onClick={handleUserClick} size="lg" /></div>

      {user.token && (
        <div className="relative inline-block pl-4 cursor-pointer">
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => router.push("/likes")}
            style={{ color: "#000000"}}
            size="lg"
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
  );
}
