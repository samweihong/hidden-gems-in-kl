import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const GameCanvas = dynamic(() => import("/components/game/game-canvas"), {
  ssr: false,
});
const IntroCanvas = dynamic(() => import("/components/game/intro-canvas"), {
  ssr: false,
});
const OutroCanvas = dynamic(() => import("/components/game/outro-canvas"), {
  ssr: false,
});

let initialDimensionsAreSet = false;

export default function GameWindow({ heritage: { name, maxLevel } }) {
  const ref = useRef();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [level, setLevel] = useState(-1);
  const [score, setScore] = useState(0);

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
      className="flex h-screen w-screen items-center justify-center bg-secondary-100"
    >
      {level === -1 ? (
        <IntroCanvas
          containerWidth={dimensions.width}
          containerHeight={dimensions.height}
          setLevel={setLevel}
        />
      ) : level === maxLevel ? (
        <OutroCanvas
          containerWidth={dimensions.width}
          containerHeight={dimensions.height}
          score={score}
        />
      ) : (
        <GameCanvas
          containerWidth={dimensions.width}
          containerHeight={dimensions.height}
          level={level}
          setLevel={setLevel}
          score={score}
          setScore={setScore}
        />
      )}
    </div>
  );
}
