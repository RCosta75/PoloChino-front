import { useRouter } from "next/router";
import React from "react";

export default function CenterHeader({ handleReset, handleResetFilters }) {
  const router = useRouter();

  const res = () => {
    if (router.pathname === "/") {
      handleReset();
    }
    router.push("/");
  };

  return (
    <div className="absolute left-[48%]">
      <nav aria-label="Global">
        <img
          className="h-10  cursor-pointer "
          src="poloLogo.png"
          alt="logo"
          onClick={res}
        />
      </nav>
    </div>
  );
}
