import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToCart, reRender } from "../../reducers/cart";
import { useSelector } from "react-redux";
export default function Suggestions() {
  const [polo, setPolo] = useState([]);
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const render = useSelector((state) => state.cart.render);
  const cart = useSelector((state) => state.cart.value);

  const [likesData, setLikesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/polos/get")
      .then((response) => response.json())
      .then((data) => {
        setPolo(data.polos);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/users/get/${user?.token}`)
      .then((response) => response.json())
      .then((data) => {
        setLikesData(data.likes);
      });
  }, [render, cart]);

  const handleImageClick = (suggestData) => {
    router.push({
      pathname: "/productpage",
      query: {
        id: suggestData.id,
        name: suggestData.name,
        description: suggestData.description,
        price: suggestData.price,
        image: suggestData.image,
        marque: suggestData.marque,
        coupe: suggestData.coupe,
        matiere: suggestData.matiere,
      },
    });
  };
  //Utilise router.push avec les données du produit dans query pour rediriger vers ProductPage.

  const poloProductSuggest = polo.map((poloSuggest, i) => {
    const handleLikes = () => {
      fetch(`http://localhost:3000/likes/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: poloSuggest._id,
          token: user.token,
        }),
      }).then(() => {
        dispatch(reRender());
      });
    };

    const isLike = likesData?.some((e) => e === poloSuggest._id);
    const carto = cart?.some((e) => e._id === poloSuggest._id);

    return (
      <div className="group bg-white cursor-pointer rounded-br-md rounded-bl-md  relative block overflow-hidden">
        {/* LIKE BUTTON */}
        {user.token && (
          <button
            className="absolute end-4 top-4 z-10 rounded-full bg-[#bfdbf7] p-1.5 text-gray-900 transition hover:text-gray-900/75"
            onClick={() => handleLikes()}
          >
            <span className="sr-only">Wishlist</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={isLike ? "#010203" : "whitesmoke"}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        )}
        <img
          onClick={() => handleImageClick(poloSuggest)}
          src={poloSuggest.image}
          alt={poloSuggest.description}
          className="aspect-square w-full h-80 rounded-tr rounded-tl object-cover"
        />

        {/* TITLE AND PRICE */}

        <div className="mt-3 flex justify-between pl-4 ">
          <div>
            <h1 className="font-bold text-gray-900 group-hover:underline group-hover:underline-offset-4">
              {poloSuggest.marque}
            </h1>
            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
              {poloSuggest.name}
            </h3>
            <p className="mt-1 text-sm text-gray-700">{poloSuggest.price}€ </p>
          </div>
          <button
            className="mr-4"
            onClick={() => dispatch(addToCart({ ...poloSuggest, quantity: 1 }))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={carto ? "#bfdbf7" : "none"}
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="flex gap-10 mx-8 relative my-12  ">
      {poloProductSuggest}
    </div>
  );
}
