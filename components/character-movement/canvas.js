import { Layer, Stage } from "react-konva";
import { useEffect, useState } from "react";
import Sprite from "../game/sprite";
import { Joystick } from "react-joystick-component";
import { Html } from "react-konva-utils";
import Boundary from "../game/boundary";
import { BOUNDARIES } from "../../constants/boundaries";
import { SCENE } from "../../constants/scene";

const dx = 2;
const dy = 2;

export default function Canvas({ containerWidth, containerHeight }) {
  // handle responsive scene
  const scale = Math.min(
    containerWidth / SCENE.width,
    containerHeight / SCENE.height
  );

  // handle image properties
  const size = 100;
  const character = new window.Image(size, size);
  character.src = "/images/dio.jpg";
  character.alt = "character";
  const [position, setPosition] = useState({
    x: (SCENE.width - character.width) / 2,
    y: (SCENE.height - character.height) / 2,
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

  function handleJoystickMove(e) {
    switch (e.direction) {
      case "FORWARD":
        setKeys((keys) => ({
          ...keys,
          w: { ...keys.w, pressed: true },
          s: { ...keys.s, pressed: false },
        }));
        break;
      case "LEFT":
        setKeys((keys) => ({
          ...keys,
          a: { ...keys.a, pressed: true },
          d: { ...keys.d, pressed: false },
        }));
        break;
      case "BACKWARD":
        setKeys((keys) => ({
          ...keys,
          s: { ...keys.s, pressed: true },
          w: { ...keys.w, pressed: false },
        }));
        break;
      case "RIGHT":
        setKeys((keys) => ({
          ...keys,
          d: { ...keys.d, pressed: true },
          a: { ...keys.a, pressed: false },
        }));
        break;
    }
  }

  function handleJoystickStop() {
    setKeys({
      w: { pressed: false },
      a: { pressed: false },
      s: { pressed: false },
      d: { pressed: false },
    });
  }

  return (
    <Stage
      width={SCENE.width * scale}
      height={SCENE.height * scale}
      scale={{ x: scale, y: scale }}
      className="bg-amber-400"
    >
      <Layer>
        <Sprite image={character} position={position} />
        {BOUNDARIES["character-movement"].map(
          ({ position, width, height }, i) => (
            <Boundary
              key={i}
              position={position}
              width={width}
              height={height}
            />
          )
        )}
        <Html divProps={{ style: { position: "relative" } }}>
          <div className="absolute left-5 bottom-5">
            <Joystick move={handleJoystickMove} stop={handleJoystickStop} />
          </div>
        </Html>
      </Layer>
    </Stage>
  );
}
