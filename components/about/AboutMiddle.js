export default function AboutMiddle() {
  return (
    <div className="bg-white px-6  lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className=" pt-52 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Support center
        </h2>
        <p className="mt-8 text-pretty text-2xl font-medium">
          Our technical team brings expertise in equestrian care, event
          management, and digital support, ensuring a top-tier experience for
          all. Passionate about polo, they work behind the scenes to make every
          event exceptional.
        </p>
        <img
          src="/teamPOLO.jpg"
          alt="teamPOLO"
          className="object-cover w-full h-full rounded-md mt-20"
        />
      </div>
    </div>
  );
}
