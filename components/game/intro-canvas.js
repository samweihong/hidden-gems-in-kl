import { SCENE } from "../../constants/scene";
import { Image, Layer, Stage } from "react-konva";
import { Html } from "react-konva-utils";

export default function IntroCanvas({
  containerWidth,
  containerHeight,
  setLevel,
}) {
  // handle responsive scene
  const scale = Math.min(
    containerWidth / SCENE.width,
    containerHeight / SCENE.height
  );

  const image = new window.Image(SCENE.width, SCENE.height);
  image.src = "/images/rumah-tangsi/intro.png";
  image.alt = "intro";

  return (
    <Stage
      width={SCENE.width * scale}
      height={SCENE.height * scale}
      scale={{ x: scale, y: scale }}
    >
      <Layer>
        <Image image={image} position={{ x: 0, y: 0 }} />
        <Html>
          <div className="h-[576px] w-[1024px] text-center">
            <button
              className="mt-[400px] rounded-3xl border-4 border-white bg-secondary-300 py-4 px-6 font-sans text-sm font-bold text-white"
              onClick={() => setLevel(0)}
            >
              START
            </button>
          </div>
        </Html>
      </Layer>
    </Stage>
  );
}
