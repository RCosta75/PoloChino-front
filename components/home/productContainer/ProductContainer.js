import React from "react";
import Card from "./Card";
import { useEffect, useState,  } from "react";



export default function ProductContainer({ searchTerm }) {

  const [poloData, setPoloData] = useState([]); //donnees des produits
  //Filtrez les articles en fonction du terme de recherche dans ProductContainer
  const [sortOrder, setSortOrder] = useState(""); // Etat pour l'ordre de tri
  const [selectedMaterial, setSelectedMaterial] = useState("") // État pour la matière sélectionnée
  const [selectedBrand, setSelectedBrand] = useState("") // État pour la marque sélectionnée
  const[selectedCoupe, setSelectedCoupe] = useState("") // État pour la coupe sélectionnée


  useEffect(() => { // récupérer les données des produits au montage du composant.
    fetch("http://localhost:3000/polos/get")
      .then((response) => response.json())
      .then((data) => {
        setPoloData(data.polos);
        console.log(poloData);
      });
  }, []);

  const handleSortChange = (order) => {
     setSortOrder(order); //Met à jour l'état de l'ordre de tri lorsqu'on sélectionne un nouveau type de tri
    };

    const handleMaterialChange = (material) => { 
      setSelectedMaterial(material);} //Met à jour l'état de l'ordre de tri lorsqu'on sélectionne une nouvelle matiere

      const handleBrandChange = (brand) => { 
        setSelectedBrand(brand);} // Met à jour l'état de l'ordre de tri lorsqu'on sélectionne une nouvelle marque

        const handleCoupeChange = (coupe) => { 
          setSelectedCoupe(coupe);} // Met à jour l'état de l'ordre de tri lorsqu'on sélectionne une nouvelle coupe

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
       



  const filteredPolos = sortedPolos.filter((polo) =>{
    //Filtrage des articles en fonction du terme de recherche et affichage des résultats filtrés.
    // (polo.name && polo.name) pour vérifier l'existence du produit
     polo.name && polo.name.toLowerCase().includes(searchTerm.toLowerCase());
     // Filtrage des articles en fonction du terme de recherche et des filtres sélectionnés
    // Filtrer par matière si sélectionnée 
    const matchesMaterial = selectedMaterial ? polo.matiere === selectedMaterial : true; 
    //Vérifie si la matière du produit (polo.matiere) correspond à la matière sélectionnée (selectedMaterial).
    //Si aucune matière n'est sélectionnée, renvoie true, signifiant que tous les produits sont inclus dans le filtrage.
    const matchesBrand = selectedBrand ? polo.marque === selectedBrand : true; 
    const matchesCoupe = selectedCoupe ? polo.coupe === selectedCoupe : true; 
    return matchesMaterial && matchesBrand && matchesCoupe;
    //Si matchesBradn et matchesMaterial et matchesCoupe sont tous vrais,
    // alors true est retourné et le produit est inclus dans les résultats filtrés.
  })
    
   


  const poloProduct =  filteredPolos.map((polo, i) => {
    return (
      <div  >
          <Card key={i} polo={polo} />
      </div>
    );
  });

  return (<div> 
    {/* trier par le prix */}
    <div className="flex justify-end p-4">
    {/* //lier une étiquette  à un élément de formulaire(select'sort') */}
       <label htmlFor="sort" className="mr-2" name='nat'>Trier par : </label>
       <select id="sort" value={sortOrder} onChange={(e) => handleSortChange(e.target.value)}
       //onChange déclenche la fonction handleSortChange lorsque l'utilisateur
       // sélectionne une nouvelle option e.target.value contient la nouvelle valeur sélectionnée.
        className="border px-2 py-1" > 
         <option value="Prix">Prix</option>
        <option value="croissant">Prix - Croissant</option>
        <option value="decroissant">Prix - Décroissant</option> 
       </select>
        </div>


         {/* trier par la matière */}
        <div className="flex justify-end p-4"> 
          <label htmlFor="material" className="mr-2">Matière :</label> 
         
          <select id="material" value={selectedMaterial} onChange={(e) => handleMaterialChange(e.target.value)}
           className="border px-2 py-1" > 
           <option value="">Toutes les matières</option>
             <option value="Coton">Coton</option>
             <option value="Polyester">Polyester</option>
              <option value="Lin">Lin</option>
              <option value="Coton bio">Coton bio</option>
              <option value="Coton stretch">Coton stretch</option>
              <option value="Coton et polyester">Coton et polyester</option>
              </select>
           
        </div>

           {/* trier par la marque */}
        <div className="flex justify-end p-4"> 
          <label htmlFor="brand" className="mr-2">Marque :</label> 
          <select id="brand" value={selectedBrand} onChange={(e) => handleBrandChange(e.target.value)}
           className="border px-2 py-1" > 
           <option value="">Toutes les marques</option>
            <option value="Lacoste">Lacoste</option>
            <option value="Ralph Lauren">Ralph Lauren </option>
            <option value="Adidas">Adidas</option>
            <option value="Nike">Nike</option>
            <option value="Hugo Boss">Hugo Boss</option>
            <option value="Tommy Hilfiger">Tommy Hilfiger</option>
            <option value="Levi's">Levi's</option>
            <option value="Fred Perry">Fred Perry</option>
            <option value="Uniqlo">Uniqlo</option>
            <option value="H&M">H&M</option>
            <option value="Champion">Champion</option>
            <option value="Tommy Jeans">Tommy Jeans</option>
            <option value="Calvin Klein">Calvin Klein</option>
            <option value="Supreme">Supreme</option>
            <option value="Ted Baker">Ted Baker</option>
            <option value="J.Crew">J.Crew</option>
            <option value="Under Armour">Under Armour</option>
            <option value="Massimo Dutti">Massimo Dutti</option>
            <option value="Puma">Puma</option>
            <option value="Dolce & Gabbana">Dolce & Gabbana</option>
              </select>



                {/* trier par la coupe */}
        <div className="flex justify-end p-4"> 
          <label htmlFor="coupe" className="mr-2">Coupe :</label> 
         
          <select id="coupe" value={selectedCoupe} onChange={(e) => handleCoupeChange(e.target.value)}
           className="border px-2 py-1" > 
           <option value="">Toutes les coupes</option>
             <option value="Regular"> Regular</option>
             <option value="Slim">Slim</option>
              <option value="Relaxed">Relaxed</option>
              <option value="Oversize">Oversize</option>
              </select> 
        </div>
             
        </div>

       
 
     {poloProduct.length > 0 ? 
      <div className=" pt-20 px-11 grid grid-cols-4 gap-8">
       {poloProduct}
       </div> : 
     <div>
      <p className=" text-center items-center text-xl">Aucun produit trouvé.</p>
     </div>}
     
     
     
     </div>



  

  );
}
