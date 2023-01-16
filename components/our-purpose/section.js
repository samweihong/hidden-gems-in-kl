import Image from "next/image";
import { useState } from "react";

const objectives = [
  "To increase the awareness of the importance of valuing Kuala Lumpur’s architectural heritage among travellers, university students, and history buffs.",
  "To support the conservation of heritage landmarks and boost the profile of the collaborators.",
  "To provide intriguing and engaging promotion of the heritage site via social media platforms.",
];

export default function Section() {
  const [index, setIndex] = useState(0);

  function handlePrevious() {
    setIndex((index) => (index + objectives.length - 1) % objectives.length);
  }

  function handleNext() {
    setIndex((index) => (index + 1) % objectives.length);
  }

  return (
    <div className="grid h-full grid-cols-12 px-10 pt-24">
      <div className="relative col-span-8 m-10 text-center">
        <div className="absolute flex h-full w-full justify-center">
          <Image
            className="object-contain"
            src="/images/our-purpose/textbox.png"
            alt="textbox"
            draggable="false"
            fill={true}
          />
        </div>
        <div className="absolute left-8 flex h-full items-center pt-16">
          <div>
            <Image
              className="cursor-pointer"
              src="/images/our-purpose/arrow.png"
              alt="left-arrow"
              draggable="false"
              width={41}
              height={40}
              onClick={handlePrevious}
            />
          </div>
        </div>
        <div
          className="absolute right-8 flex h-full items-center pt-16"
          style={{ transform: "scaleX(-1)" }}
        >
          <div>
            <Image
              className="cursor-pointer"
              src="/images/our-purpose/arrow.png"
              alt="right-arrow"
              draggable="false"
              width={41}
              height={40}
              onClick={handleNext}
            />
          </div>
        </div>
        <h1 className="relative z-10 mt-36 font-serif text-5xl">
          Project Objective
        </h1>
        <p className="relative z-10 mx-16 bg-transparent py-12 px-10 text-justify font-sans">
          {objectives[index]}
        </p>
        <div className="absolute bottom-20 z-10 w-full">
          <div className="flex justify-center">
            <Image
              src="/images/our-purpose/pagination.png"
              alt="pagination"
              draggable="false"
              width={42}
              height={8}
            />
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <div className="relative flex h-full justify-start">
          <Image
            className="object-contain p-28 pl-10"
            src="/images/our-purpose/objective.png"
            alt="objective"
            fill={true}
          />
        </div>
      </div>
    </div>
  );
}
