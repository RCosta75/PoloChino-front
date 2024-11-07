import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SortFilter from "./SortFilter";
import MaterialFilter from "./MaterielFilter";
import BrandFilter from "./BrandFilter";
import CoupeFilter from "./CoupeFilter";
import ResetFilter from "./ResetFilter";
import { useRouter } from "next/router";
// Les composants de filtre sont appelés dans le composant parent et passent les états et fonctions appropriés.

export default function ProductContainer({ searchTerm, reset }) {
  //reset comme un argument, pour surveiller les changements de sa valeur dans useEffect
  // et réinitialiser les filtres en conséquence.
  const [poloData, setPoloData] = useState([]);
  const [likesData, setLikesData] = useState([]);
  //Filtrez les articles en fonction du terme de recherche dans ProductContainer
  const [sortOrder, setSortOrder] = useState(""); // Etat pour l'ordre de tri
  const [selectedMaterial, setSelectedMaterial] = useState(""); // État pour la matière sélectionnée
  const [selectedBrand, setSelectedBrand] = useState(""); // État pour la marque sélectionnée
  const [selectedCoupe, setSelectedCoupe] = useState(""); // État pour la coupe sélectionnée
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const user = useSelector((state) => state.user.value);
  const render = useSelector((state) => state.cart.render);
  const router = useRouter();

  const [index, setIndex] = useState(16);

  useEffect(() => {
    // récupérer les données des produits au montage du composant.
    fetch("https://polo-chino-back.vercel.app/polos/get")
      .then((response) => response.json())
      .then((data) => {
        setPoloData(data.polos);
      });
  }, [render]);

  // recupere les like et met a jour le coeur selon user.likes
  // envoi en props
  useEffect(() => {
    fetch(`https://polo-chino-back.vercel.app/users/get/${user?.token}`)
      .then((response) => response.json())
      .then((data) => {
        setLikesData(data.likes);
      });
  }, [render]);

  useEffect(() => {
    setSortOrder("");
    setSelectedMaterial("");
    setSelectedBrand("");
    setSelectedCoupe("");
  }, [reset]); // s'assurer que chaque fois que la variable reset change, l'état des filtres et de l'ordre de tri est réinitialisé.

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

  const handleResetFilters = () => {
    setSortOrder("");
    setSelectedMaterial("");
    setSelectedBrand("");
    setSelectedCoupe("");
  };

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
    const matchesSearchTerm = polo.name
      ? polo.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
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
    while (i < index) {
      return (
        <div>
          <Card
            key={i}
            polo={polo}
            isLike={likesData?.some((e) => e === polo._id)} // props pour les likes
          />
        </div>
      );
    }
  });

  return (
    <div className="mb-20">
      <div className="flex justify-center mt-12 p-4 items-center overflow-y-scroll scrollbar-none">
        <button
          className="bg-[#010203] w-40 rounded-lg h-8 flex justify-center items-center text-stone-100 hover:bg-white-600 font-bold  hover:text-white pr-50"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          {!isFilterOpen ? "Open Filters" : "Close Filters"}
        </button>

        {isFilterOpen ? (
          <div className="flex justify-center p-4 h-8 items-center scrollbar-none">
            <SortFilter
              sortOrder={sortOrder}
              handleSortChange={handleSortChange}
            />
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
            <ResetFilter handleResetFilters={handleResetFilters} />
          </div>
        ) : (
          <></>
        )}
      </div>
      {poloProduct.length > 0 ? (
        <div className=" pt-20 px-11 grid md:grid-cols-4 sm:grid-cols-1 gap-8">
          {poloProduct}
        </div>
      ) : (
        <main className="relative isolate min-h-full">
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-44 lg:px-8">
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight  sm:text-7xl">
              Articles not found
            </h1>

            <div className="mt-20 flex justify-center">
              <button
                onClick={() => {
                  router.push("/");
                }}
                className="bg-gray-950 p-4  motion-translate-x-in-[0%] motion-ease-out-cubic motion-duration-[1.50s] motion-translate-y-in-[100%] absolute hover:py-1px-2 text-white font-bold top-[55%] z-10  text-lg block  rounded   px-3 py-2   transition hover:scale-105"
              >
                Poursuivre vos achats
              </button>
            </div>
          </div>
        </main>
      )}
      <div className="flex justify-center pt-10">
        <button
          className="bg-[#010203] text-stone-100 rounded-md py-2 px-4 w-64 mt-5 "
          onClick={() => setIndex(index + 16)}
        >
          SHOW MORE
        </button>
      </div>
    </div>
  );
}
