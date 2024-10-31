import { useRouter } from "next/router";
import  { useState } from "react";
import ProductPage from "../components/productPage/ProductPage";
import Header from "../components/header/Header";

export default function ProductPageWrapper() {
  const router = useRouter();
  const product = JSON.parse(router.query.product || "{}");
  //Si router.query.product est indéfini ou null, elle renverra la chaîne vide {}
  //Parse les données du produit de l'URL et les passées au composant ProductPage.
  const [searchTerm, setSearchTerm] = useState("");
  const [reset, setReset] = useState(false);
  const handleReset = () => {
    setSearchTerm("");
    setReset(!reset);
  };
  // Passage de handleReset au composant Header dans productpage.js :
  // Le composant Header a maintenant accès à la fonction handleReset.

  return (
    <>
      <Header setSearchTerm={setSearchTerm} handleReset={handleReset} />
      <ProductPage product={product} />;
    </>
  );
}
