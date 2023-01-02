import { SCENE } from "./scene";

const DEFAULT_WIDTH = 50;
const DEFAULT_HEIGHT = 50;

export const CHARACTER_MOVEMENT_BOUNDARIES = [
  {
    position: {
      x: 0,
      y: 0,
    },
    width: SCENE.width,
    height: DEFAULT_HEIGHT,
  },
  {
    position: {
      x: 0,
      y: 0,
    },
    width: DEFAULT_WIDTH,
    height: SCENE.height,
  },
  {
    position: {
      x: SCENE.width - DEFAULT_WIDTH,
      y: 0,
    },
    width: DEFAULT_WIDTH,
    height: SCENE.height / 2,
  },
  {
    position: {
      x: SCENE.width - 2 * DEFAULT_WIDTH - 100,
      y: SCENE.height / 2,
    },
    width: 47,
    height: SCENE.height / 2,
  },
  {
    position: {
      x: 0,
      y: SCENE.height - DEFAULT_HEIGHT,
    },
    width: SCENE.width - 2 * DEFAULT_WIDTH - 100,
    height: DEFAULT_HEIGHT,
  },
  {
    position: {
      x: 200,
      y: 200,
    },
    width: 120,
    height: 120,
  },
  {
    position: {
      x: 600,
      y: 300,
    },
    width: 80,
    height: 80,
  },
];
