import React, { useState, useEffect, Suspense, lazy } from "react";
import { useSelector } from "react-redux";

// Lazy-load the components
const Footer = lazy(() => import("../components/Footer"));
const Header = lazy(() => import("../components/header/Header"));
const Card = lazy(() => import("../components/home/productContainer/Card"));

export default function NewProduct() {
  const [poloData, setPoloData] = useState([]);
  const [likesData, setLikesData] = useState([]);

  const user = useSelector((state) => state.user.value);
  const render = useSelector((state) => state.cart.render);

  useEffect(() => {
    // Fetch product data on component mount
    fetch("https://polo-chino-back.vercel.app/polos/get")
      .then((response) => response.json())
      .then((data) => {
        setPoloData(data.polos);
      });
  }, []);

  useEffect(() => {
    // Fetch user likes data when render state changes
    fetch(`https://polo-chino-back.vercel.app/users/get/${user?.token}`)
      .then((response) => response.json())
      .then((data) => {
        setLikesData(data.likes);
      });
  }, [render]);

  const basicProduct = poloData.filter((e) => e.product === "BASIC");

  const poloProduct = basicProduct.map((polo, i) => (
    <div key={i}>
      <Suspense fallback={<div>Loading product...</div>}>
        <Card polo={polo} isLike={likesData?.some((e) => e === polo._id)} />
      </Suspense>
    </div>
  ));

  return (
    <div>
      {/* Suspense wrapper for Header */}
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>

      <div>
        <div className="w-full flex bg-stone-100 justify-center">
          <div className="max-w-5xl pt-36 pb-10 text-center">
            <h1 className="text-center text-3xl font-medium underline underline-offset-6">
              BASIC PRODUCT
            </h1>
            <p className="mt-20 text-xl">
              Combine comfort and style with our new collection of basic polos.
              Timeless and versatile, our polos are designed to give you the
              perfect fit and exceptional comfort, available in classic colors
              that suit any occasion. Whether you’re going for a casual or
              polished look, our basic polos are the must-have pieces for your
              wardrobe.
            </p>
          </div>
        </div>

        <div className="pt-20 px-11 grid grid-cols-4 gap-8 bg-stone-100 py-10">
          {poloProduct}
        </div>
      </div>

      {/* Suspense wrapper for Footer */}
      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
