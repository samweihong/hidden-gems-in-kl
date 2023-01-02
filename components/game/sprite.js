import { Image } from "react-konva";

export default function Sprite({ image, position: { x, y }, velocity }) {
  return <Image image={image} x={x} y={y} />;
}
