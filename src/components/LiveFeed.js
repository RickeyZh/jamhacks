import { createRoot } from "react-dom/client";
import { Canvas, useLoader } from "@react-three/fiber";
import { Stage, PresentationControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import React, { useEffect } from "react";
import * as THREE from 'three';

export function Model(props) {
  const obj = useLoader(OBJLoader, "/hand.obj");

  const updateChildColor = (object, childName, color) => {
    object.traverse((child) => {
      if (child.name === childName) {
        if (child.material) {
          child.material = new THREE.MeshStandardMaterial({ color: color });
        }
      }
    });
  };

  useEffect(() => {
    
    updateChildColor(obj, 'polySurface2 hand__1_:Box01', 'green');
    updateChildColor(obj, 'pSphere2', 'red'); // middle
    updateChildColor(obj, 'polySurface4 pSphere1', 'red');  //index
    updateChildColor(obj, 'pSphere3', 'red'); //ring
    updateChildColor(obj, 'pSphere4', 'red'); //pinky
    updateChildColor(obj, 'pSphere5', 'red'); // thumb

  }, [obj]);

  return <primitive object={obj} />;
}

export default function App() {
  return (
    <div id="canvas-container">
      <Canvas
        dpr={[1, 2]}
        camera={{ fov: 45 }}
        shadows={{ enabled: "false" }}
        style={{ position: "absolute", width: "85.8%" }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight />
        <color attach="background" args={["#000"]} />
        <PresentationControls
          speed={1.2}
          global
          zoom={0.5}
          rotation={[0, 0, 2]}
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

createRoot(document.getElementById("root")).render(<App />);
