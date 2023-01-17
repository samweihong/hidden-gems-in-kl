import { Layer, Stage } from "react-konva";
import { useEffect, useState } from "react";
import Sprite from "./sprite";
import Boundary from "./boundary";
import { RT_BOUNDARIES } from "../../constants/rumah-tangsi/boundaries";
import { SCENE } from "../../constants/scene";
import { doorCollision, rectangularCollision } from "./game-logic";
import { RT_DOORS } from "../../constants/rumah-tangsi/doors";
import Door from "./door";
import { RT_PLAYER_POSITIONS } from "../../constants/rumah-tangsi/player-position";
import { RT_INFOS } from "../../constants/rumah-tangsi/info";
import Info from "./info";
import { Html } from "react-konva-utils";
import QuestionBox from "./question-box";
import { RT_QUESTIONS } from "../../constants/rumah-tangsi/questions";

const DX = 2;
const DY = 2;
const INTERVAL_DELAY = 3;

const CHARACTER = new window.Image(60, 60);
CHARACTER.src = "/images/dio.jpg";
CHARACTER.alt = "character";

export default function GameCanvas({
  containerWidth,
  containerHeight,
  level,
  setLevel,
  score,
  setScore,
}) {
  // handle responsive scene
  const scale = Math.min(
    containerWidth / SCENE.width,
    containerHeight / SCENE.height
  );

  // handle level change
  const [nextLevel, setNextLevel] = useState(level + 1);
  const [allDoors, setAllDoors] = useState(RT_DOORS);
  const [info, setInfo] = useState([]);
  const [showQuestionBox, setShowQuestionBox] = useState(false);

  const BACKGROUND = new window.Image(SCENE.width, SCENE.height);
  BACKGROUND.src = "/images/rumah-tangsi/bg/lvl" + level + ".png";
  BACKGROUND.alt = "background";
  const boundaries = RT_BOUNDARIES[2];
  const doors = RT_DOORS[level];
  const infos = RT_INFOS[level];

  const [infoImage, setInfoImage] = useState(null);

  // handle character's image properties
  const [position, setPosition] = useState({
    x: RT_PLAYER_POSITIONS[level].x,
    y: RT_PLAYER_POSITIONS[level].y,
  });
  CHARACTER.position = position;

  // handle player movement
  const defaultKeys = {
    w: { pressed: false },
    a: { pressed: false },
    s: { pressed: false },
    d: { pressed: false },
    r: { pressed: false },
    esc: { pressed: false },
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
        case "r":
          setKeys((keys) => ({ ...keys, r: { ...keys.r, pressed: true } }));
          break;
        case "Escape":
          setKeys((keys) => ({ ...keys, esc: { ...keys.esc, pressed: true } }));
          setInfoImage(null);
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
        case "r":
          setKeys((keys) => ({ ...keys, r: { ...keys.r, pressed: false } }));
          break;
        case "Escape":
          setKeys((keys) => ({
            ...keys,
            esc: { ...keys.esc, pressed: false },
          }));
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
    if (infoImage) return;
    const id = setInterval(() => {
      if (keys.w.pressed) {
        for (const boundary of boundaries)
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
        for (const boundary of boundaries)
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
        for (const boundary of boundaries)
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
        for (const boundary of boundaries)
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

  // handle collision between player and doors
  useEffect(() => {
    if (infoImage) return;
    const id = setInterval(() => {
      for (const door of doors)
        if (doorCollision(CHARACTER, door)) {
          if (!("question" in RT_QUESTIONS[level])) {
            setLevel(door.goToLevel);
            setPosition({
              x: RT_PLAYER_POSITIONS[nextLevel].x,
              y: RT_PLAYER_POSITIONS[nextLevel].y,
            });
          } else {
            setNextLevel(door.goToLevel);
            setShowQuestionBox(true);
          }
        }
    }, INTERVAL_DELAY);
    return () => {
      clearInterval(id);
    };
  }, [keys]);

  // handle collision between player and infos
  useEffect(() => {
    if (infos.length === 0) return;
    const id = setInterval(() => {
      for (const info of infos)
        if (rectangularCollision(CHARACTER, info) && keys.r.pressed) {
          const image = new window.Image(SCENE.width, SCENE.height);
          image.src = "/images/rumah-tangsi/info/lvl" + level + ".png";
          setInfoImage(image);
        }
    }, INTERVAL_DELAY);
    return () => {
      clearInterval(id);
    };
  }, [keys]);

  return (
    <Stage
      width={SCENE.width * scale}
      height={SCENE.height * scale}
      scale={{ x: scale, y: scale }}
    >
      <Layer>
        {"question" in RT_QUESTIONS[level] && showQuestionBox && (
          <Html>
            <QuestionBox
              question={RT_QUESTIONS[level].question}
              answers={RT_QUESTIONS[level].answers}
              correctAnswer={RT_QUESTIONS[level].correctAnswer}
              onComplete={() => {
                setShowQuestionBox(false);
                setLevel(nextLevel);
                setPosition({
                  x: RT_PLAYER_POSITIONS[nextLevel].x,
                  y: RT_PLAYER_POSITIONS[nextLevel].y,
                });
              }}
              score={score}
              setScore={setScore}
            />
          </Html>
        )}
        <Sprite image={BACKGROUND} position={{ x: 0, y: 0 }} />
        <Sprite image={CHARACTER} position={position} />
        {/*{boundaries.map(({ position, width, height }, i) => (*/}
        {/*  <Boundary key={i} position={position} width={width} height={height} />*/}
        {/*))}*/}
        {doors.map(({ position, width, height }, i) => (
          <Door key={i} position={position} width={width} height={height} />
        ))}
        {infos.map(({ position, width, height }, i) => (
          <Info key={i} position={position} width={width} height={height} />
        ))}
        <Sprite image={infoImage} position={{ x: 0, y: 0 }} />
      </Layer>
    </Stage>
  );
}
