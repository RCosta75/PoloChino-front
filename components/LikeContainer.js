import React from "react";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./home/productContainer/Card";

export default function LikeContainer() {
  const [poloData, setPoloData] = useState([]);

  const user = useSelector((state) => state.user.value);
  const render = useSelector((state) => state.cart.render);

  useEffect(() => {
    fetch(`http://localhost:3000/likes/display/${user.token}`)
      .then((response) => response.json())
      .then((data) => {
        setPoloData(data.likes);
        console.log(poloData);
      });
  }, [render]);

  const poloProduct = poloData.map((polo, i) => {
    return (
      <div>
        <Card key={i} polo={polo} />
      </div>
    );
  });

  return (
    <div>
      <h1 className="pt-20 text-center text-3xl bg-stone-100 underline" >Your Liked Product</h1>
      <div className=" pt-20 px-11 grid grid-cols-4 gap-8 bg-stone-100 py-10">{poloProduct}</div>
    </div>
  );
}
