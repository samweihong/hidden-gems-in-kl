import { Rect } from "react-konva";

export default function Door({ position: { x, y }, width, height }) {
  return (
    <Rect x={x} y={y} fill="rgba(0,255,0,0.5)" width={width} height={height} />
  );
}
