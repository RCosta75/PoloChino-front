import { useRouter } from "next/router";
import React from "react";

export default function CenterHeader({ handleReset, handleResetFilters }) {
  const router = useRouter();

  const res = async () => {
     await router.push("/");
      handleReset();
      handleResetFilters(); 
    };
    

  return (
    <div>
      <nav aria-label="Global">
        <img className="h-10  cursor-pointer" src="poloLogo.png" alt="logo" onClick={res} />
      </nav>
    </div>
  );
}
