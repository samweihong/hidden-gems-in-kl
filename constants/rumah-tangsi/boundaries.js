import { SCENE } from "../scene";

const DEFAULT_WIDTH = 10;
const DEFAULT_HEIGHT = 10;

const OUTER_BOUNDARIES = [
  { position: { x: 0, y: 0 }, width: SCENE.width, height: DEFAULT_HEIGHT },
  { position: { x: 0, y: 0 }, width: DEFAULT_WIDTH, height: SCENE.height },
  {
    position: { x: SCENE.width - DEFAULT_WIDTH, y: 0 },
    width: DEFAULT_WIDTH,
    height: SCENE.height,
  },
  {
    position: { x: 0, y: SCENE.height - DEFAULT_HEIGHT },
    width: SCENE.width,
    height: DEFAULT_HEIGHT,
  },
];

export const RT_BOUNDARIES = [
  [
    ...OUTER_BOUNDARIES,
    { position: { x: 0, y: 450 }, width: 470, height: DEFAULT_HEIGHT },
    { position: { x: 570, y: 450 }, width: 450, height: DEFAULT_HEIGHT },
  ],
  [
    ...OUTER_BOUNDARIES,
    { position: { x: 0, y: 450 }, width: 200, height: DEFAULT_HEIGHT },
    { position: { x: 200, y: 420 }, width: 220, height: 20 },
    { position: { x: 570, y: 370 }, width: 140, height: DEFAULT_HEIGHT },
  ],
  [...OUTER_BOUNDARIES],
];
