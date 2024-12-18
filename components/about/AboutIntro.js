import React from "react";

export default function AboutIntro() {
  return (
    <section>
      <div className="mx-auto h-screen max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16  xl:pt-60 text-2xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="polo"
              src="/TestPolo (1).jpg"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24">
            <h2 className="text-3xl font-bold sm:text-4xl">FEEL THE POLO</h2>

            <p className="mt-4 text-gray-600">
              Welcome to the world of luxury polo shirts, where sophistication
              and refinement meet. Our polos are more than just clothing—they
              embody timeless elegance for those who seek both quality and
              style. Crafted from premium materials and designed for perfect
              comfort, our polos effortlessly adapt to any occasion, from casual
              chic to elevated looks. Discover the essence of style with pieces
              that will elevate your wardrobe and enhance your presence with
              finesse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
