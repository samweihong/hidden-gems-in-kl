import Image from "next/image";
import { useState } from "react";

export default function PartnerCard({
  heading,
  paragraph,
  image: { src, alt },
}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  const closedCard = (
    <>
      <div className="absolute top-4 z-20 w-full text-center">
        <button className="text-sans cursor-pointer rounded-3xl border-2 border-primary-300 bg-white px-2 py-1 text-sm font-bold text-primary-300">
          {"Gallery >"}
        </button>
      </div>
      <div className="absolute flex h-full w-full items-center justify-center p-8">
        <h1
          className="cursor-pointer border-b-4 border-primary-300 p-4 text-center font-serif text-4xl text-primary-300"
          onClick={handleClick}
        >
          {heading}
        </h1>
      </div>
    </>
  );

  const openedCard = (
    <>
      <div className="absolute h-full w-full overflow-auto p-8">
        <h1
          className="cursor-pointer border-b-4 border-primary-300 p-4 text-center font-serif text-4xl text-primary-300"
          onClick={handleClick}
        >
          {heading}
        </h1>
        <p className="mt-5 text-justify font-sans text-white">{paragraph}</p>
      </div>
    </>
  );

  return (
    <>
      <div className="absolute flex h-full w-full items-center">
        <Image
          className="object-cover"
          src={src}
          alt={alt}
          draggable="false"
          fill={true}
        />
      </div>
      <div className="h-full p-10">
        <div className="relative z-10 h-full w-full rounded-[3rem] bg-[rgba(255,175,126,0.55)]">
          {isOpen ? openedCard : closedCard}
        </div>
      </div>
    </>
  );
}
