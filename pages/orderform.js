import React, { Suspense, useState } from "react";
import Header from "../components/header/Header";

// Lazily import the OrderForm component
const OrderForm = React.lazy(() => import("../components/order/OrderForm"));

export default function OrderFormPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [reset, setReset] = useState(false);

  const handleReset = () => {
    setSearchTerm("");
    setReset(!reset);
  };

  return (
    <>
      <Header setSearchTerm={setSearchTerm} handleReset={handleReset} />

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        {/* Suspense wrapper with fallback loading state */}
        <Suspense fallback={<div>Loading...</div>}>
          <OrderForm className="w-full h-full" />
        </Suspense>
      </div>
    </>
  );
}
