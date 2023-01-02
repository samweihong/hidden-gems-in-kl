import { Rect } from "react-konva";

export default function Boundary({ position: { x, y }, width, height }) {
  return (
    <Rect x={x} y={y} fill="rgba(255,0,0,0.5)" width={width} height={height} />
  );
}
