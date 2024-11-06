import { useRouter } from "next/router";
import React from "react";

export default function LeftHeader() {
  const router = useRouter();

  return (
    <div>
        <span
          className="cursor-pointer text-xl"
          onClick={() =>
            router.pathname === "/" ?
            document
              .getElementById("products")
              .scrollIntoView({ behavior: "smooth" })
              : router.push("/")
          }
        >
          Shop
        </span>
      <button
        onClick={() => router.push("/about")}
        className="ml-4 cursor-pointer text-xl"
      >
        About
      </button>
    </div>
  );
}
