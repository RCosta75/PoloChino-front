import { useRouter } from "next/router";
import React from "react";

export default function LeftHeader() {
  const router = useRouter();

  return (
    <div>
      {router.pathname === "/" && (
        <span
          onClick={() =>
            document
              .getElementById("products")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Shop
        </span>
      )}
      <span className="ml-4">About</span>
    </div>
  );
}
