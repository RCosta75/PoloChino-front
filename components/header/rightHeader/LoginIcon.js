import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../../../reducers/user";
import { toast } from "sonner";

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
    toast("See you soon");
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
      <div className="cursor-pointer">
        <FontAwesomeIcon icon={faUser} onClick={handleUserClick} size="lg" />
      </div>

      {user.token && (
        <div className="relative inline-block pl-4 cursor-pointer">
          <FontAwesomeIcon
            icon={faHeart}
            onClick={() => router.push("/likes")}
            style={{ color: "#000000" }}
            size="lg"
          />
        </div>
      )}

      {showLogout && (
        <div className="absolute border border-gray rounded-md flex flex-col bg-white top-16 right-16">
          <button
            className="p-4 border-b-2 hover:bg-slate-200 hover:border-gray-100"
            onClick={() => router.push("/allorders")}
          >
            Suivi des commandes
          </button>

          <button
            className="p-4 hover:bg-slate-200  hover:border-b-gray-100 "
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
