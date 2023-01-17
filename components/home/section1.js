import Image from "next/image";
import React from "react";

export default React.forwardRef(function Section1({ handleClick }, ref) {
  const hours = new Date().getHours();

  return (
    <div ref={ref} className="relative h-screen w-screen">
      <div className="flex h-full flex-col justify-center">
        <Image
          className="-z-20 object-cover"
          src={`/images/home/bg-${
            hours >= 8 && hours <= 20 ? "day" : "night"
          }.png`}
          alt="background"
          fill={true}
        />
        <Image
          className="-z-10 object-cover pb-8"
          src="/images/home/newspaper.svg"
          alt="newspaper"
          fill={true}
        />
        <h1 className="mt-16 text-center font-serif text-7xl text-primary-200">
          Hidden Gems in KL
        </h1>
        <div className="mt-3 text-center font-serif">
          <h2 className="inline text-center text-3xl text-primary-100">
            {"There's "}
            <span className="text-secondary-300">more</span>
            {" to KL than meets the 👁️"}
          </h2>
        </div>
      </div>
      <div className="absolute flex w-full justify-center bg-red-100">
        <button
          className="absolute bottom-5 rounded-3xl border-4 border-white bg-primary-300 p-3 font-sans text-sm font-bold text-white"
          onClick={handleClick}
        >
          {"START THE EXPERIENCE >"}
        </button>
      </div>
      <a href="https://www.instagram.com/hiddengemsinkl/">
        <p className="absolute bottom-5 left-5 font-serif text-xl text-white">
          Follow Us
        </p>
      </a>
    </div>
  );
});
