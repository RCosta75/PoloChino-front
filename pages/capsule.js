import React from "react";
import { Capsule } from "../components/header/rightHeader/Capsule";
import { useRouter } from "next/router";

export default function capsule() {
  const images = [
    "/juju (1).jpg",
    "/juju (2).jpg",
    "/juju (3).jpg",
    "/juju (4).jpg",
    "/juju (5).jpg",
    "/juju (6).jpg",
    "/juju (7).jpg",
    "/juju (8).jpg",
    "/juju (9).jpg",
    "/juju (10).jpg",
    "/juju (11).jpg",
    "/juju (12).jpg",
    "/juju (13).jpg",
    "/juju (14).jpg",
    "/juju (15).jpg",
    "/juju (16).jpg",
    "/juju (17).jpg",
    "/juju (18).jpg",
  ];

  const router = useRouter();

  return (
    <div
      className="w-full relative h-screen  "
      style={{
        backgroundImage: "url(/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-10 left-20">
        <div className="mx-auto max-w-2xl text-center">
          <button
            onClick={() => router.push("/")}
            className="mt-2 text-5xl font-semibold tracking-tight sm:text-7xl"
          >
            DEMODAY
          </button>
          <p className="mt-2  font-semibold tracking-tight sm:text-3xl"></p>
        </div>
      </div>
      <Capsule images={images} />
    </div>
  );
}
