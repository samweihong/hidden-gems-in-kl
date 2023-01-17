import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Canvas = dynamic(() => import("/components/game/canvas"), {
  ssr: false,
});

let initialDimensionsAreSet = false;

export default function GameWindow() {
  const ref = useRef();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: ref.current.offsetWidth - 50,
        height: ref.current.offsetHeight - 50,
      });
    };
    if (!initialDimensionsAreSet) {
      handleResize();
      initialDimensionsAreSet = true;
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div
      ref={ref}
      className="flex h-screen w-screen items-center justify-center bg-green-500"
    >
      <Canvas
        containerWidth={dimensions.width}
        containerHeight={dimensions.height}
      />
    </div>
  );
}
