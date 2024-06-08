import { Link } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import "../App.css";

function Model(props) {
  const { scene } = useGLTF("/bmw.glb");
  return <primitive object={scene} {...props} />;
}

export default function LiveFeed() {
  return (
    <div className="canvas-wrapper">
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 45 }}
        style={{ position: "absolute", overflowX: "hidden", maxWidth: "88vw" }}
      >
        <color attach="background" args={["#101010"]} />
        <PresentationControls
          speed={1.5}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 4]}
        >
          <Stage environment={"studio"}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
