import { createRoot } from "react-dom/client";
import { Canvas, useLoader } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import React, { useRef } from "react";

export function Model(props) {
  const { nodes, materials } = useGLTF("/bmw.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[-286.371, 0, 164.751]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Meshesblack161Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Meshespiggrill1Mtl}
          // material-color={"aquamarine"}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Mesheszx1Mtl}
          material-color={"red"}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Mesheszx1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_8.geometry}
          material={materials.Mesheswhite41Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.Meshesraidiator1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_10.geometry}
          material={materials.Meshesinterior71Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.Meshespillars1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.Meshespillars1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.Meshesheadlight51Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_14.geometry}
          material={materials.Mesheslogo11Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.Meshesdash11Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_16.geometry}
          material={materials.Mesheschrome51Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.Meshesredlight1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_18.geometry}
          material={materials.Meshesinterior231Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_19.geometry}
          material={materials.Meshesinterior181Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_20.geometry}
          material={materials.Mesheslight51Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.Meshesengine51Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_22.geometry}
          material={materials.Meshesled11Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.Meshesbody151Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_24.geometry}
          material={materials.Meshesblack151Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_25.geometry}
          material={materials.Mesheswindows1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_26.geometry}
          material={materials.Mesheslogo31Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_27.geometry}
          material={materials.Meshesled111Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_28.geometry}
          material={materials.Mesheslivery1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.Meshestail71Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_30.geometry}
          material={materials.Meshesff41Mtl}
        />
      </group>
      <group position={[-286.371, 0, 164.751]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_32.geometry}
          material={materials.Caliper1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials.Meshesm8rim1Mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_34.geometry}
          material={materials.Meshesm8rim0011Mtl}
        />
      </group>
    </group>
  );
}

export default function App() {
  return (
    <div id="canvas-container">
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 45 }}
        shadows={{ enabled: "false" }}
        style={{ position: "absolute", width: "87%" }}
      >
        <color attach="background" args={["#000"]} />
        <PresentationControls
          speed={1.2}
          global
          zoom={0.5}
          polar={[-0.1, Math.PI / 20]}
          config={{ mass: 1, tension: 150, friction: 26 }} // Spring config
          snap={false}
          azimuth={[-200, 100]}
        >
          <Stage environment={"studio"} shadows={false}>
            <Model scale={0.01} />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
}
useGLTF.preload("/bmw.gltf");

createRoot(document.getElementById("root")).render(<App />);
