import { Rect } from "react-konva";

export default function Boundary({ position: { x, y }, width, height }) {
  return <Rect x={x} y={y} fill="red" width={width} height={height} />;
}
