import Head from "next/head";
import { useState } from "react";
import Footer from "../Footer";
import ProductHeader from "./ProductHeader";
import Header from "../header/Header";
import ProductContainer from "./productContainer/ProductContainer";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  //Etat pour gérer la recherche dans le composant parent.
  //Utilisation d'un état pour stocker
  //le terme de recherche et le passer comme prop au composant Header.
  const [reset, setReset] = useState(false);
  const handleReset = () => {
    setSearchTerm("");
    setReset(!reset);
  };
  // initialise un état reset avec une valeur initiale de false.
  // setReset pour mettre à jour cet état.
  //handleReset réinitialise searchTerm et inverse l'état reset.

  const handleResetFilters = () => {
    setReset(!reset);
  }; // on donne cette fonction à ProductContainer

  return (
    <div className="bg-stone-100 no-scrollbar overflow-y-auto">
      <Head>
        <title>POL-HO - Home</title>
      </Head>
      <Header
        setSearchTerm={setSearchTerm}
        handleReset={handleReset}
        handleResetFilters={handleResetFilters}
      />

      {!searchTerm && <ProductHeader />}
      <div className="w-full flex justify-center">
        <div className="max-w-5xl mt-20  text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">FEEL THE POLO</h2>

          <p className="mt-14 text-xl text-gray-600">
            Welcome to our site dedicated to polo, the sport where elegance,
            strategy, and passion meet. Discover the latest news, competitions,
            and our best tips for players and enthusiasts. Dive into the unique
            world of polo and share our passion for this exceptional sport.
          </p>
        </div>
      </div>

      {searchTerm ? (
        <h1 className="text-3xl pt-14 text-center">{searchTerm}</h1>
      ) : (
        <h1
          className="text-3xl pt-20 text-center underline underline-offset-6"
          id="products"
        >
          All Products
        </h1>
      )}

      <div>
        <ProductContainer searchTerm={searchTerm} reset={reset} />
        {/* passes l'état reset au composant ProductContainer comme une prop, */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
