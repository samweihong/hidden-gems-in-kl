import { Image } from "react-konva";

export default function Sprite({ image, position, velocity }) {
  return <Image image={image} x={position.x} y={position.y} />;
}
