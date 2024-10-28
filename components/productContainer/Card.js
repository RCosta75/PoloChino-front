import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../reducers/cart";


export default function Card({ polo }) {

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.value);

    // fonction pour gerer les likes dans User.[likes]
    const handleLikes = () => {
      fetch(`http://localhost:3000/likes/update`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: polo._id,
          token: user.token,
        }),
      }).then();
    };

    // Envoi les donnée du polo dans reducer + {quantity : 1}
    const handleCart = () => {
      dispatch(addToCart({...polo, quantity : 1}))
    }

  return (
    <a href="#" class="group relative block overflow-hidden ">
      <button class="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
      onClick={() => handleLikes()}>
        <span class="sr-only">Wishlist</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
      <img
  src={polo.image}
  alt={polo.description}
  class="w-full h-[500px] object-cover transition duration-500 group-hover:scale-105"
/>

      <div class="relative border border-gray-100 bg-white   p-6">
        <p class="text-gray-700">{polo.price} €</p>

        <h3 class="mt-1.5 text-lg font-medium text-gray-900">
          {polo.name}
        </h3>

        <p class="mt-1.5 h-20 line-clamp-3 text-gray-700">{polo.description}</p>

        <form class="mt-4 flex gap-4">
          <button class="block w-full rounded bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
          onClick={() => handleCart()}>
            Add to Cart
          </button>

          <button
            type="button"
            class="block w-full rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
          >
            Buy Now
          </button>
        </form>
      </div>
    </a>
  );
}
