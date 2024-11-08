import React, { useState, useEffect, Suspense, lazy } from "react";
import { useSelector } from "react-redux";

// Dynamically import components using React.lazy
const Footer = lazy(() => import("../components/Footer"));
const Header = lazy(() => import("../components/header/Header"));
const Card = lazy(() => import("../components/home/productContainer/Card"));

export default function NewProduct() {
  const [poloData, setPoloData] = useState([]);
  const [likesData, setLikesData] = useState([]);

  const user = useSelector((state) => state.user.value);
  const render = useSelector((state) => state.cart.render);

  useEffect(() => {
    // Fetch product data on component mount.
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

  const newProduct = poloData.filter((e) => e.product === "NEW");

  const poloProduct = newProduct.map((polo, i) => {
    return (
      <div key={i}>
        <Card polo={polo} isLike={likesData?.some((e) => e === polo._id)} />
      </div>
    );
  });

  return (
    <div>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>

      <div>
        <div className="w-full flex bg-stone-100 justify-center">
          <div className="max-w-5xl pt-36 pb-10 text-center">
            <h1 className="text-3xl font-medium underline underline-offset-6">
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

        <div className="pt-20 px-11 grid grid-cols-4 gap-8 bg-stone-100 py-10">
          <Suspense fallback={<div>Loading products...</div>}>
            {poloProduct}
          </Suspense>
        </div>
      </div>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
