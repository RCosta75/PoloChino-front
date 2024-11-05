export default function AboutMiddle() {
  return (
    <div className="relative w-full h-[700px] isolate overflow-hidden sm:py-32">
      <img
        alt="teamPOLO"
        src="/teamPOLO.jpg"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className=" ml-20  px-6 lg:px-8">
        <div className="mx-auto rounded-md max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Support center
          </h2>
          <p className="mt-6 text-pretty xl:text-2xl font-medium  sm:text-xl/8">
            Our technical team brings expertise in equestrian care, event
            management, and digital support, ensuring a top-tier experience for
            all. Passionate about polo, they work behind the scenes to make
            every event exceptional.
          </p>
        </div>
      </div>
    </div>
  );
}
