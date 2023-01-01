import { Layer, Stage } from "react-konva";
import { useEffect, useState } from "react";
import Sprite from "./sprite";

const dx = 3;
const dy = 3;

export default function Canvas({ containerWidth, containerHeight }) {
  // handle responsive scene
  const sceneDimensions = {
    width: 1024,
    height: 576,
  };
  const scale = Math.min(
    containerWidth / sceneDimensions.width,
    containerHeight / sceneDimensions.height
  );

  // handle image properties
  const size = 0.15 * Math.min(sceneDimensions.width, sceneDimensions.height);
  const character = new window.Image(size, size);
  character.src = "/images/dio.jpg";
  character.alt = "character";
  const [position, setPosition] = useState({
    x: (containerWidth - character.width) / 2,
    y: (containerHeight - character.height) / 2,
  });

  // handle player movement
  const [keys, setKeys] = useState({
    w: { pressed: false },
    a: { pressed: false },
    s: { pressed: false },
    d: { pressed: false },
  });
  useEffect(() => {
    function handleKeyDown(e) {
      switch (e.key) {
        case "w":
        case "ArrowUp":
          setKeys((keys) => ({ ...keys, w: { ...keys.w, pressed: true } }));
          break;
        case "a":
        case "ArrowLeft":
          setKeys((keys) => ({ ...keys, a: { ...keys.a, pressed: true } }));
          //
          break;
        case "s":
        case "ArrowDown":
          setKeys((keys) => ({ ...keys, s: { ...keys.s, pressed: true } }));
          break;
        case "d":
        case "ArrowRight":
          setKeys((keys) => ({ ...keys, d: { ...keys.d, pressed: true } }));
          break;
      }
    }

    function handleKeyUp(e) {
      switch (e.key) {
        case "w":
        case "ArrowUp":
          setKeys((keys) => ({ ...keys, w: { ...keys.w, pressed: false } }));
          break;
        case "a":
        case "ArrowLeft":
          setKeys((keys) => ({ ...keys, a: { ...keys.a, pressed: false } }));
          break;
        case "s":
        case "ArrowDown":
          setKeys((keys) => ({ ...keys, s: { ...keys.s, pressed: false } }));
          break;
        case "d":
        case "ArrowRight":
          setKeys((keys) => ({ ...keys, d: { ...keys.d, pressed: false } }));
          break;
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (keys.w.pressed)
        setPosition((position) => ({ ...position, y: position.y - dy }));
      if (keys.a.pressed)
        setPosition((position) => ({ ...position, x: position.x - dx }));
      if (keys.s.pressed)
        setPosition((position) => ({ ...position, y: position.y + dy }));
      if (keys.d.pressed)
        setPosition((position) => ({ ...position, x: position.x + dx }));
    }, 3);
    return () => {
      clearInterval(id);
    };
  }, [keys]);

  return (
    <Stage
      width={sceneDimensions.width * scale}
      height={sceneDimensions.height * scale}
      scale={{ x: scale, y: scale }}
      className="bg-amber-400"
    >
      <Layer>
        <Sprite image={character} position={position} />
      </Layer>
    </Stage>
  );
}
