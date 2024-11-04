import { useRouter } from "next/router";
import React from "react";

export default function CenterHeader() {
  const router = useRouter();

  const res = () => {
    router.push("/");
  };

  return (
    <div>
      <nav aria-label="Global">
        <img className="h-10" src="poloLogo.png" alt="logo" onClick={res} />
      </nav>
    </div>
  );
}
