import { createRoot } from "react-dom/client";
import { Canvas, useLoader } from "@react-three/fiber";
import { Stage, PresentationControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import React, { useEffect } from "react";
import * as THREE from "three";
import firebase from "firebase/compat/app";
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  push,
  onValue,
} from "firebase/database";

firebase.initializeApp({
  apiKey: "AIzaSyBzjl0kMyjlXbiSLwaCaWt_OT9a1QGdEoY",
  authDomain: "fbtest-9cadb.firebaseapp.com",
  databaseURL: "https://fbtest-9cadb-default-rtdb.firebaseio.com",
  projectId: "fbtest-9cadb",
  storageBucket: "fbtest-9cadb.appspot.com",
  messagingSenderId: "597863423876",
  appId: "1:597863423876:web:8fdc9383d8713583af07d1",
});
const db = getDatabase();

function read(start, id, end) {
  const tempRef = ref(db, start + id.toString() + end);
  let data;
  onValue(tempRef, (snapshot) => {
    data = snapshot.val();
  });
  return data;
}

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
    updateChildColor(obj, "polySurface2 hand__1_:Box01", "green");
    updateChildColor(obj, "pSphere2", "red"); // middle
    updateChildColor(obj, "polySurface4 pSphere1", "red"); //index
    updateChildColor(obj, "pSphere3", "red"); //ring
    updateChildColor(obj, "pSphere4", "red"); //pinky
    updateChildColor(obj, "pSphere5", "red"); // thumb
  }, [obj]);

  useEffect(() => {
    setTimeout(() => {
      const t0 = read("data/", 0, "/thumb");

      const i0 = read("data/", 0, "/index");

      const m0 = read("data/", 0, "/mid");

      const r0 = read("data/", 0, "/ring");

      const p0 = read("data/", 0, "/pinky");

      const h0 = read("data/", 0, "/hype");

      if (t0) {
        updateChildColor(obj, "pSphere5", "red");
      } else {
        updateChildColor(obj, "pSphere5", "green");
      }
      if (i0) {
        updateChildColor(obj, "polySurface4 pSphere1", "red");
      } else {
        updateChildColor(obj, "polySurface4 pSphere1", "green");
      }
      if (m0) {
        updateChildColor(obj, "pSphere2", "red");
      } else {
        updateChildColor(obj, "pSphere2", "green");
      }
      if (r0) {
        updateChildColor(obj, "pSphere3", "red");
      } else {
        updateChildColor(obj, "pSphere3", "green");
      }
      if (p0) {
        updateChildColor(obj, "pSphere4", "red");
      } else {
        updateChildColor(obj, "pSphere4", "green");
      }
    }, 1000);
  });
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
          rotation={[Math.PI / 4, 5, 0]}
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
