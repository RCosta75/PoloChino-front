import React from "react";

import { useRouter } from "next/router";
import { Capsule } from "../components/header/Capsule";

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

    "/Capsule (1).jpg",
    "/Capsule (2).jpg",
    "/Capsule (3).jpg",
    "/Capsule (4).jpg",
    "/Capsule (5).jpg",
    "/Capsule (6).jpg",
    "/Capsule (7).jpg",
    "/Capsule (8).jpg",
    "/Capsule (9).jpg",
    "/Capsule (10).jpg",
    "/Capsule (11).jpg",
    "/Capsule (12).jpg",
    "/Capsule (13).jpg",
    "/Capsule (14).jpg",
    "/Capsule (15).jpg",
    "/Capsule (16).jpg",
    "/Capsule (17).jpg",
    "/Capsule (18).jpg",
    "/Capsule (19).jpg",
    "/Capsule (20).jpg",
    "/Capsule (21).jpg",
    "/Capsule (22).jpg",
    "/Capsule (23).jpg",
    "/Capsule (24).jpg",
    "/Capsule (25).jpg",
    "/Capsule (26).jpg",
    "/Capsule (27).jpg",
    "/Capsule (28).jpg",
    "/Capsule (29).jpg",
    "/Capsule (30).jpg",
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
