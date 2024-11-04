import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SortFilter from "./SortFilter";
import MaterialFilter from "./MaterielFilter";
import BrandFilter from "./BrandFilter";
import CoupeFilter from "./CoupeFilter";
// Les composants de filtre sont appelés dans le composant parent et passent les états et fonctions appropriés.

export default function ProductContainer({ searchTerm }) {
  const [poloData, setPoloData] = useState([]);
  const [likesData, setLikesData] = useState([]);
  //Filtrez les articles en fonction du terme de recherche dans ProductContainer
  const [sortOrder, setSortOrder] = useState(""); // Etat pour l'ordre de tri
  const [selectedMaterial, setSelectedMaterial] = useState(""); // État pour la matière sélectionnée
  const [selectedBrand, setSelectedBrand] = useState(""); // État pour la marque sélectionnée
  const [selectedCoupe, setSelectedCoupe] = useState(""); // État pour la coupe sélectionnée
  const user = useSelector((state) => state.user.value);
  const render = useSelector((state) => state.cart.render);

  useEffect(() => {
    // récupérer les données des produits au montage du composant.
    fetch("http://localhost:3000/polos/get")
      .then((response) => response.json())
      .then((data) => {
        setPoloData(data.polos);
      });
  }, []);

  // recupere les like et met a jour le coeur selon user.likes
  // envoi en props
  useEffect(() => {
    fetch(`http://localhost:3000/users/get/${user?.token}`)
      .then((response) => response.json())
      .then((data) => {
        setLikesData(data.likes);
      });
  }, [render]);

  const handleSortChange = (order) => {
    setSortOrder(order); //Met à jour l'état de l'ordre de tri lorsqu'on sélectionne un nouveau type de tri
  };

  const handleMaterialChange = (material) => {
    setSelectedMaterial(material);
  }; //Met à jour l'état de l'ordre de tri lorsqu'on sélectionne une nouvelle matiere

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
  }; // Met à jour l'état de l'ordre de tri lorsqu'on sélectionne une nouvelle marque

  const handleCoupeChange = (coupe) => {
    setSelectedCoupe(coupe);
  }; // Met à jour l'état de l'ordre de tri lorsqu'on sélectionne une nouvelle coupe

  const sortedPolos = [...poloData].sort((a, b) => {
    if (sortOrder === "croissant") {
      return a.price - b.price;
    } else if (sortOrder === "decroissant") {
      return b.price - a.price;
    }
    // Trie les produits selon l'ordre de tri sélectionné (croissant/decroissant)
    else {
      return 0;
    }
    //Il sert  de valeur par défaut si aucune des conditions précédentes
    // n'est remplie, évitant ainsi des erreurs potentielles.
  });

  const filteredPolos = sortedPolos.filter((polo) => {
    //Filtrage des articles en fonction du terme de recherche et affichage des résultats filtrés.
    // (polo.name && polo.name) pour vérifier l'existence du produit
    const matchesSearchTerm = 
    polo.name ? polo.name.toLowerCase().includes(searchTerm.toLowerCase()) : true;
    // Filtrage des articles en fonction du terme de recherche et des filtres sélectionnés
    // Filtrer par matière si sélectionnée
    const matchesMaterial = selectedMaterial
      ? polo.matiere === selectedMaterial
      : true;
    //Vérifie si la matière du produit (polo.matiere) correspond à la matière sélectionnée (selectedMaterial).
    //Si aucune matière n'est sélectionnée, renvoie true, signifiant que tous les produits sont inclus dans le filtrage.
    const matchesBrand = selectedBrand ? polo.marque === selectedBrand : true;
    const matchesCoupe = selectedCoupe ? polo.coupe === selectedCoupe : true;
    return matchesMaterial && matchesBrand && matchesCoupe && matchesSearchTerm;
    //Si matchesBradn et matchesMaterial et matchesCoupe sont tous vrais,
    // alors true est retourné et le produit est inclus dans les résultats filtrés.
  });

  const poloProduct = filteredPolos.map((polo, i) => {
    return (
      <div>
        <Card
          key={i}
          polo={polo}
          isLike={likesData?.some((e) => e === polo._id)} // props pour les likes
        />
      </div>
    );
  });

  return (
    <div>
      <div className="flex space-x-4 p-4 overflow-y-scroll scrollbar-none">
        <SortFilter sortOrder={sortOrder} handleSortChange={handleSortChange} />
        <MaterialFilter
          selectedMaterial={selectedMaterial}
          handleMaterialChange={handleMaterialChange}
        />
        <BrandFilter
          selectedBrand={selectedBrand}
          handleBrandChange={handleBrandChange}
        />
        <CoupeFilter
          selectedCoupe={selectedCoupe}
          handleCoupeChange={handleCoupeChange}
        />
      </div>
      {poloProduct.length > 0 ?  (
        <div className=" pt-20 px-11 grid md:grid-cols-4 sm:grid-cols-1 gap-8">
          {poloProduct}
        </div>
      ) : (
        <div>
          <p className=" text-center items-center text-xl">
            Aucun produit trouvé.
          </p>
        </div>
      )}
    </div>
  );
}
