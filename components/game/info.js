import { Circle } from "react-konva";

export default function Info({ position: { x, y }, width, height }) {
  return (
    <Circle
      x={x}
      y={y}
      fill="rgba(0,0,255,0.5)"
      width={width}
      height={height}
    />
  );
}
