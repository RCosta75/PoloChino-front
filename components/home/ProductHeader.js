import React from "react";
import { useRouter } from "next/router";

export default function ProductHeader() {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex">
      <div className=" relative w-1/2 ">
        <img
          src="/TestPolo (1).jpg"
          alt="TestPolo"
          className="w-full  h-screen object-cover"
        />
        <button
          type="button"
          className="block absolute bottom-20 left-20  rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition-transform:500 hover:scale-105 "
          onClick={() => router.push("/newproduct")}
        >
          NEW PRODUCT
        </button>
      </div>
      <div className=" relative w-1/2 ">
        <img
          src="/TestPolo (2).jpg"
          alt="TestPolo"
          className="w-full h-screen  object-cover "
        />
        <button
          type="button"
          className="block absolute bottom-20 right-20 rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition-transform:500 hover:scale-105 "
          onClick={() => router.push("/basicproduct")}
        >
          BASIC PRODUCT
        </button>
      </div>
    </div>
  );
}
