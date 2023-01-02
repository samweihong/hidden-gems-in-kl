import { Layer, Stage } from "react-konva";
import { useEffect, useState } from "react";
import Sprite from "../game/sprite";
import { Joystick } from "react-joystick-component";
import { Html } from "react-konva-utils";
import Boundary from "../game/boundary";
import { CHARACTER_MOVEMENT_BOUNDARIES as BOUNDARIES } from "../../constants/boundaries";
import { SCENE } from "../../constants/scene";
import { rectangularCollision } from "../game/game-logic";

const DX = 2;
const DY = 2;
const INTERVAL_DELAY = 3;

const CHARACTER = new window.Image(100, 100);
CHARACTER.src = "/images/dio.jpg";
CHARACTER.alt = "character";

export default function Canvas({ containerWidth, containerHeight }) {
  // handle responsive scene
  const scale = Math.min(
    containerWidth / SCENE.width,
    containerHeight / SCENE.height
  );

  // handle character's image properties
  const [position, setPosition] = useState({
    x: (SCENE.width - CHARACTER.width) / 2,
    y: (SCENE.height - CHARACTER.height) / 2,
  });
  CHARACTER.position = position;

  // handle player movement
  const defaultKeys = {
    w: { pressed: false },
    a: { pressed: false },
    s: { pressed: false },
    d: { pressed: false },
  };
  const [keys, setKeys] = useState(defaultKeys);
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

  // handle collision between player and boundaries
  useEffect(() => {
    const id = setInterval(() => {
      if (keys.w.pressed) {
        for (const boundary of BOUNDARIES)
          if (
            rectangularCollision(CHARACTER, {
              ...boundary,
              position: { ...boundary.position, y: boundary.position.y + DY },
            })
          )
            return;
        setPosition((position) => ({ ...position, y: position.y - DY }));
      }
      if (keys.a.pressed) {
        for (const boundary of BOUNDARIES)
          if (
            rectangularCollision(CHARACTER, {
              ...boundary,
              position: { ...boundary.position, x: boundary.position.x + DX },
            })
          )
            return;
        setPosition((position) => ({ ...position, x: position.x - DX }));
      }
      if (keys.s.pressed) {
        for (const boundary of BOUNDARIES)
          if (
            rectangularCollision(CHARACTER, {
              ...boundary,
              position: { ...boundary.position, y: boundary.position.y - DY },
            })
          )
            return;
        setPosition((position) => ({ ...position, y: position.y + DY }));
      }
      if (keys.d.pressed) {
        for (const boundary of BOUNDARIES)
          if (
            rectangularCollision(CHARACTER, {
              ...boundary,
              position: { ...boundary.position, x: boundary.position.x - DX },
            })
          )
            return;
        setPosition((position) => ({ ...position, x: position.x + DX }));
      }
    }, INTERVAL_DELAY);
    return () => {
      clearInterval(id);
    };
  }, [keys]);

  const [joystickDirection, setJoystickDirection] = useState(null);

  function handleJoystickMove(e) {
    if (joystickDirection === e.direction) return;
    setJoystickDirection(e.direction);
    switch (e.direction) {
      case "FORWARD":
        setKeys({
          ...defaultKeys,
          w: { ...keys.w, pressed: true },
        });
        break;
      case "LEFT":
        setKeys({
          ...defaultKeys,
          a: { ...keys.a, pressed: true },
        });
        break;
      case "BACKWARD":
        setKeys({
          ...defaultKeys,
          s: { ...keys.s, pressed: true },
        });
        break;
      case "RIGHT":
        setKeys({
          ...defaultKeys,
          d: { ...keys.d, pressed: true },
        });
        break;
    }
  }

  function handleJoystickStop() {
    setJoystickDirection(null);
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
        <Sprite image={CHARACTER} position={position} />
        {BOUNDARIES.map(({ position, width, height }, i) => (
          <Boundary key={i} position={position} width={width} height={height} />
        ))}
        <Html divProps={{ style: { position: "relative" } }}>
          <div className="absolute left-5 bottom-5">
            <Joystick
              size={140}
              move={handleJoystickMove}
              stop={handleJoystickStop}
            />
          </div>
        </Html>
      </Layer>
    </Stage>
  );
}
