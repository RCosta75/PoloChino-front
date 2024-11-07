import React, { useState, Suspense, lazy } from "react";

// Lazy-load the components
const Header = lazy(() => import("../components/header/Header"));
const LikeContainer = lazy(() => import("../components/LikeContainer"));
const Footer = lazy(() => import("../components/Footer"));

export default function Likes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [reset, setReset] = useState(false);

  const handleReset = () => {
    setSearchTerm("");
    setReset(!reset);
  };

  const handleResetFilters = () => {
    setReset(!reset);
  };

  return (
    <div>
      {/* Suspense wrapper with fallback for Header */}
      <Suspense fallback={<div>Loading header...</div>}>
        <Header
          setSearchTerm={setSearchTerm}
          handleReset={handleReset}
          handleResetFilters={handleResetFilters}
        />
      </Suspense>

      {/* Suspense wrapper with fallback for LikeContainer */}
      <Suspense fallback={<div>Loading likes...</div>}>
        <LikeContainer />
      </Suspense>

      {/* Suspense wrapper with fallback for Footer */}
      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
