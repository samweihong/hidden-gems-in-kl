import Image from "next/image";
import HalfStadium from "./half-stadium";

export default function Section({
  flip = false,
  heading,
  paragraph,
  image: { src, alt, width, height },
}) {
  const textBox = (
    <div className="relative col-span-6 text-center">
      <HalfStadium className="absolute w-full" />
      <h1 className="relative z-10 mt-24 font-serif text-6xl">{heading}</h1>
      <p className="relative z-10 bg-transparent px-10 pt-10 text-justify font-sans">
        {paragraph}
      </p>
    </div>
  );
  const imageBox = (
    <div className="col-span-6">
      <div className="flex h-full content-center">
        <Image
          className="object-contain p-10"
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-12 px-10 pt-24">
      {flip ? [imageBox, textBox] : [textBox, imageBox]}
    </div>
  );
}
