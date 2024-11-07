import React, { useState, useEffect, Suspense, lazy } from "react";
import { useSelector } from "react-redux";

// Use React.lazy to load components
const Card = lazy(() => import("./home/productContainer/Card"));
const EmptyBasket = lazy(() => import("./basket/EmptyBasket"));

export default function LikeContainer() {
  const [poloData, setPoloData] = useState([]);
  const [likesData, setLikesData] = useState([]);

  const user = useSelector((state) => state.user.value);
  const render = useSelector((state) => state.cart.render);

  useEffect(() => {
    fetch(`http://localhost:3000/likes/display/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        setPoloData(data.likes);
      });
  }, [render, user.token]);

  useEffect(() => {
    fetch(`http://localhost:3000/users/get/${user?.token}`)
      .then((response) => response.json())
      .then((data) => {
        setLikesData(data.likes);
      });
  }, [render, user.token]);

  const poloProduct = poloData.map((polo, i) => (
    <div key={i}>
      <Card polo={polo} isLike={likesData.some((e) => e === polo._id)} />
    </div>
  ));

  return (
    <div>
      {poloProduct.length === 0 ? (
        <Suspense fallback={<p></p>}>
          <EmptyBasket />
        </Suspense>
      ) : (
        <div>
          <h1 className="pt-20 text-center text-3xl bg-stone-100 font-medium underline underline-offset-6">
            Your Liked Product
          </h1>
          <Suspense fallback={<p></p>}>
            <div className="pt-20 px-11 grid grid-cols-4 gap-8 bg-stone-100 py-10">
              {poloProduct}
            </div>
          </Suspense>
        </div>
      )}
    </div>
  );
}
