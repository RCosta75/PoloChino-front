import React from "react";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/header/Header";
import Card from "../components/home/productContainer/Card";
import { useSelector } from "react-redux";

export default function newproduct() {
  const [poloData, setPoloData] = useState([]);
  const [likesData, setLikesData] = useState([]);

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

  useEffect(() => {
    fetch(`http://localhost:3000/users/get/${user?.token}`)
      .then((response) => response.json())
      .then((data) => {
        setLikesData(data.likes);
      });
  }, [render]);

  const basicProduct = poloData.filter((e) => e.product === "BASIC" && e);

  const poloProduct = basicProduct.map((polo, i) => {
    return (
      <div>
        <Card
          key={i}
          polo={polo}
          isLike={likesData?.some((e) => e === polo._id)}
        />
      </div>
    );
  });

  return (
    <div>
      <Header />

      <div>
        <div className="w-full flex  bg-stone-100 justify-center">
          <div className="max-w-5xl pt-36 pb-10  text-center">
            <h1 className=" text-center text-3xl  font-medium underline underline-offset-6">
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
        <div className=" pt-20 px-11 grid grid-cols-4 gap-8 bg-stone-100 py-10">
          {poloProduct}
        </div>
      </div>

      <Footer />
    </div>
  );
}
