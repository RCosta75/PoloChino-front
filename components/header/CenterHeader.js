import { useRouter } from "next/router";
import React from "react";

export default function CenterHeader({ handleReset }) {
  const router = useRouter();

  const res = () => {
    handleReset();
    router.push("/");
  };

  return (
    <div className="bg-fixed">
      <nav aria-label="Global">
        <img className="h-10  cursor-pointer " src="poloLogo.png" alt="logo" onClick={res} />
      </nav>
    </div>
  );
}
