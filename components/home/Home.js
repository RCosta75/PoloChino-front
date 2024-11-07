import Head from "next/head";
import { useState, Suspense } from "react"; // Import Suspense
import Footer from "../Footer";
import ProductHeader from "./ProductHeader";
import Header from "../header/Header";
import ProductContainer from "./productContainer/ProductContainer";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [reset, setReset] = useState(false);

  const handleReset = () => {
    setSearchTerm("");
    setReset(!reset);
  };

  const handleResetFilters = () => {
    setReset(!reset);
  };

  return (
    <div className="bg-stone-100 no-scrollbar overflow-hidden overflow-y-auto">
      <Head>
        <title>POL-HO - Home</title>
      </Head>
      <Header
        setSearchTerm={setSearchTerm}
        handleReset={handleReset}
        handleResetFilters={handleResetFilters}
      />

      {/* Wrap ProductHeader with Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        {!searchTerm && <ProductHeader />}
      </Suspense>

      <div className="w-full flex justify-center">
        <div className="max-w-5xl mt-20 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">FEEL THE POLO</h2>
          <p className="mt-14 text-xl text-gray-600">
            Welcome to the world of luxury polo shirts, where sophistication and
            refinement meet. Our polos are more than just clothing—they embody
            timeless elegance for those who seek both quality and style. Crafted
            from premium materials and designed for perfect comfort, our polos
            effortlessly adapt to any occasion, from casual chic to elevated
            looks. Discover the essence of style with pieces that will elevate
            your wardrobe and enhance your presence with finesse.
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
      </div>
      <Footer />
    </div>
  );
}

export default Home;
