import React from "react";
import Image from "next/image";
import Link from "next/link";

export default React.forwardRef(function Section2(props, ref) {
  return (
    <div ref={ref} className="relative h-screen bg-secondary-100">
      <div className="absolute top-0 left-0 h-full">
        <Image
          src="/images/home/top-wave.png"
          alt="top-wave"
          width={1366}
          height={768}
        />
      </div>
      <div className="absolute bottom-0 right-0 h-full">
        <Image
          src="/images/home/bottom-wave.png"
          alt="bottom-wave"
          width={1366}
          height={768}
        />
      </div>
      <div className="absolute top-[4rem] right-[11rem] z-20 h-3/5 w-1/2">
        <Link href="/rumah-tangsi">
          <Image
            className="cursor-pointer object-contain"
            style={{ transform: "rotate(-10deg)" }}
            src="/images/home/rt-figure.png"
            alt="rt-figure"
            fill={true}
          />
        </Link>
      </div>
      <div className="absolute bottom-[3rem] right-[5rem] z-20 h-3/5 w-1/4">
        <Link href="/vivekananda-ashrama">
          <Image
            className="cursor-pointer object-contain"
            style={{ transform: "rotate(15deg)" }}
            src="/images/home/va-figure.png"
            alt="va-figure"
            fill={true}
          />
        </Link>
      </div>
      <div className="flex h-full flex-col justify-center pl-36">
        <h1 className="relative z-10 font-serif text-6xl leading-[4rem] text-secondary-300">
          KNOW
          <br />
          THEM?
        </h1>
        <h2 className="relative z-10 mt-6 font-serif text-xl text-secondary-300">
          TAKE A LOOK INSIDE THE HEART OF KL!
        </h2>
      </div>
    </div>
  );
});
