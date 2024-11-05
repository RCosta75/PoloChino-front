import { useRouter } from "next/router";
import React from "react";

export default function LeftHeader() {
  const router = useRouter();

  return (
    <div>
      {router.pathname === "/" && (
        <span
          className="cursor-pointer text-xl"
          onClick={() =>
            document
              .getElementById("products")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Shop
        </span>
      )}
      <button
        onClick={() => router.push("/about")}
        className="ml-4 cursor-pointer text-xl"
      >
        About
      </button>
    </div>
  );
}
