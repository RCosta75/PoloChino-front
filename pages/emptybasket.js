import EmptyBasket from "../components/basket/EmptyBasket";
import Header from "../components/header/Header";
import { useState } from "react";

function emptybasket() {
  const [searchTerm, setSearchTerm] = useState("");
  const [reset, setReset] = useState(false);
  const handleReset = () => {
    setSearchTerm("");
    setReset(!reset);
  };

  return (
    <div className="w-full h-screen">
      <Header setSearchTerm={setSearchTerm} handleReset={handleReset} />
      <EmptyBasket />
    </div>
  );
}

export default emptybasket;
