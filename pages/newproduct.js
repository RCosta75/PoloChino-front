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

  const newProduct = poloData.filter((e) => e.product === "NEW" && e);

  const poloProduct = newProduct.map((polo, i) => {
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
              NEW PRODUCT
            </h1>

            <p className="mt-20 text-xl">
              We’re excited to introduce our latest collection! Each item has
              been carefully selected to meet your needs and elevate your
              everyday experience. Whether you’re looking for trendy,
              high-quality, and innovative products, our new arrivals offer you
              the best in style and substance. Don’t miss the chance to find the
              pieces that will make all the difference!
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
