import React, { useState, Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { totalQuantityBasket } from "../reducers/cart";

// Lazy-load the components
const Header = lazy(() => import("../components/header/Header"));
const LeftBasket = lazy(() => import("../components/basket/LeftBasket"));
const RightBasket = lazy(() => import("../components/basket/RightBasket"));
const EmptyBasket = lazy(() => import("../components/basket/EmptyBasket"));

function Basket() {
  const totalBasketItem = useSelector(totalQuantityBasket);
  console.log(totalBasketItem);

  const [searchTerm, setSearchTerm] = useState("");
  const [reset, setReset] = useState(false);

  const handleReset = () => {
    setSearchTerm("");
    setReset(!reset);
  };

  return (
    <>
      {/* Suspense wrapper with fallback for Header */}
      <Suspense fallback={<div>Loading header...</div>}>
        <Header setSearchTerm={setSearchTerm} handleReset={handleReset} />
      </Suspense>

      {/* Conditionally render EmptyBasket or LeftBasket and RightBasket, each wrapped in Suspense */}
      {totalBasketItem === 0 ? (
        <Suspense fallback={<div>Loading empty basket...</div>}>
          <EmptyBasket />
        </Suspense>
      ) : (
        <div className="w-full h-screen flex">
          <Suspense fallback={<div>Loading basket...</div>}>
            <LeftBasket />
          </Suspense>
          <Suspense fallback={<div>Loading basket...</div>}>
            <RightBasket />
          </Suspense>
        </div>
      )}
    </>
  );
}

export default Basket;
