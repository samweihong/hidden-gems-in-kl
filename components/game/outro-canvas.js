import { SCENE } from "../../constants/scene";
import { Image, Layer, Stage, Text } from "react-konva";
import { Html } from "react-konva-utils";

export default function OutroCanvas({
  containerWidth,
  containerHeight,
  score,
}) {
  const image = new window.Image(SCENE.width, SCENE.height);
  image.src = "/images/rumah-tangsi/outro.png";
  image.alt = "outro";

  // handle responsive scene
  const scale = Math.min(
    containerWidth / SCENE.width,
    containerHeight / SCENE.height
  );
  return (
    <Stage
      width={SCENE.width * scale}
      height={SCENE.height * scale}
      scale={{ x: scale, y: scale }}
    >
      <Layer>
        <Image image={image} position={{ x: 0, y: 0 }} />
        <Html>
          <div className="h-[576px] w-[1024px] pt-[420px] text-center">
            <p className="font-serif text-4xl">{`Your Score: ${score}/8`}</p>
          </div>
        </Html>
      </Layer>
    </Stage>
  );
}
