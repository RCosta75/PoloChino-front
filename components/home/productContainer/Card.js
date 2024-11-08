import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { reRender } from "../../../reducers/cart";
import { Modal } from "antd";
import { useState } from "react";
import ModalProduct from "../../productPage/ModalProduct";

export default function Card({ polo, isLike }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  const cart = useSelector((state) => state.cart.value);

  const [isModalOpen, setIsModalOpen] = useState(false);
  // etat pour dire si modal ouvert ou nom, props.open

  const carto = cart?.some((e) => e._id === polo._id);

  const handleImageClick = () => {
    router.push({
      pathname: "/productpage",
      query: {
        _id: polo._id,
        name: polo.name,
        description: polo.description,
        price: polo.price,
        image: polo.image,
        marque: polo.marque,
        coupe: polo.coupe,
        matiere: polo.matiere,
        comments: JSON.stringify(polo.comments), // Obj to String le tableau
      },
    });
  };
  //Utilise router.push avec les données du produit dans query pour rediriger vers ProductPage.

  // fonction pour gerer les likes dans User.[likes]
  const handleLikes = () => {
    if (user.token) {
      fetch(`https://polo-chino-back.vercel.app/likes/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: polo._id,
          token: user.token,
        }),
      }).then(() => {
        dispatch(reRender());
      });
    } else {
      router.push("/login");
    }
  };

  // Modal pour choisir sa taille et sa couleur plus rapidement
  const openProductModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="group relative block overflow-hidden rounded cursor-pointer bg-white">
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
          stroke="#010203"
          className="size-5 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
      <button
        className="absolute end-4 top-14 z-10 rounded-full bg-[#bfdbf7] p-1.5 text-gray-900 transition hover:text-gray-900/75"
        onClick={() => openProductModal()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={carto ? "#010203" : "whitesmoke"}
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
      <img
        src={polo?.image}
        alt={polo?.description}
        className="w-full h-[400px] object-cover transition duration-500 group-hover:scale-105 "
        onClick={handleImageClick}
      />

      <div className="mt-3 flex justify-between pl-4  ">
        <div>
          <h1 className="font-bold text-gray-900 group-hover:underline group-hover:underline-offset-4">
            {polo?.marque}
          </h1>
          <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
            {polo?.name}
          </h3>
        </div>
        <p className="mt-3 pr-4 text-base font-semibold pb-5 text-gray-700">
          {polo?.price}€{" "}
        </p>
      </div>

      <div className="mt-4 flex gap-4 ">
        <Modal
          open={isModalOpen}
          footer={null}
          closeIcon={null}
          maskClosable={true}
          onCancel={handleCancel}
          width={700}
          height={400}
        >
          <ModalProduct polo={polo} setIsModalOpen={setIsModalOpen} />
        </Modal>
      </div>
    </div>
  );
}
