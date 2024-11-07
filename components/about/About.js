import React, { Suspense, lazy } from "react";

// Lazy-load the components
const Header = lazy(() => import("../header/Header"));
const AboutIntro = lazy(() => import("./AboutIntro"));
const AboutMiddle = lazy(() => import("./AboutMiddle"));
const AboutTeam = lazy(() => import("./AboutTeam"));
const AboutStats = lazy(() => import("./AboutStats"));
const AboutTestimonials = lazy(() => import("./AboutTestimonials"));
const Footer = lazy(() => import("../Footer"));

export default function About() {
  return (
    <div className="w-full h-full">
      {/* Suspense wrappers with fallback */}
      <Suspense fallback={<div></div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <AboutIntro />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <AboutMiddle />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <AboutTeam />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <AboutStats />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <AboutTestimonials />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
