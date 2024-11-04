import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { addToCart, reRender } from "../../../reducers/cart";
import { Modal } from 'antd';
import { useState } from "react";
import ModalProduct from "../../productPage/ModalProduct";

export default function Card({ polo, isLike }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const [isModalOpen, setIsModalOpen] = useState(false);
  // etat pour dire si modal ouvert ou nom, props.open

  const handleBuy = () => {
    dispatch(addToCart({ ...polo, quantity: 1 }));
    router.push("/basket");
  };

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
      },
    });
  };
  //Utilise router.push avec les données du produit dans query pour rediriger vers ProductPage.

  // fonction pour gerer les likes dans User.[likes]
  const handleLikes = () => {
    if(user.token){
      fetch(`http://localhost:3000/likes/update`, {
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
      router.push("/login")
    }
  };
  // Envoi les donnée du polo dans reducer + {quantity : 1}

  // Modal pour choisir sa taille et sa couleur plus rapidement
  const openProductModal = () => {
    setIsModalOpen(true);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="group relative block overflow-hidden rounded">
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
      <img
        src={polo?.image}
        alt={polo?.description}
        className="w-full h-[500px] object-cover transition duration-500 group-hover:scale-105 "
        onClick={handleImageClick}
      />

      <div className="relative border border-gray-100 bg-white h-52 p-6 rounded-bl-lg rounded-br-lg">
        <p className="text-gray-700">{polo?.price} €</p>

        <h3 className="mt-1.5 text-lg font-bold text-gray-900">
          {polo?.marque}
        </h3>

        <p className="h-10 line-clamp-3 text-gray-700">{polo?.name}</p>

        <div className="mt-4 flex gap-4 ">
          <button
            className="block w-full rounded   bg-[#001021] px-3 py-2 text-sm font-medium text-stone-100 transition hover:scale-105"
            onClick={() => openProductModal()}
          >
            Add to Cart
          </button>
          <Modal open={isModalOpen} footer={null} closeIcon={null} maskClosable={true} onCancel={handleCancel} width={700} height={400} > 
            <ModalProduct polo={polo} setIsModalOpen={setIsModalOpen} />
          </Modal>

        </div>
      </div>
    </div>
  );
}
