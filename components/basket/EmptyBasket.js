import React from "react";
import { useRouter } from "next/router";

export default function EmptyBasket() {
  const router = useRouter();

  return (
    <div className="w-full relative h-screen flex flex-col items-center justify-center py-20">
      <p className="text-white motion-translate-x-in-[0%] motion-ease-out-cubic motion-duration-[1.50s]  motion-translate-y-in-[100%] absolute top-[48%] z-10 text-2xl mb-4">
        Votre panier est vide
      </p>
      <button
        onClick={() => {
          router.push("/");
        }}
        className="bg-gray-950 p-4 motion-translate-x-in-[0%] motion-ease-out-cubic motion-duration-[1.50s] motion-translate-y-in-[100%] absolute hover:py-1px-2 text-white font-bold top-[55%] z-10  text-lg block  rounded   px-3 py-2   transition hover:scale-105"
      >
        Poursuivre vos achats
      </button>

      <video
        autoPlay
        loop
        muted
        controls={false}
        className="absolute -z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/polovideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
