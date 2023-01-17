import MainHead from "../../components/head/main-head";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Home() {
  const left = useRef();

  useEffect(() => {
    const handleOnMove = (e) => {
      const p = (e.clientX / window.innerWidth) * 100;
      left.current.style.width = `${p}%`;
    };
    const handleOnTouch = (e) => handleOnMove(e.touches[0]);
    document.addEventListener("mousemove", handleOnMove);
    document.addEventListener("touchmove", handleOnTouch);

    return () => {
      document.removeEventListener("mousemove", handleOnMove);
      document.removeEventListener("touchmove", handleOnTouch);
    };
  }, []);

  return (
    <>
      <MainHead />
      <div className="relative h-screen">
        <div
          ref={left}
          className="absolute z-10 grid h-screen w-full place-items-center overflow-hidden bg-amber-800"
        >
          <h1 className="mx-[15vw] my-0 w-[70vw] text-5xl font-bold text-white sm:text-6xl md:text-7xl">
            <p>Hidden Gems in KL</p>
            <p className="font-cursive text-3xl leading-[1.75] sm:text-5xl sm:leading-relaxed md:text-6xl md:leading-relaxed">
              feat. <span className="text-yellow-400">Vivekananda Ashrama</span>
            </p>
          </h1>
        </div>
        <div className="absolute grid h-screen w-full place-items-center overflow-hidden bg-yellow-400">
          <h1 className="mx-[15vw] my-0 w-[70vw] text-5xl font-bold text-black sm:text-6xl md:text-7xl">
            <p>Hidden Gems in KL</p>
            <p className="font-cursive text-3xl leading-[1.75] sm:text-5xl sm:leading-relaxed md:text-6xl md:leading-relaxed">
              feat. <span className="text-white">Rumah Tangsi</span>
            </p>
          </h1>
        </div>
      </div>
      <div>
        <Link href="/vivekananda-ashrama">
          <p className="m-5 font-medium text-blue-600 hover:underline dark:text-blue-500">
            Vivekananda Ashrama
          </p>
        </Link>
        <Link href="/rumah-tangsi">
          <p className="m-5 font-medium text-blue-600 hover:underline dark:text-blue-500">
            Rumah Tangsi
          </p>
        </Link>
      </div>
    </>
  );
}
