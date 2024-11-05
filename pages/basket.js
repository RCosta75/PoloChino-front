import LeftBasket from "../components/basket/LeftBasket";
import RightBasket from "../components/basket/RightBasket";
import { useState } from "react";
import Header from "../components/header/Header";
import { useSelector } from "react-redux";
import EmptyBasket from "../components/basket/EmptyBasket";
import { totalQuantityBasket } from "../reducers/cart";

function Basket() {
  const totalBasketItem = useSelector(totalQuantityBasket);
  console.log(totalBasketItem);

  const [searchTerm, setSearchTerm] = useState("");
  const [reset, setReset] = useState(false);
  const handleReset = () => {
    setSearchTerm("");
    setReset(!reset);
  };
  // Passage de handleReset au composant Header dans Basket.js :
  // Le composant Header a maintenant accès à la fonction handleReset.

  return (
    <>
      <Header setSearchTerm={setSearchTerm} handleReset={handleReset} />

      {totalBasketItem === 0 ? (
        <EmptyBasket />
      ) : (
        <div className="w-full h-screen flex  ">
          <LeftBasket />
          <RightBasket />
        </div>
      )}
    </>
  );
}
export default Basket;
