import { useRouter } from "next/router";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchIcon({ setSearchTerm }) {
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false); // On ne l'affiche pas initialement
  const [searchInput, setSearchInput] = useState("");

  const toggleSearch = () => {
    setShowSearch(!showSearch); // Afficher/masquer l'input au clic
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
      setSearchInput("");
    }
  };

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  return (
    <div>
      {/* si l'on est pas dans la page home l'icone et l'input ne s'affichent pas */}
      {router.pathname === "/" && (
        <>
          {showSearch && (
            <input
              type="text"
              placeholder="Search"
              onKeyDown={handleKeyDown}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          )}
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={toggleSearch}
            size="lg"
            className="cursor-pointer"
          />
        </>
      )}
    </div>
  );
}
