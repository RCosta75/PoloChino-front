import React, { Suspense, lazy } from "react";

// Dynamically import the Home component with React.lazy
const Home = lazy(() => import("../components/home/Home"));

function Index() {
  return (
    <Suspense fallback={<div></div>}>
      <Home />
    </Suspense>
  );
}

export default Index;
